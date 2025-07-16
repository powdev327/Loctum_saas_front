import { useModal } from "../../../hooks/useModal.ts";
import {ClientAddInstitution} from "../popups/client/ClientAddInstitution.tsx";
import {ClientUpdate} from "../popups/client/ClientUpdate.tsx";


export default function UserMetaCard({ clientInfo, buildInstitutionPayload }) {
  console.log('clientInfo', clientInfo);
  const { isOpen : isUpdateModal, openModal: isOpenUpdateModal, closeModal: isCloseUpdateModal } = useModal();
  const { isOpen : isStoringModal, openModal: isOpenStoringModal, closeModal: isCloseStoringModal } = useModal();
  return (
      <>
        <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
              <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                <img
                    src={clientInfo?.logo_url ? `http://127.0.0.1:8000/${clientInfo.logo_url}` : "/images/user/owner.png"}
                    alt="Institution logo"
                />
              </div>
              <div className="order-3 xl:order-2">
                <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                  {clientInfo?.institution_name}
                </h4>
                <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {clientInfo?.phone_number || "No phone number"}
                  </p>
                  <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{clientInfo?.email || "No email"}</p>
                </div>
              </div>
            </div>
            <button
                onClick={isOpenStoringModal}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-44"
            >
              Add Institution
            </button>

            <button
                onClick={isOpenUpdateModal}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-44"
            >
              Edit Account
            </button>
          </div>
        </div>

        {isStoringModal && <ClientAddInstitution isOpen={isStoringModal} closeModal={isCloseStoringModal} clientInfo={clientInfo} buildInstitutionPayload={buildInstitutionPayload}/>}
        {isUpdateModal && <ClientUpdate isOpen={isUpdateModal} closeModal={isCloseUpdateModal} clientId={clientInfo?.client_id} client={clientInfo}/>}
      </>
  );
}