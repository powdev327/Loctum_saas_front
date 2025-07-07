import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";

export const RemplacementFieldsComponent = ({ remplacementFields, setRemplacementFields }) => (
    <div className="mt-8 px-2">
        <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
            Remplacement Details
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Hidden fields - still processed in the backend but not displayed */}
            <div style={{ display: 'none' }}>
                <Label>Mission Type</Label>
                <Input
                    value={remplacementFields.mission_type || "Default Mission Type"}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, mission_type: e.target.value })
                    }
                />
            </div>
            <div style={{ display: 'none' }}>
                <Label>Required Specialty</Label>
                <Input
                    value={remplacementFields.required_specialty || "Default Specialty"}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, required_specialty: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Mission Objective</Label>
                <textarea
                    className="w-full border rounded p-2"
                    rows={3}
                    value={remplacementFields.mission_objective || ""}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, mission_objective: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Estimated Duration</Label>
                <Input
                    value={remplacementFields.estimated_duration || ""}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, estimated_duration: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Preferred Date</Label>
                <Input
                    type="date"
                    value={remplacementFields.preferred_date || ""}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, preferred_date: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Proposed Rate</Label>
                <Input
                    type="number"
                    value={remplacementFields.proposed_rate || ""}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, proposed_rate: e.target.value })
                    }
                />
            </div>
            <div className="col-span-2">
                <Label>Equipment or Operating Room</Label>
                <textarea
                    className="w-full border rounded p-2"
                    rows={2}
                    value={remplacementFields.equipment_or_operating_room || ""}
                    onChange={(e) =>
                        setRemplacementFields({ ...remplacementFields, equipment_or_operating_room: e.target.value })
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
                            setRemplacementFields((prev) => ({
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
