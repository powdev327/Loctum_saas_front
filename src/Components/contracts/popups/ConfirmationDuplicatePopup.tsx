import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button.tsx";
import { useModal } from "../../../hooks/useModal.ts";
import { DuplicateContractPopup } from "./DuplicateContractPopup.tsx";

export function ConfirmationDuplicatePopup({ isOpen, closeModal, selectedContract }) {
    const {
        isOpen: isDuplicateModal,
        openModal: isOpenDuplicateModal,
        closeModal: isCloseDuplicateModal,
    } = useModal();

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                showCloseButton={false}
                className="max-w-[507px] p-6 lg:p-10"
            >
                <div className="text-center">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                        Duplicate Contract
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Are you sure you want to duplicate <span className="font-semibold">{selectedContract.position_title}</span> Contract?
                    </p>

                    <div className="flex items-center justify-center w-full gap-3 mt-8">
                        <Button size="sm" variant="outline" onClick={closeModal}>
                            Close
                        </Button>
                        <Button size="sm" onClick={isOpenDuplicateModal}>
                            Duplicate
                        </Button>
                    </div>
                </div>
            </Modal>
            {isDuplicateModal && (
                <DuplicateContractPopup
                    isOpen={isDuplicateModal}
                    closeModal={isCloseDuplicateModal}
                    selectedContract={selectedContract}
                    closeConfirmation={closeModal}
                />
            )}
        </>
    );
}