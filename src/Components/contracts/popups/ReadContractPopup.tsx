import { useState } from "react";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button.tsx";
import { UpdateCvSummary } from "../../UserProfile/popups/locum/UpdateCvSummary.tsx";
import { useAuth } from "../../../context/AuthContext.tsx";

interface PlacementContractFields {
    remuneration?: string;
    benefits?: string[];
    speciality?: string;
    urgent_need?: boolean;
    bonuses?: boolean;
    fees?: string[];
    parking_available?: boolean;
    languages_required?: string[];
    software_required?: string[];
    required_experience?: string;
}

interface ReplacementContractFields {
    mission_type: string;
    working_hours?: string;
    pause_included?: boolean;
    proposed_hourly_rate?: string;
}

interface AffiliationContractFields {
    name_establishment?: string;
    percentage_generated?: string;
    percentage_payment_conditions?: string;
    software_required?: string[];
    languages_required?: string[];
    benefits?: string[];
    duration_commitment?: string;
    objectives_or_quotas?: string;
}

interface Contract {
    contract_id: string;
    client_id?: string;
    institution_id?: string;
    contract_type: string;
    industry_type: string;
    status: string;
    position_title: string;
    description: string;
    start_date: string;
    end_date?: string;
    hourly_rate?: number;
    placement_fields?: PlacementContractFields;
    replacement_fields?: ReplacementContractFields;
    affiliation_fields?: AffiliationContractFields;
}

interface ReadContractPopupProps {
    isOpen: boolean;
    closeModal: () => void;
    selectedContract: Contract;
}

export function ReadContractPopup({ isOpen, closeModal, selectedContract }: ReadContractPopupProps) {
    const { user } = useAuth();
    const [isCvSummaryModalOpen, setIsCvSummaryModalOpen] = useState(false);
    const latestCv = user?.cvs?.[user.cvs.length - 1];

    const formatFieldName = (key: string) => {
        return key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const formatFieldValue = (value: any, key: string = "") => {
        if (value === null || value === undefined) return "N/A";
        if (Array.isArray(value)) return value.length > 0 ? value.join(", ") : "None";
        if (typeof value === "boolean") return value ? "Yes" : "No";
        if (value instanceof Date || !isNaN(Date.parse(value))) {
            return new Date(value).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        }
        return value.toString();
    };

    const getStatusBadge = (status: string) => {
        const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold";
        switch (status.toLowerCase()) {
            case "pending":
                return `${baseClasses} bg-[#465FFF] text-white dark:bg-[#465FFF]`;
            case "active":
                return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`;
            case "completed":
                return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`;
        }
    };

    const renderFieldRow = (label: string, value: any, key: string = "", isHighlight: boolean = false) => (
        <div
            className={`flex justify-between items-start py-4 ${
                isHighlight ? "bg-blue-50 dark:bg-blue-900/10 px-4 rounded-lg" : ""
            }`}
        >
            <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-0 flex-shrink-0 mr-6">{label}</dt>
            <dd className="text-sm text-gray-900 dark:text-gray-100 text-right font-medium">
                {key === "status" ? (
                    <span className={getStatusBadge(value)}>{formatFieldValue(value, key)}</span>
                ) : (
                    formatFieldValue(value, key)
                )}
            </dd>
        </div>
    );

    const renderSpecificContractFields = () => {
        const contractType = selectedContract.contract_type.toLowerCase();
        let fields: any = {};

        if (contractType === "placement" && selectedContract.placement_fields) {
            fields = selectedContract.placement_fields;
        } else if (contractType === "replacement" && selectedContract.replacement_fields) {
            fields = selectedContract.replacement_fields;
        } else if (contractType === "affiliation" && selectedContract.affiliation_fields) {
            fields = selectedContract.affiliation_fields;
        } else {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400 italic">No additional contract fields specified</p>
                </div>
            );
        }

        return (
            <dl className="divide-y divide-gray-100 dark:divide-gray-700">
                {Object.entries(fields).map(([key, value]) => (
                    <div key={key}>{renderFieldRow(formatFieldName(key), value, key)}</div>
                ))}
            </dl>
        );
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                showCloseButton
                className="max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl"
            >
                <div className="relative">
                    <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {selectedContract.position_title}
                            </h1>
                        </div>
                    </div>

                    <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 pb-2">
                                    Contract Overview
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                    <dl className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {renderFieldRow("Contract ID", selectedContract.contract_id)}
                                        {selectedContract.client_id &&
                                            renderFieldRow("Client ID", selectedContract.client_id)}
                                        {selectedContract.institution_id &&
                                            renderFieldRow("Institution ID", selectedContract.institution_id)}
                                        {renderFieldRow("Contract Type", formatFieldName(selectedContract.contract_type))}
                                        {renderFieldRow("Industry", formatFieldName(selectedContract.industry_type))}
                                        {renderFieldRow("Status", selectedContract.status, "status")}
                                        {renderFieldRow("Description", selectedContract.description)}
                                        {renderFieldRow("Start Date", selectedContract.start_date)}
                                        {renderFieldRow("End Date", selectedContract.end_date)}
                                        {renderFieldRow(
                                            "Hourly Rate",
                                            selectedContract.hourly_rate ? `$${selectedContract.hourly_rate}` : "N/A",
                                            "",
                                            true
                                        )}
                                    </dl>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 pb-2">
                                    Contract Specifications
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                    {renderSpecificContractFields()}
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="px-8 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-xl">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                Last updated: {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                            </div>
                            <div className="flex items-center gap-4">
                                {user?.user_type === "locum" && (
                                    <Button
                                        onClick={() => setIsCvSummaryModalOpen(true)}
                                        className="px-6 py-2 font-medium bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                                    >
                                        Apply Contract
                                    </Button>
                                )}
                                <Button
                                    onClick={closeModal}
                                    variant="outline"
                                    className="px-6 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            {isCvSummaryModalOpen && latestCv && (
                <UpdateCvSummary
                    cvSummary={latestCv || { education: [], experience: [], skills: [] }}
                    isCvSummaryModalOpen={isCvSummaryModalOpen}
                    setIsCvSummaryModalOpen={setIsCvSummaryModalOpen}
                    contractId={selectedContract.contract_id}
                />
            )}
        </>
    );
}