import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button.tsx";

export function ReadContractPopup({ isOpen, closeModal, selectedContract }) {
    const formatFieldName = (key) => {
        return key
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const formatFieldValue = (value) => {
        if (value === null || value === undefined) return 'N/A';
        if (Array.isArray(value)) return value.length > 0 ? value.join(', ') : 'None';
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';
        if (value instanceof Date || !isNaN(Date.parse(value))) {
            return new Date(value).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        return value.toString();
    };



    const renderSpecificContractFields = () => {
        if (!selectedContract.specific_contract_fields) {
            return <p className="text-gray-500 italic">None</p>;
        }
        const fields = selectedContract.specific_contract_fields;

        return (
            <div className="grid grid-cols-1 gap-3">
                {Object.entries(fields).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                        {key === "attached_documents" ? (
                            <div className="w-full">
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                                {formatFieldName(key)}:
                            </span>
                                {Array.isArray(value) && value.length > 0 ? (
                                    <div className="mt-2 space-y-2">
                                        {value.map((doc, index) => (
                                            <a
                                                key={index}
                                                href={typeof doc === "string" ? doc : "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <span className="mr-2 text-xl text-gray-600 dark:text-gray-300">📄</span>
                                                <span className="text-sm">{typeof doc === "string" ? doc : `Document ${index + 1}`}</span>
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <span className="text-gray-900 dark:text-white/90">None</span>
                                )}
                            </div>
                        ) : (
                            <>
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                                {formatFieldName(key)}:
                            </span>
                                <span className="text-gray-900 dark:text-white/90">
                                {formatFieldValue(value)}
                            </span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        );
    };
    const renderSpecificIndustryFields = () => {
        if (!selectedContract.specific_industry_fields) {
            return <p className="text-gray-500 italic">None</p>;
        }
        const fields = selectedContract.specific_industry_fields;
        return (
            <div className="grid grid-cols-1 gap-3">
                {Object.entries(fields).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            {formatFieldName(key)}:
                        </span>
                        <span className="text-gray-900 dark:text-white/90">
                            {formatFieldValue(value)}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            showCloseButton
            className="max-w-[700px]  lg:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
        >
            <div className="relative w-full  overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 ">
                <div className="custom-scrollbar h-[500px] overflow-y-auto  pb-3">
            <div className="space-y-6 text-sm text-gray-800 dark:text-white/90">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                    {selectedContract.position_title}
                </h2>

                <div className=" border dark:bg-gray-700 p-4 rounded-md ">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Contract Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Contract Type:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                {formatFieldName(selectedContract.contract_type)}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Industry:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                {formatFieldName(selectedContract.industry_type)}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Status:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                {formatFieldName(selectedContract.status)}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Description:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                {formatFieldValue(selectedContract.description)}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Start Date:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                {formatFieldValue(selectedContract.start_date)}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">End Date:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                {formatFieldValue(selectedContract.end_date)}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300">Hourly Rate:</span>
                            <span className="text-gray-900 dark:text-white/90">
                                ${formatFieldValue(selectedContract.hourly_rate)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className=" border dark:bg-gray-700 p-4 rounded-md ">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Specific Contract Fields
                    </h3>
                    {renderSpecificContractFields()}
                </div>

                <div className=" border dark:bg-gray-700 p-4 rounded-md ">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Specific Industry Fields
                    </h3>
                    {renderSpecificIndustryFields()}
                </div>

                <div className="flex justify-end mt-6">
                    <Button
                        onClick={closeModal}
                        variant="outline"
                        className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                    >
                        Close
                    </Button>
                </div>
            </div>
                    </div>
                </div>
        </Modal>
    );
}