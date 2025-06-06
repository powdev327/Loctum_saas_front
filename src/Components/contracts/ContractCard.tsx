import { useState } from "react";
import { VerticalDotIcon } from "../../icons";
import { DropdownItem } from "../ui/dropdown/DropdownItem.tsx";
import { Dropdown } from "../ui/dropdown/Dropdown.tsx";

interface ContractCardProps {
    id: number | string;
    name: string;
    position_title: string;
    description: string;
    contract_type: string;
    status: string;
    hourly_rate: number;
    start_date: string;
    specific_contract_fields: any;
    specific_industry_fields: any;
    industry_type?: string;
    handleDeleteClick: (id: number | string, name: string) => void;
    onReadClick: () => void;
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
                                                   }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);


    const workHours = () => {
        if (!specific_industry_fields) return "N/A";
        if (industry_type === "dental_clinic" && specific_industry_fields.work_hours) {
            return specific_industry_fields.work_hours.length > 0
                ? specific_industry_fields.work_hours.join(", ")
                : "N/A";
        }
        if (industry_type === "pharmacy" && specific_industry_fields.daily_work_hours) {
            return specific_industry_fields.daily_work_hours.length > 0
                ? specific_industry_fields.daily_work_hours.join(", ")
                : "N/A";
        }
        return "N/A";
    };



    const experienceLevel =
        contract_type === "PLACEMENT" && specific_contract_fields?.experience_level
            ? specific_contract_fields.experience_level.replaceAll("_", " ")
            : "N/A";

    const formattedStartDate = new Date(start_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const getStatusStyles = () => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-blue-500 shadow-blue-200";
            case "active":
                return "bg-green-500 shadow-green-200";
            case "completed":
                return "bg-purple-500 shadow-purple-200";
            default:
                return "bg-gray-500 shadow-gray-200";
        }
    };

    const getStatusBadgeStyles = () => {
        switch (status.toLowerCase()) {
            case "pending":
                return "text-blue-700 border-blue-200";
            case "active":
                return "text-green-700 border-green-200";
            case "completed":
                return "text-purple-700 border-purple-200";
            default:
                return "text-gray-700 border-gray-200";
        }
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-900">
            <div className={`h-1 w-full ${getStatusStyles().split(" ")[0]}`}></div>

            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className={`w-3 h-3 rounded-full ${getStatusStyles()
                                    .split(" ")[0]} shadow-md ${getStatusStyles().split(" ")[1]}`}
                            ></div>
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeStyles()}`}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                        </div>

                        <h3
                            onClick={onReadClick}
                            className="text-lg font-bold text-gray-900 dark:text-white cursor-pointer dark:hover:text-blue-400 transition-colors duration-200 mb-2 leading-tight"
                        >
                            {position_title}
                        </h3>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-black text-gray-600 dark:text-gray-300">
                                Contract Type{" "}
                            </span>
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md font-medium">
                                {contract_type}
                            </span>
                        </div>
                    </div>

                    <div className="ml-4 flex-shrink-0">
                        <div className="relative">
                            <button
                                className="p-2 rounded-lg border dark:hover:bg-gray-800"
                                onClick={toggleDropdown}
                            >
                                <VerticalDotIcon className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 size-5" />
                            </button>
                            <Dropdown
                                isOpen={isOpen}
                                onClose={closeDropdown}
                                className="w-40 p-2 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <DropdownItem onItemClick={closeDropdown}>
                                    Update
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => {
                                        handleDeleteClick(id, name);
                                        closeDropdown();
                                    }}
                                >
                                    Delete
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div
                    className={`grid grid-cols-2 gap-4 mt-2 ${
                        contract_type === "PLACEMENT" ? "grid-rows-2" : "grid-rows-2"
                    }`}
                >
                    <div className="p-4 rounded-xl border dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-sm font-semibold uppercase tracking-wide">
                                Hourly Rate
                            </span>
                        </div>
                        <span className="text-sm font-bold  dark:text-blue-100">
                            ${hourly_rate || "N/A"}
                        </span>
                    </div>

                    <div className="p-4 rounded-xl border">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-semibold uppercase tracking-wide">
                                Start Date
                            </span>
                        </div>
                        <span className="text-sm font-bold">
                            {formattedStartDate}
                        </span>
                    </div>

                    <div className="p-4 rounded-xl border">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <span className="text-sm font-semibold uppercase tracking-wide">
                                Work Hours
                            </span>
                        </div>
                        <span className="text-sm font-bold">
                            {workHours()}
                        </span>
                    </div>

                    {contract_type === "PLACEMENT" && (
                        <div className="p-4 rounded-xl border">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span className="text-sm font-semibold uppercase tracking-wide">
                                    Experience
                                </span>
                            </div>
                            <span className="text-sm font-bold dark:text-purple-100">
                                {experienceLevel}
                            </span>
                        </div>
                    )}
                </div>

                {/* Uncomment if you want the View Details button back
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onReadClick}
                        className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors"
                    >
                        View Details
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default ContractCard;