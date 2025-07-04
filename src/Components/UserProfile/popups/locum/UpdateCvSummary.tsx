import { useState, useEffect } from "react";
import { Modal } from "../../../ui/modal";
import Label from "../../../form/Label.tsx";
import Input from "../../../form/input/InputField.tsx";
import Button from "../../../ui/button/Button.tsx";
import toast from "react-hot-toast";
import { useAuth } from "../../../../context/AuthContext.tsx";

export function UpdateCvSummary({
                                    cvSummary,
                                    isCvSummaryModalOpen,
                                    setIsCvSummaryModalOpen,
                                    contractId,
                                }) {
    const { updateUser, applyContract } = useAuth();
    const [localCvSummary, setLocalCvSummary] = useState(cvSummary);
    const [hasChanges, setHasChanges] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const isModified = JSON.stringify(localCvSummary) !== JSON.stringify(cvSummary);
        setHasChanges(isModified);
    }, [localCvSummary, cvSummary]);

    const handleCvSummaryChange = (section, index, value) => {
        const updatedSection = [...(localCvSummary[section] || [])];
        updatedSection[index] = value;
        setLocalCvSummary({ ...localCvSummary, [section]: updatedSection });
    };

    const handleApplyOrSave = async () => {
        setIsLoading(true);
        let toastId = toast.loading(hasChanges ? "Saving CV summary and applying..." : "Applying...");

        try {

            const isValid = ["education", "experience", "skills"].every((sectionKey) => {
                const section = localCvSummary[sectionKey];
                return (
                    Array.isArray(section) &&
                    section.length > 0 &&
                    section.every((item) => typeof item === "string" && item.trim() !== "")
                );
            });

            if (hasChanges) {
                if (!isValid) {
                    toast.dismiss(toastId);
                    toast.error("Please fill in all CV summary fields.");
                    setIsLoading(false);
                    return;
                }

                const dataToUpdate = new FormData();
                dataToUpdate.append("cv_summary", JSON.stringify(localCvSummary));
                await updateUser(dataToUpdate);
                toast.success("CV summary updated successfully!");
            }

            await applyContract(contractId);
            toast.dismiss(toastId);
            toast.success("Successfully applied for contract!");
            setIsCvSummaryModalOpen(false);
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(`Error: ${err.message}`);
            console.error("Error details:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={isCvSummaryModalOpen} onClose={() => setIsCvSummaryModalOpen(false)} className="max-w-[800px] m-4">
            <div className="no-scrollbar relative w-full max-w-[800px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Edit CV Summary</h4>
                <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                    {["education", "experience", "skills"].map((section) => (
                        <div key={section} className="mb-6">
                            <h5 className="mb-2 text-lg font-medium capitalize">{section}</h5>
                            {(localCvSummary[section] || []).map((item, index) => (
                                <div key={index} className="mb-2">
                                    <Label>{`Item ${index + 1}`}</Label>
                                    <Input
                                        type="text"
                                        value={item || ""}
                                        onChange={(e) => handleCvSummaryChange(section, index, e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                            ))}
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                    setLocalCvSummary({
                                        ...localCvSummary,
                                        [section]: [...(localCvSummary[section] || []), ""],
                                    })
                                }
                                disabled={isLoading}
                            >
                                Add Item
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setIsCvSummaryModalOpen(false)}
                        disabled={isLoading}
                    >
                        Close
                    </Button>
                    <Button size="sm" onClick={handleApplyOrSave} disabled={isLoading}>
                        {isLoading ? (
                            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></span>
                        ) : hasChanges ? (
                            "Save Changes and Apply"
                        ) : (
                            "Apply"
                        )}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}