"use client"

import { Modal } from "../../ui/modal"
import Button from "../../ui/button/Button.tsx"

export function ReadContractPopup({ isOpen, closeModal, selectedContract }) {
    const formatFieldName = (key) => {
        return key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }

    const formatFieldValue = (value, key = "") => {
        if (value === null || value === undefined) return "N/A"

        if (key === "per_day_work_hours" && typeof value === "object" && !Array.isArray(value)) {
            return (
                <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">Date</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">Working Hours</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-600">
                        {Object.entries(value).map(([date, hours]) => (
                            <tr key={date} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                                <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">
                                    {new Date(date).toLocaleDateString("en-US", {
                                        weekday: "short",
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{hours}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }

        if (Array.isArray(value)) return value.length > 0 ? value.join(", ") : "None"
        if (typeof value === "boolean") return value ? "Yes" : "No"
        if (value instanceof Date || !isNaN(Date.parse(value))) {
            return new Date(value).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        }

        return value.toString()
    }

    const getStatusBadge = (status) => {
        const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
        switch (status.toLowerCase()) {
            case "pending":
                return `${baseClasses} bg-[#465FFF] text-white dark:bg-[#465FFF]`
            case "active":
                return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`
            case "completed":
                return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400`
            default:
                return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`
        }
    }

    const renderFieldRow = (label, value, key = "", isHighlight = false) => (
        <div
            className={`flex justify-between items-start py-4 ${isHighlight ? "bg-blue-50 dark:bg-blue-900/10 px-4 rounded-lg" : ""}`}
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
    )

    const renderSpecificContractFields = () => {
        if (!selectedContract.specific_contract_fields) {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400 italic">No additional contract fields specified</p>
                </div>
            )
        }

        const fields = selectedContract.specific_contract_fields

        return (
            <dl className="divide-y divide-gray-100 dark:divide-gray-700">
                {Object.entries(fields).map(([key, value]) => {
                    if (key === "attached_documents") {
                        return (
                            <div key={key} className="py-4">
                                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">{formatFieldName(key)}</dt>
                                <dd>
                                    {Array.isArray(value) && value.length > 0 ? (
                                        <div className="space-y-2">
                                            {value.map((doc, index) => (
                                                <a
                                                    key={index}
                                                    href={typeof doc === "string" ? doc : "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                                >
                                                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-lg">📄</span>
                                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                            {typeof doc === "string" ? doc : `Document ${index + 1}`}
                          </span>
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-sm text-gray-500 dark:text-gray-400 italic">No documents attached</span>
                                    )}
                                </dd>
                            </div>
                        )
                    }
                    return <div key={key}>{renderFieldRow(formatFieldName(key), value, key)}</div>
                })}
            </dl>
        )
    }

    const renderSpecificIndustryFields = () => {
        if (!selectedContract.specific_industry_fields) {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400 italic">No industry-specific fields specified</p>
                </div>
            )
        }

        const fields = selectedContract.specific_industry_fields
        return (
            <dl className="divide-y divide-gray-100 dark:divide-gray-700">
                {Object.entries(fields).map(([key, value]) => (
                    <div key={key}>{renderFieldRow(formatFieldName(key), value, key)}</div>
                ))}
            </dl>
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            showCloseButton
            className="max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl"
        >
            <div className="relative">
                <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedContract.position_title}</h1>

                    </div>
                </div>

                <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 pb-2 ">
                                Contract Overview
                            </h2>
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                <dl className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {renderFieldRow("Contract Type", formatFieldName(selectedContract.contract_type))}
                                    {renderFieldRow("Industry", formatFieldName(selectedContract.industry_type))}
                                    {renderFieldRow("Status", selectedContract.status, "status")}
                                    {renderFieldRow("Description", selectedContract.description)}
                                    {renderFieldRow("Start Date", selectedContract.start_date)}
                                    {renderFieldRow("End Date", selectedContract.end_date)}
                                    {renderFieldRow("Hourly Rate", `$${selectedContract.hourly_rate}`, "", true)}
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

                        <section>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 pb-2">
                                Industry Requirements
                            </h2>
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                {renderSpecificIndustryFields()}
                            </div>
                        </section>
                    </div>
                </div>

                <div className="px-8 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-xl">
                    <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            Last updated:{" "}
                            {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
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
        </Modal>
    )
}
