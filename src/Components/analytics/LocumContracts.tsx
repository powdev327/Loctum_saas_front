import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useLocum } from "../../context/locum/LocumContext.tsx";
import { ReadContractPopup } from "../contracts/popups/ReadContractPopup.tsx";
import { useModal } from "../../hooks/useModal.ts";
import { LocumContractCard } from "../contracts/popups/LocumContractCard.tsx";

interface Contract {
  position_title: string;
  contract_type: string;
  industry_type: string;
  status: string;
  hourly_rate: number;
  start_date: string;
  end_date: string;
  contract_location?: string;
  specific_contract_fields?: {
    contract_location?: string;
  };
}

interface LocumContractsProps {
  useGrid?: boolean;
  searchTerm?: string;
  filters?: {
    startDateFrom: string;
    startDateTo: string;
    hourlyRateMin: number | null;
    hourlyRateMax: number | null;
  };
  onReset?: () => void;
}

export default function LocumContracts({
                                         useGrid = false,
                                         searchTerm = "",
                                         filters = { startDateFrom: "", startDateTo: "", hourlyRateMin: null, hourlyRateMax: null },
                                         onReset,
                                       }: LocumContractsProps) {
  const { locum_contracts } = useLocum();
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const handleCloseModal = () => {
    closeModal();
    setSelectedContract(null);
  };

  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 2.3 },
      1536: { slidesPerView: 2.3 },
    },
  };

  // Filter contracts only if searchTerm or filters are actively set
  const filteredContracts = locum_contracts.filter((contract) => {
    // Apply search filter only if searchTerm is non-empty
    const searchMatch =
        !searchTerm ||
        contract.position_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contract.contract_type === "PLACEMENT" &&
            contract.specific_contract_fields?.contract_location?.toLowerCase().includes(searchTerm.toLowerCase()));

    // Apply start date filter only if both startDateFrom and startDateTo are set
    const startDateMatch =
        !filters.startDateFrom ||
        !filters.startDateTo ||
        (new Date(contract.start_date) >= new Date(filters.startDateFrom) &&
            new Date(contract.start_date) <= new Date(filters.startDateTo));

    // Apply hourly rate filter only if at least one of hourlyRateMin or hourlyRateMax is set
    const hourlyRateMatch =
        (filters.hourlyRateMin === null || contract.hourly_rate >= filters.hourlyRateMin) &&
        (filters.hourlyRateMax === null || contract.hourly_rate <= filters.hourlyRateMax);

    return searchMatch && startDateMatch && hourlyRateMatch;
  });

  return (
      <div className="w-full max-w-full border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-5 sm:p-6 rounded-2xl">
        <div className="flex justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Contracts</h3>
          {!useGrid && (
              <div className="relative inline-block">
                <div className="stocks-slider-outer relative flex items-center gap-1.5">
                  <div className="swiper-button-prev">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M10.1667 4L6 8.16667L10.1667 12.3333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="swiper-button-next">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M5.83333 12.6667L10 8.50002L5.83333 4.33335"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
          )}
        </div>

        {filteredContracts.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center">
              {searchTerm || filters.startDateFrom || filters.startDateTo || filters.hourlyRateMin !== null || filters.hourlyRateMax !== null
                  ? "No contracts match your search or filters."
                  : "No contracts available."}
            </p>
        ) : useGrid ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredContracts.map((contract, index) => (
                  <LocumContractCard
                      key={contract.contract_id || index}
                      contract={contract}
                      setSelectedContract={setSelectedContract}
                      openModal={openModal}
                  />
              ))}
            </div>
        ) : (
            <Swiper {...swiperOptions}>
              {filteredContracts.map((contract, index) => (
                  <SwiperSlide key={contract.contract_id || index}>
                    <LocumContractCard
                        contract={contract}
                        setSelectedContract={setSelectedContract}
                        openModal={openModal}
                    />
                  </SwiperSlide>
              ))}
            </Swiper>
        )}

        {selectedContract && (
            <ReadContractPopup
                isOpen={isOpen}
                closeModal={handleCloseModal}
                selectedContract={selectedContract}
            />
        )}
      </div>
  );
}