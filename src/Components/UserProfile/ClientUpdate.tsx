import { Modal } from "../ui/modal";
import Label from "../form/Label.tsx";
import Input from "../form/input/InputField.tsx";
import Button from "../ui/button/Button.tsx";
import { useClient } from "../../context/owner/ClientContext.tsx";
import useClientUpdateFom from "../../hooks/owner/useClientUpdateHook.ts";

export function ClientUpdate({ isOpen, openModal, closeModal, clientId }) {
    const {
        institution_name, setInstitution_name,
        province, setProvince,
        city, setCity,
        phone_number, setPhone_number,
        full_address, setFull_address,
        logo, setLogo,
    } = useClientUpdateFom();
    const { updateClient, refreshClient } = useClient();

    const handleSave = async () => {
        const formData = new FormData();

        if (institution_name.trim()) formData.append("institution_name", institution_name);
        if (province.trim()) formData.append("province", province);
        if (city.trim()) formData.append("city", city);
        if (phone_number.trim()) formData.append("phone_number", phone_number);
        if (full_address.trim()) formData.append("full_address", full_address);
        if (logo) formData.append("logo", logo);

        try {
            await updateClient(clientId, formData);
            closeModal();
        } catch (err) {
            console.error("Error updating client:", err);
        }
    };



    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Edit Personal Information
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Update your details to keep your profile up-to-date.
                    </p>
                </div>
                <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <div className="px-2 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                            <div>
                                <Label>Institution Name</Label>
                                <Input type="text" value={institution_name} onChange={(e) => setInstitution_name(e.target.value)} />
                            </div>

                            <div>
                                <Label>City/State</Label>
                                <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>

                            <div>
                                <Label>Province</Label>
                                <Input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
                            </div>

                            <div>
                                <Label>Phone Number</Label>
                                <Input type="text" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                            </div>

                            <div>
                                <Label>Full Address</Label>
                                <Input type="text" value={full_address} onChange={(e) => setFull_address(e.target.value)} />
                            </div>

                            <div>
                                <Label>Upload Logo (Optional)</Label>
                                <input
                                    className="h-11 cursor-pointer w-full rounded-lg border-gray-700 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0"
                                    type="file"
                                    onChange={(e) => setLogo(e.target.files?.[0] || null)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <Button size="sm" variant="outline" onClick={closeModal}>
                            Close
                        </Button>
                        <Button size="sm" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
