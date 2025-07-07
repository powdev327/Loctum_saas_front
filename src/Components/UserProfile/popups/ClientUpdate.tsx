import { Modal } from "../../ui/modal"
import Label from "../../form/Label.tsx"
import Input from "../../form/input/InputField.tsx"
import Button from "../../ui/button/Button.tsx"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import provincesData from "@/data/canada-provinces-cities.json"
import { useClient } from "../../../context/owner/ClientContext.tsx"

export function ClientUpdate({ isOpen, openModal, closeModal, clientId, client }) {
  const [filteredCities, setFilteredCities] = useState([])
  const [neighborhoods, setNeighborhoods] = useState([])
  const [isLoadingNeighborhoods, setIsLoadingNeighborhoods] = useState(false)
  const [neighborhoodError, setNeighborhoodError] = useState(null)
  const [showCustomAddressInput, setShowCustomAddressInput] = useState(false)

  const { updateClient } = useClient()

  const provinces = Object.keys(provincesData)

  const MAPBOX_TOKEN = "pk.eyJ1IjoiaGlqaWFuZ3RhbyIsImEiOiJjampxcjFnb3E2NTB5M3BvM253ZHV5YjhjIn0.WneUon5qFigfJRJ3oaZ3Ow"

  const validationSchema = Yup.object().shape({
    institution_name: Yup.string().required("Institution name is required"),
    province: Yup.string().required("Province is required"),
    city: Yup.string().required("City is required"),
    phone_number: Yup.string()
      .required("Phone number is required")
      .matches(
        /^(\+?1[-\s]?)?\(?[2-9][0-9]{2}\)?[-\s]?[2-9][0-9]{2}[-\s]?[0-9]{4}$/,
        "Must be a valid Canadian phone number (e.g., 555-555-5555 or +1 555 555 5555)"
      ),
    full_address: Yup.string().required("Full address is required"),
    logo: Yup.mixed().nullable(),
  })

  // Replace your formik initialization with this
  const formik = useFormik({
    enableReinitialize: true, // This will make formik reinitialize when initialValues changes
    initialValues: {
      institution_name: client?.institution_name || "",
      province: client?.province || "",
      city: client?.city || "",
      phone_number: client?.phone_number || "",
      full_address: client?.full_address || "",
      postal_code: client?.postal_code || "",
      logo: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData()
      // Only append changed values to formData
      let hasChanges = false;
      
      Object.keys(values).forEach(key => {
        if (values[key] !== client[key] && values[key] !== undefined) {
          formData.append(key, values[key])
          hasChanges = true;
        }
      })
      
      if (!hasChanges) {
        closeModal();
        return; // Don't make API call if nothing changed
      }
      
      try {
        await updateClient(clientId, formData)
        closeModal()
      } catch (e) {
        console.error("Error updating client:", e)
      }
    },
  })

  // This useEffect ensures form data is reset if client changes while modal is open
  useEffect(() => {
    if (client && isOpen) {
      // Properly set all form values from client data
      formik.setValues({
        institution_name: client.institution_name || "",
        province: client.province || "",
        city: client.city || "",
        phone_number: client.phone_number || "",
        full_address: client.full_address || "", 
        postal_code: client.postal_code || "",
        logo: null,
        // Add any other fields from your form
      });
      
      // Set up dependent fields correctly
      if (client.province) {
        const citiesForProvince = provincesData[client.province] || [];
        setFilteredCities(citiesForProvince);
        
        // If city and province are available, fetch neighborhoods
        if (client.city) {
          fetchNeighborhoods(client.city, client.province);
        }
      }
      
      console.log("Form initialized with client data:", client);
    }
  }, [client, isOpen]);

  const handleProvinceChange = (selectedProvince) => {
    formik.setFieldValue("province", selectedProvince)
    const citiesForProvince = provincesData[selectedProvince] || []
    setFilteredCities(citiesForProvince)
    formik.setFieldValue("city", "")
    formik.setFieldValue("full_address", "")
    setNeighborhoods([])
    setNeighborhoodError(null)
    setShowCustomAddressInput(false)
  }

  const handleCityChange = (selectedCity) => {
    formik.setFieldValue("city", selectedCity)
    formik.setFieldValue("full_address", "")
    setNeighborhoods([])
    setNeighborhoodError(null)
    setShowCustomAddressInput(false)
  }

  const handleAddressChange = (e) => {
    const value = e.target.value
    if (value === "other") {
      setShowCustomAddressInput(true)
      formik.setFieldValue("full_address", "")
    } else {
      setShowCustomAddressInput(false)
      formik.setFieldValue("full_address", value)
    }
  }
  

 
  const fetchNeighborhoods = async (city, province) => {
    if (!city || !province) return

    setIsLoadingNeighborhoods(true)
    setNeighborhoodError(null)

    try {
     
      const cityOption = {
        id: "city-default",
        name: city,
        fullAddress: `${city}, ${province}, Canada`,
        type: "city",
        isDefault: true,
      }

      
      setNeighborhoods([cityOption])

      // Multiple search strategies for comprehensive neighborhood discovery
      const searchQueries = [
        // Primary city search
        `${encodeURIComponent(city)}, ${encodeURIComponent(province)}, Canada`,
        `neighborhood in ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
        `district ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
        `area ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
        `community ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
        `suburb ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
      ]

      const allNeighborhoods = []
      const seenNames = new Set()

   
      const searchPromises = searchQueries.map(async (query) => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?` +
              `types=neighborhood,locality,district,place,address&` +
              `country=CA&` +
              `proximity=auto&` +
              `limit=15&` +
              `access_token=${MAPBOX_TOKEN}`,
          )

          if (!response.ok) return []

          const data = await response.json()

          return data.features
            .filter((feature) => {
              // Enhanced filtering for Canadian locations
              const isCanadian =
                feature.properties?.country_code === "ca" || feature.place_name.toLowerCase().includes("canada")

              const isRelevantType = feature.place_type.some((type) =>
                ["neighborhood", "locality", "district", "place", "address"].includes(type),
              )

              // Check if it's in the correct city/province
              const contextText = feature.context?.map((ctx) => ctx.text.toLowerCase()).join(" ") || ""
              const placeNameLower = feature.place_name.toLowerCase()

              const isInCorrectCity =
                contextText.includes(city.toLowerCase()) || placeNameLower.includes(city.toLowerCase())

              const isInCorrectProvince =
                contextText.includes(province.toLowerCase()) || placeNameLower.includes(province.toLowerCase())

              // Don't include the city itself again
              const isNotCityDuplicate = feature.text.toLowerCase() !== city.toLowerCase()

              return isCanadian && isRelevantType && isInCorrectCity && isInCorrectProvince && isNotCityDuplicate
            })
            .map((feature) => ({
              id: feature.id,
              name: feature.text,
              fullAddress: feature.place_name,
              coordinates: feature.center,
              type: feature.place_type[0],
              relevance: feature.relevance || 0,
              bbox: feature.bbox,
            }))
        } catch (error) {
          console.warn(`Search failed for query: ${query}`, error)
          return []
        }
      })

     
      const searchResults = await Promise.all(searchPromises)

      searchResults.forEach((results) => {
        results.forEach((neighborhood) => {
          const nameLower = neighborhood.name.toLowerCase()
          if (!seenNames.has(nameLower)) {
            seenNames.add(nameLower)
            allNeighborhoods.push(neighborhood)
          }
        })
      })

   
      const sortedNeighborhoods = allNeighborhoods.sort((a, b) => (b.relevance || 0) - (a.relevance || 0)).slice(0, 25) // Limit to top 25 results

    
      if (sortedNeighborhoods.length > 0) {
        setNeighborhoods([cityOption, ...sortedNeighborhoods])
      } else {
       
        try {
          const fallbackResponse = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json?` +
              `country=CA&` +
              `types=place,locality&` +
              `limit=10&` +
              `access_token=${MAPBOX_TOKEN}`,
          )

          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json()
            const fallbackOptions = fallbackData.features
              .filter(
                (feature) =>
                  feature.place_name.toLowerCase().includes(province.toLowerCase()) &&
                  feature.text.toLowerCase() !== city.toLowerCase(),
              )
              .map((feature, index) => ({
                id: `fallback-${index}`,
                name: feature.text,
                fullAddress: feature.place_name,
                type: "locality",
                relevance: feature.relevance || 0,
              }))

            if (fallbackOptions.length > 0) {
              setNeighborhoods([cityOption, ...fallbackOptions])
            } else {
              // Ultimate fallback - just the city
              setNeighborhoods([cityOption])
              setNeighborhoodError("No specific neighborhoods found. You can use the city center option.")
            }
          }
        } catch (fallbackError) {
          console.error("Fallback search failed:", fallbackError)
          setNeighborhoods([cityOption])
          setNeighborhoodError("Unable to load neighborhood data. You can use the city center option.")
        }
      }
    } catch (error) {
      console.error("Error fetching neighborhoods:", error)
      setNeighborhoodError("Failed to load neighborhoods")

      const cityFallback = {
        id: "city-error-fallback",
        name: city,
        fullAddress: `${city}, ${province}, Canada`,
        type: "city",
      }
      setNeighborhoods([cityFallback])
    } finally {
      setIsLoadingNeighborhoods(false)
    }
  }



  useEffect(() => {
    if (formik.values.city && formik.values.province) {
      const timer = setTimeout(() => {
        fetchNeighborhoods(formik.values.city, formik.values.province)
      }, 500) 

      return () => clearTimeout(timer)
    } else {
      setNeighborhoods([])
    }
  }, [formik.values.city, formik.values.province])

  console.log("ClientUpdate received client:", client);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Edit Your Institution Details</h4>
        
        </div>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <div className="px-2 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <Label>Institution Name</Label>
                <Input
                  type="text"
                  name="institution_name"
                  value={formik.values.institution_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.institution_name && formik.errors.institution_name}
                />
              </div>
              <div>
                <Label>Province</Label>
                <select
                  className={`h-11 w-full rounded-lg border-gray-700 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0 ${
                    formik.touched.province && formik.errors.province ? "border-red-500" : ""
                  }`}
                  name="province"
                  value={formik.values.province}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select a province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                {formik.touched.province && formik.errors.province && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.province}</div>
                )}
              </div>
              <div>
                <Label>City</Label>
                <select
                  className={`h-11 w-full rounded-lg border-gray-700 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0 ${
                    formik.touched.city && formik.errors.city ? "border-red-500" : ""
                  }`}
                  name="city"
                  value={formik.values.city}
                  onChange={(e) => handleCityChange(e.target.value)}
                  onBlur={formik.handleBlur}
                  disabled={!formik.values.province}
                >
                  <option value="">Select a city</option>
                  {filteredCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {formik.touched.city && formik.errors.city && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.city}</div>
                )}
              </div>

              <div>
                <Label>Phone Number</Label>
                <Input
                  type="text"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone_number && formik.errors.phone_number}
                />
              </div>

            <div className="lg:col-span-2">
  <Label>
    Full Address / Neighborhood
    {isLoadingNeighborhoods && (
      <span className="ml-2 text-xs text-blue-500 animate-pulse">Loading neighborhoods...</span>
    )}
    {neighborhoods.length > 1 && !isLoadingNeighborhoods && (
      <span className="ml-2 text-xs text-green-600">{neighborhoods.length - 1} neighborhoods found</span>
    )}
  </Label>

  {!showCustomAddressInput ? (
    <div className="relative">
      <select
        className={`h-11 w-full rounded-lg border-gray-700 border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0 appearance-none ${
          formik.touched.full_address && formik.errors.full_address ? "border-red-500" : ""
        }`}
        name="full_address"
        value={formik.values.full_address}
        onChange={handleAddressChange}
        onBlur={formik.handleBlur}
        disabled={!formik.values.city}
      >
        <option value="">
          {!formik.values.city
            ? "Select a city first"
            : neighborhoods.length === 0
              ? "Loading neighborhoods..."
              : "Select a neighborhood or address"}
        </option>

        {neighborhoods.map((neighborhood, index) => (
          <option key={neighborhood.id || index} value={neighborhood.fullAddress}>
            {neighborhood.isDefault
              ? `📍 ${neighborhood.name} (City Center)`
              : neighborhood.isStatic
                ? `🏘️ ${neighborhood.name}`
                : `📍 ${neighborhood.name}`}
          </option>
        ))}
        
        {/* Add the "Other" option */}
        {formik.values.city && (
          <option value="other">✏️ Other (Enter custom address)</option>
        )}
      </select>

      {/* Custom chevron icon */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {isLoadingNeighborhoods ? (
          <svg
            className="w-4 h-4 text-blue-500 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
    </div>
  ) : (
    <Input
      type="text"
      name="full_address"  // Changed from "custom_address" to "full_address"
      value={formik.values.full_address}
      onChange={formik.handleChange}  // Use Formik's handleChange directly
      onBlur={formik.handleBlur}
      placeholder="Enter your full address"
      error={formik.touched.full_address && formik.errors.full_address}
    />
  )}

  {/* Error messages */}
  {formik.touched.full_address && formik.errors.full_address && (
    <div className="mt-1 text-sm text-red-500">{formik.errors.full_address}</div>
  )}

  {neighborhoodError && <div className="mt-1 text-sm text-yellow-600">⚠️ {neighborhoodError}</div>}

  {/* Help text */}
  {formik.values.city && neighborhoods.length > 0 && !showCustomAddressInput && (
    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
      Select your specific neighborhood or use "{formik.values.city} (City Center)" for general city
      location. Can't find yours? Select "Other" to enter manually.
    </div>
  )}
</div>

              <div>
                <Label>Upload Logo (Optional)</Label>
                <input
                  className="h-11 cursor-pointer w-full rounded-lg border-gray-700 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0"
                  type="file"
                  name="logo_url"
                  onChange={(e) => formik.setFieldValue("logo_url", e.target.files?.[0] || null)}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal} type="button">
              Close
            </Button>
            <Button size="sm" type="submit" disabled={!formik.isValid}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
