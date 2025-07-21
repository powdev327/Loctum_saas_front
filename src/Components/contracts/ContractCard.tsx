"use client"

import type React from "react"
import { useState } from "react"
import { VerticalDotIcon } from "../../icons"
import { DropdownItem } from "../ui/dropdown/DropdownItem.tsx"
import { Dropdown } from "../ui/dropdown/Dropdown.tsx"

interface PlacementContractFields {
    remuneration?: string
    benefits?: string[]
    speciality?: string
    urgent_need?: boolean
    bonuses?: boolean
    fees?: string[]
    parking_available?: boolean
    languages_required?: string[]
    software_required?: string[]
    required_experience?: string
}

interface ReplacementContractFields {
    mission_type: string
    working_hours?: string
    pause_included?: boolean
    proposed_hourly_rate?: string
}

interface AffiliationContractFields {
    name_establishment?: string
    percentage_generated?: string
    percentage_payment_conditions?: string
    software_required?: string[]
    languages_required?: string[]
    benefits?: string[]
    duration_commitment?: string
    objectives_or_quotas?: string
}

interface ContractCardProps {
    contract_id: string
    client_id?: string
    institution_id?: string
    contract_type: string
    industry_type: string
    status: string
    position_title: string
    description: string
    start_date: string
    end_date?: string
    hourly_rate?: number
    placement_fields?: PlacementContractFields
    replacement_fields?: ReplacementContractFields
    affiliation_fields?: AffiliationContractFields
    handleDeleteClick: (id: string, name: string) => void
    onReadClick: () => void
    onDuplicateClick: () => void
    onUpdateClick: () => void
}

const ContractCard: React.FC<ContractCardProps> = ({
                                                       contract_id,
                                                       client_id,
                                                       institution_id,
                                                       contract_type,
                                                       industry_type,
                                                       status,
                                                       position_title,
                                                       description,
                                                       start_date,
                                                       end_date,
                                                       hourly_rate,
                                                       placement_fields,
                                                       replacement_fields,
                                                       affiliation_fields,
                                                       handleDeleteClick,
                                                       onReadClick,
                                                       onDuplicateClick,
                                                       onUpdateClick,
                                                   }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)
    const closeDropdown = () => setIsOpen(false)

    const formattedStartDate = new Date(start_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })

    const formattedEndDate = end_date
        ? new Date(end_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        : "N/A"

    const getStatusColor = () => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-[#465FFF]"
            case "active":
                return "bg-green-500"
            case "completed":
                return "bg-gray-500"
            default:
                return "bg-gray-400"
        }
    }

    const renderSpecificFields = () => {
        switch (contract_type.toLowerCase()) {
            case "placement":
                return (
                    <>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Experience
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 capitalize">
                                {placement_fields?.required_experience?.replaceAll("_", " ") || "N/A"}
                            </span>
                        </div>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Speciality
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {placement_fields?.speciality || "N/A"}
                            </span>
                        </div>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Languages
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {placement_fields?.languages_required?.join(", ") || "N/A"}
                            </span>
                        </div>
                    </>
                )
            case "replacement":
                return (
                    <>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Mission Type
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {replacement_fields?.mission_type || "N/A"}
                            </span>
                        </div>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Working Hours
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {replacement_fields?.working_hours || "N/A"}
                            </span>
                        </div>
                    </>
                )
            case "affiliation":
                return (
                    <>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Establishment
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {affiliation_fields?.name_establishment || "N/A"}
                            </span>
                        </div>
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                                Percentage Generated
                            </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {affiliation_fields?.percentage_generated || "N/A"}
                            </span>
                        </div>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
            <div className={`h-1 w-full ${getStatusColor()}`}></div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-400">
                                {contract_type}
                            </span>
                        </div>

                        <h3
                            onClick={onReadClick}
                            className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer dark:hover:text-blue-400 transition-colors duration-200 leading-tight"
                        >
                            {position_title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">{description}</p>
                    </div>

                    <div className="ml-4 flex-shrink-0">
                        <div className="relative">
                            <button
                                className="p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                onClick={toggleDropdown}
                                aria-label="Menu"
                            >
                                <VerticalDotIcon className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 size-5" />
                            </button>
                            <Dropdown
                                isOpen={isOpen}
                                onClose={closeDropdown}
                                class Name="w-40 p-2 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg"
                            >
                                <DropdownItem
                                    onItemClick={() => {
                                        onReadClick()
                                        closeDropdown()
                                    }}
                                >
                                    View Details
                                </DropdownItem>
                                <DropdownItem
                                    onItemClick={() => {
                                        onUpdateClick()
                                        closeDropdown()
                                    }}
                                >
                                    Update
                                </DropdownItem>
                                <DropdownItem
                                    onItemClick={() => {
                                        onDuplicateClick()
                                        closeDropdown()
                                    }}
                                >
                                    Duplicate
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => {
                                        handleDeleteClick(contract_id, position_title)
                                        closeDropdown()
                                    }}
                                    className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                >
                                    Delete
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                            Hourly Rate
                        </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            ${hourly_rate || "N/A"}
                        </span>
                    </div>

                    <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                            Start Date
                        </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {formattedStartDate}
                        </span>
                    </div>

                    <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                            End Date
                        </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {formattedEndDate}
                        </span>
                    </div>

                    {renderSpecificFields()}
                </div>
            </div>
        </div>
    )
}

export default ContractCard