import {useContract} from "../../../context/owner/ContractContext.tsx";
import {Modal} from "../../ui/modal";
import Button from "../../ui/button/Button.tsx";

export function DeleteContractPopup({ isOpen, closeModal, selectedContract }) {
    const { delete_client_contract } = useContract();
    return(
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            showCloseButton={false}
            className="max-w-[507px] p-6 lg:p-10"
        >
            <div className="text-center">
                <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                    Delete Contract
                </h4>
                <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete             <span className="font-semibold ">{selectedContract.name}</span> Contract ?

                </p>

                <div className="flex items-center justify-center w-full gap-3 mt-8">
                    <Button size="sm" variant="outline" onClick={closeModal}>
                        Close
                    </Button>
                    <Button size="sm" onClick={() => delete_client_contract(selectedContract.id, closeModal)}>
                        Delete
                    </Button>

                </div>
            </div>
        </Modal>
    )
}