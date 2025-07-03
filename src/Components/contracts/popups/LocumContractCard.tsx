interface Contract {
    position_title: string;
    contract_type: string;
    industry_type: string;
    status: string;
    hourly_rate: number;
    start_date: string;
    end_date: string;
    contract_location?: string;
}


interface LocumContractCardProps {
    contract: Contract;
    setSelectedContract: (contract: Contract) => void;
    openModal: () => void;
}

export function LocumContractCard({
                                      contract,
                                      setSelectedContract,
                                      openModal,
                                  }: LocumContractCardProps) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-start justify-between">
                <div>
                    <h4 className="text-base font-semibold text-gray-800 dark:text-white/90">
                        {contract.position_title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {contract.contract_type.toLowerCase()} -{" "}
                        {contract.industry_type.replace("_", " ")}
                    </p>
                </div>
                <span className="text-xs font-medium text-success-600 dark:text-success-500">
          {contract.status}
        </span>
            </div>

            <div className="my-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                    <span>Hourly Rate</span>
                    <span>{contract.hourly_rate} €/h</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                    <span>Start Date</span>
                    <span>{new Date(contract.start_date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                    <span>End Date</span>
                    <span>{new Date(contract.end_date).toLocaleDateString()}</span>
                </div>

                {contract.contract_type === "PLACEMENT" && contract?.specific_contract_fields?.contract_location && (
                    <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                        <span>Location</span>
                        <span>{contract?.specific_contract_fields?.contract_location}</span>
                    </div>
                )}
            </div>

            <button
                onClick={() => {
                    setSelectedContract(contract);
                    openModal();
                }}
                className="flex w-full justify-center gap-2 rounded-lg border border-gray-300 bg-white p-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
            >
                View details
            </button>
        </div>
    );
}
