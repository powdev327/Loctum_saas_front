
import ContractCard from "./ContractCard.tsx";
import {useModal} from "../../hooks/useModal.ts";
import {CreateContractPopup} from "./popups/CreateContractPopup.tsx";
import {useContract} from "../../context/owner/ContractContext.tsx";

const contractData = [
    {
        position_title: "Image Analyst",
        description: "Responsible for reviewing, organizing, and optimizing digital images for quality assurance and content standards. Works closely with media teams to ensure visual consistency across projects.",
        contract_type: "Placement",
    },
    {
        position_title: "Video Editor",
        description: "Edits raw video footage into polished content for films, marketing campaigns, and social platforms. Collaborates with directors and producers to achieve visual storytelling goals.",
        contract_type: "Affiliation",
    },
    {
        position_title: "Audio Technician",
        description: "Handles sound recording, mixing, and mastering for music tracks, podcasts, and video productions. Ensures audio clarity and consistency across all deliverables.",
        contract_type: "Affiliation",
    },
    {
        position_title: "App Developer",
        description: "Designs and builds mobile and web applications with a focus on performance, usability, and scalability. Works within agile teams to deliver high-quality software products.",
        contract_type: "Remplacement",
    },
    {
        position_title: "Document Specialist",
        description: "Manages the creation, formatting, and review of official documentation. Ensures compliance with legal and organizational standards in archiving and data handling.",
        contract_type: "Placement",
    },
    {
        position_title: "Download Coordinator",
        description: "Oversees and optimizes internal file distribution processes. Coordinates between departments to ensure secure and efficient data access across systems.",
        contract_type: "Placement",
    },
];


export default function AllContractCard() {
    const {contracts} = useContract();
    console.log('contrccc', contracts);
    const { isOpen : isUpdateModal, openModal: isOpenUpdateModal, closeModal: isCloseUpdateModal } = useModal();
    const { isOpen : isCreateModal, openModal: isOpenCreateModal, closeModal: isCloseCreateModal } = useModal();

    return (
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-4 py-4 sm:pl-6 sm:pr-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        All Contracts
                    </h3>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="relative">
                            <button className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2 dark:text-gray-400">
                                <svg
                                    className="fill-current"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.04199 9.37363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z"
                                        fill=""
                                    />
                                </svg>
                            </button>

                            <input
                                type="text"
                                placeholder="Search..."
                                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-3.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
                            />
                        </div>

                        <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 sm:w-auto" onClick={isOpenCreateModal}>
                            <svg
                                className="fill-current"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.2502 4.99951C9.2502 4.5853 9.58599 4.24951 10.0002 4.24951C10.4144 4.24951 10.7502 4.5853 10.7502 4.99951V9.24971H15.0006C15.4148 9.24971 15.7506 9.5855 15.7506 9.99971C15.7506 10.4139 15.4148 10.7497 15.0006 10.7497H10.7502V15.0001C10.7502 15.4143 10.4144 15.7501 10.0002 15.7501C9.58599 15.7501 9.2502 15.4143 9.2502 15.0001V10.7497H5C4.58579 10.7497 4.25 10.4139 4.25 9.99971C4.25 9.5855 4.58579 9.24971 5 9.24971H9.2502V4.99951Z"
                                    fill=""
                                />
                            </svg>
                            Add New Contract
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                    {contracts.map((item, i) => (
                        <ContractCard
                            key={i}
                            position_title={item.position_title}
                            description={item.description}
                            contract_type={item.contract_type}
                        />
                    ))}

                </div>
            </div>
            {isCreateModal && <CreateContractPopup isOpen={isCreateModal} closeModal={isCloseCreateModal}/>}
        </div>
    );
}
