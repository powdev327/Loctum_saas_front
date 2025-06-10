import Input from "../../../form/input/InputField";
import Label from "../../../form/Label";
import MultiSelect from "../../../form/MultiSelect.tsx";

export const AffiliationFieldsComponent = ({ affiliationFields, setAffiliationFields }) => (
    <div className="mt-8 px-2">
        <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
            Affiliation Details
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
                <Label>Establishment Name</Label>
                <Input
                    value={affiliationFields.establishment_name || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, establishment_name: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Position Sought</Label>
                <Input
                    value={affiliationFields.position_sought || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, position_sought: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Affiliation Location</Label>
                <Input
                    value={affiliationFields.affiliation_location || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, affiliation_location: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Specialties (select multiple)</Label>
                <MultiSelect
                    options={[
                        { value: "Orthodontics", text: "Orthodontics" },
                        { value: "Endodontics", text: "Endodontics" },
                        { value: "Periodontics", text: "Periodontics" },
                        { value: "Surgery", text: "Surgery" },
                        { value: "Other", text: "Other" },
                    ]}
                    value={affiliationFields.specialties || []}
                    onChange={(values) =>
                        setAffiliationFields({
                            ...affiliationFields,
                            specialties: values,
                        })
                    }
                />
            </div>
            <div>
                <Label>Revenue Percentage</Label>
                <Input
                    type="number"
                    value={affiliationFields.revenue_percentage || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, revenue_percentage: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Payment Conditions</Label>
                <Input
                    value={affiliationFields.payment_conditions || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, payment_conditions: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Software Used</Label>
                <Input
                    value={affiliationFields.software_used || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, software_used: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Required Languages</Label>
                <Input
                    value={affiliationFields.required_languages || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, required_languages: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Advantages</Label>
                <textarea
                    className="w-full border rounded p-2"
                    rows={3}
                    value={affiliationFields.advantages || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, advantages: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Engagement Duration</Label>
                <Input
                    value={affiliationFields.engagement_duration || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, engagement_duration: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Objectives or Quotas</Label>
                <Input
                    value={affiliationFields.objectives_or_quotas || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, objectives_or_quotas: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Specific Clauses</Label>
                <textarea
                    className="w-full border rounded p-2"
                    rows={4}
                    value={affiliationFields.specific_clauses || ""}
                    onChange={(e) =>
                        setAffiliationFields({ ...affiliationFields, specific_clauses: e.target.value })
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
                            setAffiliationFields((prev) => ({
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
