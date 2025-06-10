import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";
import MultiSelect from "../../../form/MultiSelect.tsx";

export const PlacementFieldsComponent = ({ placementFields, setPlacementFields, feesEnabled }) => (
    <div className="mt-8 px-2">
        <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
            Placement Details
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
                <Label>Desired Position</Label>
                <Select
                    options={[
                        { value: "General_dentist", label: "General Dentist" },
                        { value: "Specialist_dentist", label: "Specialist Dentist" },
                        { value: "Dental_hygienist", label: "Dental Hygienist" },
                        { value: "Dental_assistant", label: "Dental Assistant" },
                        { value: "Dental_receptionist", label: "Dental Receptionist" },
                    ]}
                    placeholder="Select desired position"
                    value={placementFields.desired_position}
                    onChange={(option) =>
                        setPlacementFields({
                            ...placementFields,
                            desired_position: option ? option.value : "",
                        })
                    }
                />
            </div>
            <div>
                <Label>Specialties (select multiple)</Label>
                <MultiSelect
                    options={[
                        { value: "Orthodontics", text: "Orthodontics" },
                        { value: "Endodontics", text: "Endodontics" },
                        { value: "Periodontics", text: "Periodontics" },
                        { value: "Surgery", text: "Surgery" },
                        { value: "Other", text: "Other" },
                    ]}
                    value={placementFields.specialties || []}
                    onChange={(values) =>
                        setPlacementFields({
                            ...placementFields,
                            specialties: values,
                        })
                    }
                />
            </div>
            <div>
                <Label>Contract Location</Label>
                <Input
                    value={placementFields.contract_location || ""}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, contract_location: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Start Date</Label>
                <Input
                    type="date"
                    value={placementFields.start_date || ""}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, start_date: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Experience Level</Label>
                <Select
                    options={[
                        { value: "Less_than_1_year", label: "Less than 1 year" },
                        { value: "1-3_years", label: "1-3 years" },
                        { value: "3-5_years", label: "3-5 years" },
                        { value: "5-10_years", label: "5-10 years" },
                        { value: "More_than_10_years", label: "More_than_10_years" },
                        { value: "Does_not_matter", label: "Does not matter" },
                    ]}
                    value={placementFields.experience_level}
                    onChange={(option) =>
                        setPlacementFields({
                            ...placementFields,
                            experience_level: option ? option.value : "",
                        })
                    }
                />
            </div>
            <div>
                <Label>Compensation</Label>
                <Select
                    options={[
                        { value: "Hourly_rate", label: "Hourly Rate" },
                        { value: "Fixed_salary", label: "Fixed Salary" },
                        { value: "Percentage_of_production", label: "Percentage of Production" },
                        { value: "Other", label: "Other" },
                    ]}
                    value={placementFields.compensation}
                    onChange={(option) =>
                        setPlacementFields({
                            ...placementFields,
                            compensation: option ? option.value : "",
                        })
                    }
                />
            </div>
            <div>
                <Label>Other Compensation</Label>
                <Input
                    type="number"
                    value={placementFields.other_compensation}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, other_compensation: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Benefits (select multiple)</Label>
                <MultiSelect
                    options={[
                        { value: "In_kind", text: "In Kind" },
                        { value: "In_cash", text: "In Cash" },
                    ]}
                    value={placementFields.benefits || []}
                    onChange={(values) =>
                        setPlacementFields({
                            ...placementFields,
                            benefits: values,
                        })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Task Description</Label>
                <Input
                    value={placementFields.task_description || ""}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, task_description: e.target.value })
                    }
                />
            </div>
            <div>
                <Switch
                    label="Urgent Need"
                    checked={placementFields.urgent_need || false}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, urgent_need: e })
                    }
                />
            </div>
            <div>
                <Switch
                    label="Bonus or Incentives"
                    checked={placementFields.bonus_or_incentives || false}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, bonus_or_incentives: e })
                    }
                />
            </div>
            {feesEnabled && (
                <div>
                    <Label>Fees</Label>
                    <Input
                        type="number"
                        placeholder="Enter fees"
                        value={placementFields?.fees || ""}
                        onChange={(e) =>
                            setPlacementFields({
                                ...placementFields,
                                fees: e.target.value,
                            })
                        }
                    />
                </div>
            )}
            <div>
                <Label>Parking</Label>
                <Input
                    value={placementFields.parking || ""}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, parking: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Languages (comma-separated)</Label>
                <Input
                    value={placementFields.languages?.join(", ") || ""}
                    onChange={(e) =>
                        setPlacementFields({
                            ...placementFields,
                            languages: e.target.value.split(",").map((s) => s.trim()).filter(s => s),
                        })
                    }
                />
            </div>
            <div>
                <Label>Softwares (comma-separated)</Label>
                <Input
                    value={placementFields.softwares?.join(", ") || ""}
                    onChange={(e) =>
                        setPlacementFields({
                            ...placementFields,
                            softwares: e.target.value.split(",").map((s) => s.trim()).filter(s => s),
                        })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Additional Information</Label>
                <textarea
                    className="w-full border p-2"
                    rows={3}
                    value={placementFields.additional_information || ""}
                    onChange={(e) =>
                        setPlacementFields({ ...placementFields, additional_information: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Attached Documents</Label>
                <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.rtf,.xls,.xlsx,.ppt,.pptx"
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            const fileArray = Array.from(files);
                            setPlacementFields((prev) => ({
                                ...prev,
                                attached_documents: fileArray,
                            }));
                        }
                    }}
                    className="block w-full text-sm text-gray-900 dark:text-white/90 file:mr-4 file:rounded file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-brand-800 dark:file:text-white"
                />
            </div>
        </div>
    </div>
);
