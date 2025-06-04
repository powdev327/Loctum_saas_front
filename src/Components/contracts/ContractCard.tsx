import {MoreDotIcon, VerticalDotIcon} from "../../icons";
import {Dropdown} from "../ui/dropdown/Dropdown.tsx";
import {DropdownItem} from "../ui/dropdown/DropdownItem.tsx";
import {useState} from "react";

interface ContractCardProps {
    position_title: string;
    description: string;
    contract_type: string;
}

const ContractCard: React.FC<ContractCardProps> = ({
                                               position_title,
                                               description,
                                               contract_type,
                                           }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }
    function closeDropdown() {
        setIsOpen(false);
    }
    return (
        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5">
            <div className="flex items-center gap-4">
               {/* <div
                    className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl`}
                >


                </div>*/}
                <div>
                    <h4 className="mb-1 text-sm font-medium text-gray-800 dark:text-white/90">
                        {position_title}
                    </h4>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
            {description.slice(0, 40)} ...
          </span>
                </div>
            </div>

            <div>
        <span className="block mb-1 text-sm text-right text-gray-500 dark:text-gray-400">
          {contract_type}


        </span>
                <span className="block text-sm text-right">
 <div className="relative inline-block">
                        <button className="dropdown-toggle" onClick={toggleDropdown}>
                            <VerticalDotIcon className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 size-5" />
                        </button>
                        <Dropdown
                            isOpen={isOpen}
                            onClose={closeDropdown}
                            className="w-40 p-2"
                        >
                            <DropdownItem
                                onItemClick={closeDropdown}
                                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                Update
                            </DropdownItem>
                            <DropdownItem
                                onItemClick={closeDropdown}
                                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                Delete
                            </DropdownItem>
                        </Dropdown>
                    </div>        </span>
            </div>
        </div>
    );
};

export default ContractCard;
