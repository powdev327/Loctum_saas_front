"use client"

import type React from "react"
import { useState } from "react"
import { VerticalDotIcon } from "../../icons"
import { DropdownItem } from "../ui/dropdown/DropdownItem.tsx"
import { Dropdown } from "../ui/dropdown/Dropdown.tsx"

interface ContractCardProps {
    id: number | string
    name: string
    position_title: string
    description: string
    contract_type: string
    status: string
    hourly_rate: number
    start_date: string
    specific_contract_fields: any
    specific_industry_fields: any
    industry_type?: string
    handleDeleteClick: (id: number | string, name: string) => void
    onReadClick: () => void
    onDuplicateClick: () => void
    onUpdateClick: () => void
}

const ContractCard: React.FC<ContractCardProps> = ({
                                                       id,
                                                       name,
                                                       position_title,
                                                       description,
                                                       contract_type,
                                                       status,
                                                       hourly_rate,
                                                       start_date,
                                                       specific_contract_fields,
                                                       specific_industry_fields,
                                                       industry_type,
                                                       handleDeleteClick,
                                                       onReadClick,
                                                       onDuplicateClick,
                                                       onUpdateClick,
                                                   }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)
    const closeDropdown = () => setIsOpen(false)

    const workHours = () => {
        if (!specific_industry_fields) return "N/A"
        if (industry_type === "dental_clinic" && specific_industry_fields.work_hours) {
            return specific_industry_fields.work_hours.length > 0 ? specific_industry_fields.work_hours.join(", ") : "N/A"
        }
        if (industry_type === "pharmacy" && specific_industry_fields.daily_work_hours) {
            return specific_industry_fields.daily_work_hours.length > 0
                ? specific_industry_fields.daily_work_hours.join(", ")
                : "N/A"
        }
        return "N/A"
    }

    const experienceLevel =
        contract_type.toUpperCase() === "PLACEMENT" && specific_contract_fields?.experience_level
            ? specific_contract_fields.experience_level.replaceAll("_", " ")
            : "N/A"

    const formattedStartDate = new Date(start_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })

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

    const isAffiliation = contract_type.toLowerCase() === "affiliation"
    const isPlacement = contract_type.toLowerCase() === "placement"

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
                                className="w-40 p-2 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg"
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
                                        handleDeleteClick(id, name)
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
              {isPlacement ? "Rate" : "Hourly Rate"}
            </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">${hourly_rate || "N/A"}</span>
                    </div>

                    <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
              Start Date
            </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{formattedStartDate}</span>
                    </div>

                    {!isAffiliation && (
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                Work Hours
              </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">{workHours()}</span>
                        </div>
                    )}

                    {isPlacement && (
                        <div className="p-3 rounded border border-gray-100 dark:border-gray-800">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 block mb-1">
                Experience
              </span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 capitalize">
                {experienceLevel}
              </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContractCard
