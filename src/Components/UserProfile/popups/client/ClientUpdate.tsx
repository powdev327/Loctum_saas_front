import { Modal } from "../../../ui/modal";
import Label from "../../../form/Label.tsx";
import Input from "../../../form/input/InputField.tsx";
import Button from "../../../ui/button/Button.tsx";
import { useEffect, useState } from "react"; // Added useState for file name display
import { useFormik } from "formik";
import * as Yup from "yup";
import { useClient } from "../../../../context/owner/ClientContext.tsx";

interface Client {
  institution_name?: string;
  phone_number?: string;
  logo?: string | null; // Assuming logo is a URL or null in the client object
}

interface ClientUpdateProps {
  isOpen: boolean;
  closeModal: () => void;
  clientId: string;
  client: Client | null;
}

export function ClientUpdate({ isOpen, closeModal, clientId, client }: ClientUpdateProps) {
  const { updateClient } = useClient();
  const [fileName, setFileName] = useState<string | null>(null); // State for displaying selected file name

  const validationSchema = Yup.object().shape({
    institution_name: Yup.string().required("Institution name is required"),
    phone_number: Yup.string()
        .required("Phone number is required")
        .matches(
            /^(\+?1[-\s]?)?\(?[2-9][0-9]{2}\)?[-\s]?[2-9][0-9]{2}[-\s]?[0-9]{4}$/,
            "Must be a valid Canadian phone number (e.g., 555-555-5555 or +1 555 555 5555)"
        ),
    logo: Yup.mixed()
        .nullable()
        .test("fileType", "Only image files are allowed", (value) => {
          if (!value) return true; // Allow null (optional field)
          return value instanceof File && ["image/jpeg", "image/png", "image/gif"].includes(value.type);
        })
        .test("fileSize", "File size must be less than 5MB", (value) => {
          if (!value) return true; // Allow null
          return value instanceof File && value.size <= 5 * 1024 * 1024; // 5MB limit
        }),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      institution_name: client?.institution_name || "",
      phone_number: client?.phone_number || "",
      logo: null, // File object for new uploads
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      let hasChanges = false;

      // Append fields to FormData if they differ from the client data or are non-null
      if (values.institution_name !== (client?.institution_name || "")) {
        formData.append("institution_name", values.institution_name);
        hasChanges = true;
      }
      if (values.phone_number !== (client?.phone_number || "")) {
        formData.append("phone_number", values.phone_number);
        hasChanges = true;
      }
      if (values.logo instanceof File) {
        formData.append("logo", values.logo);
        hasChanges = true;
      }

      if (!hasChanges) {
        closeModal();
        return;
      }

      try {
        // Log FormData for debugging
        for (const [key, value] of formData.entries()) {
          console.log(`FormData: ${key}=${value}`);
        }
        await updateClient(clientId, formData);
        closeModal();
      } catch (e) {
        console.error("Error updating client:", e);
      }
    },
  });

  useEffect(() => {
    if (client && isOpen) {
      formik.setValues({
        institution_name: client.institution_name || "",
        phone_number: client.phone_number || "",
        logo: null, // Reset logo to null since client.logo is likely a URL, not a File
      });
      setFileName(null); // Reset file name display
      console.log("Form initialized with client data:", client);
    }
  }, [client, isOpen]);

  // Handle file selection and update file name for display
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    formik.setFieldValue("logo", file);
    setFileName(file ? file.name : null);
    if (file) {
      formik.setFieldTouched("logo", true); // Trigger validation
    }
  };

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
                  <Label>Institution Name <span className="text-red-500">*</span></Label>
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
                  <Label>Phone Number <span className="text-red-500">*</span></Label>
                  <Input
                      type="text"
                      name="phone_number"
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone_number && formik.errors.phone_number}
                  />
                </div>
                <div>
                  <Label>Upload Logo (Optional)</Label>
                  <div className="relative">
                    <input
                        className="h-11 cursor-pointer w-full rounded-lg border-gray-700 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0"
                        type="file"
                        name="logo"
                        onChange={handleFileChange}
                        onBlur={formik.handleBlur}
                        accept="image/jpeg,image/png,image/gif"
                    />
                    {fileName && (
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Selected: {fileName}
                        </div>
                    )}
                    {formik.touched.logo && formik.errors.logo && (
                        <div className="mt-1 text-sm text-red-500">{formik.errors.logo}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} type="button">
                Close
              </Button>
              <Button size="sm" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
  );
}