import Button from "../../ui/button/Button.tsx";
import { AffiliationFieldsComponent } from "./ContractFieldsPopup/AffiliationFields.tsx";
import { RemplacementFieldsComponent } from "./ContractFieldsPopup/RemplacementFields.tsx";
import { PlacementFieldsComponent } from "./ContractFieldsPopup/PlacementFields.tsx";
import { BaseFields } from "./ContractFieldsPopup/BaseFields.tsx";
import Radio from "../../form/input/Radio.tsx";
import Label from "../../form/Label.tsx";
import Select from "../../form/Select.tsx";
import { Modal } from "../../ui/modal";
import toast from "react-hot-toast";
import useContractForm from "../../../hooks/owner/contract/useContractHook.ts";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import { useContract } from "../../../context/owner/ContractContext.tsx";
import Checkbox from "../../form/input/Checkbox";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import SelectOption from "../../form/select-options.tsx";

const generateDateRange = (startDate: Date | null, endDate: Date | null): string[] => {
    if (!startDate || !endDate) return [];
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dateArray.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
};

export function CreateContractPopup({ isOpen, closeModal }) {
    const { institutions, client_id } = useClient();
    const { storeContract } = useContract();
    const { user } = useAuth();
    const [submissionAttempted, setSubmissionAttempted] = useState(false);
    const [isWorkHoursPopupOpen, setIsWorkHoursPopupOpen] = useState(false);

    const {
        formState,
        handleChange,
        getContractData
    } = useContractForm();

    const contractOptions = [
        { value: "PLACEMENT", label: "Placement" },
        { value: "AFFILIATION", label: "Affiliation" },
        { value: "REMPLACEMENT", label: "Remplacement" },
    ];

    const institutionOptions = institutions.map((inst) => ({
        label: inst.institution_name,
        value: inst.institution_id,
        institution_type: inst.institution_type,
        contract_type: inst.type_of_contract,
        fees_enabled: inst.fees_enabled,
        location: inst.address,
        province: inst.province,
    }));
    console.log(institutionOptions);

    const dateRange = generateDateRange(formState.start_date, formState.end_date);
    const daysInRange = formState.start_date && formState.end_date
        ? Math.ceil((formState.end_date.getTime() - formState.start_date.getTime()) / (1000 * 60 * 60 * 24)) + 1
        : 0;
    const showPerDayWorkHours = daysInRange > 0 && daysInRange <= 10;

    const hourOptions = Array.from({ length: 48 }, (_, i) => {
        const hours24 = Math.floor(i / 2);
        const minutes = i % 2 === 0 ? "00" : "30";
        const period = hours24 >= 12 ? "PM" : "AM";
        let hours12 = hours24 % 12;
        hours12 = hours12 === 0 ? 12 : hours12;
        const time12 = `${hours12}:${minutes} ${period}`;
        const time24 = `${hours24.toString().padStart(2, "0")}:${minutes}`;
        return { value: time24, label: time12 };
    });

    const handleSubmit = async () => {
        setSubmissionAttempted(true);


        if (!formState.institution_id || !formState.contract_type || !formState.description ||
            !formState.start_date || !formState.end_date || !formState.position_title ||
            !formState.contract_location) {
            toast.error("Missing required fields");
            return;
        }


        if (formState.contract_type === "PLACEMENT" && !formState.required_experience) {
            toast.error("Missing required placement field: required_experience");
            return;
        }
        if (formState.contract_type === "AFFILIATION" && !formState.name_establishment) {
            toast.error("Missing required affiliation field: establishment name");
            return;
        }
        if (formState.contract_type === "REMPLACEMENT" &&
            (!formState.mission_type || !formState.mission_objective ||
                !formState.desired_date || !formState.general_mission_proposed_hourly_rate)) {
            toast.error("Missing required remplacement fields");
            return;
        }

        try {
            const contractData = getContractData();
            const formData = new FormData();
            formData.append("contract_data", JSON.stringify(contractData));

            if (formState.attached_documents) {
                formState.attached_documents.forEach((file) =>
                    formData.append("attached_documents", file));
            }

            await storeContract(formData);
            toast.success("Contract created successfully!");
            closeModal();
        } catch (error) {
            toast.error("Failed to submit contract.");
            console.error("Submission error:", error);
        }
    };

    return (
        <>
          <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[900px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
              <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                <div className="px-2 pr-14">
                  <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                    Add Contract Details
                  </h4>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                    All contract details will be fully disclosed to healthcare professionals.
                  </p>
                </div>
                <div className="flex flex-col">
                  {/* Institution selection */}
                  <div className="col-span-2 mb-5">
                    <Label>Institution</Label>

                    {submissionAttempted && !formState.institution_id && (
                      <span className="text-red-500 text-xs block mb-1">
                        This field is required. Please select an institution.
                      </span>
                    )}

                    <div
                      className={`transition duration-300 ${
                        !formState.institution_id
                          ? "animate-pulse border border-red-500 rounded-lg"
                          : ""
                      }`}
                    >
                      <SelectOption
                        options={institutionOptions}
                        placeholder="Select institution"
                        value={
                          institutionOptions.find(
                            (opt) => opt.value === formState.institution_id
                          ) || null
                        }
                        onChange={(selectedOption) => {
                          handleChange("institution_id", selectedOption?.value || "");
                          handleChange(
                            "industry_type",
                            selectedOption?.institution_type || ""
                          );
                          handleChange("contract_location", selectedOption?.location || "");
                          handleChange("specialist_titles", []);
                          // Reset contract type on institution change
                          handleChange("contract_type", "");
                        }}
                      />
                    </div>

                    {!formState.institution_id && (
                      <p className="text-sm text-gray-500 mt-2">
                        Please select an institution to continue filling the form.
                      </p>
                    )}
                  </div>

                  {/* Contract Type selection, only after Institution selected */}
                  {formState.institution_id && (
                    <>
                      <div className="mb-5">
                        <Label>Contract Type</Label>
                        {submissionAttempted && !formState.contract_type && (
                          <span className="text-red-500 text-xs block mb-1">
                            This field is required. Please select a contract type.
                          </span>
                        )}

                        <div
                          className={`transition duration-300 ${
                            !formState.contract_type
                              ? "animate-pulse border border-red-500 rounded-lg p-2"
                              : ""
                          }`}
                        >
                          <div className="grid grid-cols-3 gap-3 mt-2">
                            {contractOptions.map((option) => (
                              <Radio
                                key={option.value}
                                id={`contract-type-${option.value}`}
                                name="contract_type"
                                value={option.value}
                                label={option.label}
                                checked={formState.contract_type === option.value}
                                onChange={(value) => handleChange("contract_type", value)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Show rest of the form only if contract type is selected */}
                      {formState.contract_type && (
                        <>
                          <BaseFields
                            formState={formState}
                            handleChange={handleChange}
                            submissionAttempted={submissionAttempted}
                            industryOptions={[
                              { value: "DentalClinic", label: "Dental Clinic" },
                              { value: "Pharmacy", label: "Pharmacy" },
                            ]}
                            selectedInstitution={
                              institutionOptions.find(
                                (opt) => opt.value === formState.institution_id
                              ) || null
                            }
                            contractType={formState.contract_type}
                          />

                          {formState.contract_type === "PLACEMENT" && (
                            <PlacementFieldsComponent
                              formState={formState}
                              handleChange={handleChange}
                              submissionAttempted={submissionAttempted}
                              feesEnabled={
                                institutions.find(
                                  (inst) => inst.institution_id === formState.institution_id
                                )?.fees_enabled || false
                              }
                              industry_type={formState.industry_type}
                            />
                          )}

                          {formState.contract_type === "AFFILIATION" && (
                            <AffiliationFieldsComponent
                              formState={formState}
                              handleChange={handleChange}
                              submissionAttempted={submissionAttempted}
                              industry_type={formState.industry_type}
                            />
                          )}

                          {formState.contract_type === "REMPLACEMENT" && (
                            <RemplacementFieldsComponent
                              formState={formState}
                              handleChange={handleChange}
                              submissionAttempted={submissionAttempted}
                              industry_type={formState.industry_type}
                              openWorkHoursPopup={() => setIsWorkHoursPopupOpen(true)}
                            />
                          )}

                          {/* Selected Active Dates Section */}



                          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                              Close
                            </Button>
                            <Button size="sm" onClick={handleSubmit}>
                              Save Changes
                            </Button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </Modal>

          {/* Daily Work Hours Popup */}
          {isWorkHoursPopupOpen && showPerDayWorkHours && (
            <Modal
              isOpen={true}
              onClose={() => setIsWorkHoursPopupOpen(false)}
              className="max-w-lg"
            >
              <div className="p-6 bg-white rounded-lg dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-medium">Set Daily Work Hours</h3>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                  {dateRange.map((date) => {
                    const formattedDate = new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                    const dayHours = formState.daily_hours?.[date] || {};
                    const isEnabled = dayHours.enabled ?? true;

                    const startTime = dayHours.start_time || "09:00";
                    const endTime = dayHours.end_time || "17:00";

                    return (
                      <div key={date} className="p-3 border rounded-md">
                        <div className="flex items-center justify-between mb-2">
                          <Checkbox
                            label={formattedDate}
                            checked={isEnabled}
                            onChange={(checked) => {
                              handleChange("daily_hours", {
                                ...formState.daily_hours,
                                [date]: {
                                  ...dayHours,
                                  enabled: checked,
                                  ...(!checked && {
                                    start_time: "09:00",
                                    end_time: "17:00",
                                  }),
                                },
                              });
                            }}
                            id={`work-hours-enabled-${date}`}
                          />
                          {isEnabled && (
                            <button
                              type="button"
                              className="text-sm text-brand-600 hover:text-brand-700"
                              onClick={() => {
                                handleChange("daily_hours", {
                                  ...formState.daily_hours,
                                  [date]: {
                                    ...dayHours,
                                    start_time: "09:00",
                                    end_time: "17:00",
                                  },
                                });
                              }}
                            >
                              Reset
                            </button>
                          )}
                        </div>

                        {isEnabled && (
                          <div className="flex items-center gap-2 mt-2 pl-7">
                            <div className="flex-1">
                              <Label>Start Time</Label>
                              <Select
                                className="w-full"
                                options={hourOptions}
                                value={startTime}
                                onChange={(newValue) => {
                                  handleChange("daily_hours", {
                                    ...formState.daily_hours,
                                    [date]: {
                                      ...dayHours,
                                      start_time: newValue || "09:00",
                                    },
                                  });
                                }}
                              />
                            </div>
                            <div className="flex items-center justify-center pt-5">
                              <span className="text-gray-500">to</span>
                            </div>
                            <div className="flex-1">
                              <Label>End Time</Label>
                              <Select
                                className="w-full"
                                options={hourOptions}
                                value={endTime}
                                onChange={(newValue) => {
                                  handleChange("daily_hours", {
                                    ...formState.daily_hours,
                                    [date]: {
                                      ...dayHours,
                                      end_time: newValue || "17:00",
                                    },
                                  });
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const resetHours = dateRange.reduce(
                        (acc, date) => ({
                          ...acc,
                          [date]: {
                            enabled: true,
                            start_time: "09:00",
                            end_time: "17:00",
                          },
                        }),
                        {}
                      );
                      handleChange("daily_hours", resetHours);
                    }}
                  >
                    Reset All
                  </Button>
                  <Button size="sm" onClick={() => setIsWorkHoursPopupOpen(false)}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </Modal>
          )}
        </>


    );
}