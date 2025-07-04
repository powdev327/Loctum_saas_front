import { useState, useEffect } from "react";
import { Modal } from "../../../ui/modal";
import Label from "../../../form/Label.tsx";
import Input from "../../../form/input/InputField.tsx";
import Button from "../../../ui/button/Button.tsx";
import { useLocum } from "../../../../context/locum/LocumContext.tsx";
import useLocumUpdateForm from "../../../../hooks/locum/useLocumUpdateHook.ts";
import toast from "react-hot-toast";
import { UpdateCvSummary } from "./UpdateCvSummary.tsx";

export function LocumUpdateInfo({ isModalOpen, iscloseModal, currentLocum }) {
    const { updateLocum } = useLocum();
    const { formData, cvFile, handleFileChange, handleChange, handleImageChange, logo } = useLocumUpdateForm(currentLocum);
    const [cvSummary, setCvSummary] = useState({ education: [], experience: [], skills: [] });
    const [isCvSummaryModalOpen, setIsCvSummaryModalOpen] = useState(false);
    const [isProcessingCv, setIsProcessingCv] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if (value !== "") {
                data.append(key, value);
            }
        });


        if (cvSummary) {
            data.append("cv_summary", JSON.stringify(cvSummary));
        }

        if (cvFile) {
            data.append("cv_file", cvFile);
        }

        if (logo) {
            data.append("logo_url", logo);
        }

        try {
            setIsProcessingCv(true);
            const response = await updateLocum(data);
            setIsProcessingCv(false);

            if (cvFile && response && typeof response === "object" && response.cv_summary) {
                const initialSummary = {
                    education: Array.isArray(response.cv_summary.education) ? response.cv_summary.education : [],
                    experience: Array.isArray(response.cv_summary.experience) ? response.cv_summary.experience : [],
                    skills: Array.isArray(response.cv_summary.skills) ? response.cv_summary.skills : [],
                };
                toast.success("CV uploaded successfully!");
                setCvSummary(initialSummary);
                setIsCvSummaryModalOpen(true);
            } else if (cvFile) {
                toast.error("CV summary not found or response is invalid.");
                console.warn("Invalid response structure:", response);
            }
        } catch (err) {
            setIsProcessingCv(false);
            toast.error(`Error updating locum: ${err.message}`);
            console.error("Error details:", err);
        }
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={iscloseModal} className="max-w-[700px] m-4">
                <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    {isProcessingCv && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-gray-900/90 rounded-3xl">
                            <div className="text-center">
                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
                                <p className="text-lg font-medium text-gray-800 dark:text-white">
                                    Wait a moment for getting CV Summary...
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Edit Personal Information
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Update your details to keep your profile up-to-date.
                        </p>
                    </div>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                {[
                                    { name: "full_name", label: "Full Name" },
                                    { name: "province", label: "Province" },
                                    { name: "city", label: "City" },
                                    { name: "industry_type", label: "Industry Type" },
                                    { name: "license_number", label: "License Number" },
                                    { name: "experience_years", label: "Years of Experience", type: "number" },
                                    { name: "hourly_rate", label: "Hourly Rate", type: "number" },
                                    { name: "phone_number", label: "Phone Number" },
                                    { name: "sexe", label: "Sexe" },
                                    { name: "address", label: "Address" },
                                    { name: "profession", label: "Profession" },
                                    { name: "postal_code", label: "Postal Code" },
                                ].map(({ name, label, type = "text" }) => (
                                    <div className="col-span-2 lg:col-span-1" key={name}>
                                        <Label>{label}</Label>
                                        <Input
                                            name={name}
                                            type={type}
                                            value={formData[name]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ))}

                                <div className="col-span-2">
                                    <Label>CV Upload (PDF)</Label>
                                    <input
                                        type="file"
                                        name="cv_file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                        disabled={isProcessingCv}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <Label>Logo Upload</Label>
                                    <input
                                        type="file"
                                        name="logo_url"
                                        onChange={handleImageChange}
                                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                        disabled={isProcessingCv}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={iscloseModal} disabled={isProcessingCv}>
                                Close
                            </Button>
                            <Button size="sm" disabled={!formData.full_name || isProcessingCv}>
                                {isProcessingCv ? "Processing..." : "Save Changes"}
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>

            {cvFile && isCvSummaryModalOpen && (
                <UpdateCvSummary
                    cvSummary={cvSummary}
                    setCvSummary={setCvSummary}
                    isCvSummaryModalOpen={isCvSummaryModalOpen}
                    setIsCvSummaryModalOpen={setIsCvSummaryModalOpen}
                    updateLocum={updateLocum}
                    formData={formData}
                />
            )}
        </>
    );
}