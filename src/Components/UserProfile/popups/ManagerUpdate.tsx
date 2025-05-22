import useManagerForm from "../../../hooks/owner/useManagerHook.ts";
import {useManager} from "../../../context/owner/ManagerContext.tsx";
import {Modal} from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Button from "../../ui/button/Button.tsx";
import {useEffect} from "react";

export function ManagerUpdate({ isOpen, closeModal, selectedManager }) {
    const {updateManager, refreshManager, managers} = useManager();
    const {
        manager_name, setManager_name,
        email, setEmail,
        phone_number, setPhone_number
    } = useManagerForm();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("manager_name", manager_name);
        formData.append("email", email);
        formData.append("phone_number", phone_number);

        try {
            await updateManager(selectedManager.id, formData);
            refreshManager();
            closeModal();
        } catch (e) {
            console.error("Error storing manager:", e);
        }
    };

    useEffect(() => {
        if (!selectedManager?.id || managers.length === 0) return;

        const foundManager = managers.find(manager => manager.manager_id === selectedManager.id);
        if (foundManager) {
            setManager_name(foundManager.manager_name || '');
            setEmail(foundManager.email || '');
            setPhone_number(foundManager.phone_number || '');
        }
    }, [selectedManager, managers]);

    return(
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Update {selectedManager.name} Manager
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Add details of Manager to keep your profile up-to-date.
                    </p>
                </div>
                <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <div className="px-2 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                            <div>
                                <Label>Manager Name</Label>
                                <Input type="text" value={manager_name} onChange={(e) => setManager_name(e.target.value)} />
                            </div>

                            <div>
                                <Label>Email</Label>
                                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>



                            <div className='col-span-2'>
                                <Label>Phone Number</Label>
                                <Input type="text" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <Button size="sm" variant="outline" onClick={closeModal}>
                            Close
                        </Button>
                        <Button size="sm" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>

    )
}