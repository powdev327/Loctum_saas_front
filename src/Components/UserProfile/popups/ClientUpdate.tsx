import { Modal } from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Button from "../../ui/button/Button.tsx";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import useClientUpdateFom from "../../../hooks/owner/useClientUpdateHook.ts";
import {useEffect, useState} from "react";
import Switch from "../../form/switch/Switch.tsx";

export function ClientUpdate({ isOpen, openModal, closeModal, clientId, client }) {
    const [active, setActive] = useState(false);
    const {
        institution_name, setInstitution_name,
        province, setProvince,
        city, setCity,
        phone_number, setPhone_number,
        full_address, setFull_address,
        logo, setLogo,
        is_self_billing, setIs_self_billing
    } = useClientUpdateFom();
    const { updateClient, refreshClient } = useClient();

    const handleSave = async () => {
        const formData = new FormData();

        if (institution_name.trim()) formData.append("institution_name", institution_name);
        if (province.trim()) formData.append("province", province);
        if (city.trim()) formData.append("city", city);
        if (phone_number.trim()) formData.append("phone_number", phone_number);
        if (full_address.trim()) formData.append("full_address", full_address);
        if (logo) formData.append("logo_url", logo);
        formData.append('is_self_billing', String(is_self_billing));
        try {
            await updateClient(clientId, formData);
            closeModal();
        } catch (err) {
            console.error("Error updating client:", err);
        }
    };

    useEffect(() => {
        if (isOpen && client) {
            setInstitution_name(client.institution_name || "");
            setProvince(client.province || "");
            setCity(client.city || "");
            setPhone_number(client.phone_number || "");
            setFull_address(client.full_address || "");
            setLogo(null);
            setIs_self_billing(client?.is_self_billing);

            if (client?.is_self_billing === true) {
                setActive(true);
            }
        }
    }, [isOpen, client]);


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

                            <div className="col-span-2 flex justify-between">
                                <Switch
                                    label="I'll handle the billing myself (Yes/No)"
                                    checked={is_self_billing === true}
                                    onChange={(value) => {
                                        setIs_self_billing(value);
                                        setActive(value);
                                    }}
                                />




                                <div className="relative inline-block group">
                                    <button className="inline-flex px-4 py-3 text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                                        </svg>
                                    </button>
                                    <div className="invisible absolute z-999999 right-full top-1/2 mr-2.5 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                                        <div className="relative">
                                            <div className="whitespace-nowrap rounded-lg bg-white border shadow-sm px-3 py-2 text-xs font-medium text-black drop-shadow-4xl dark:bg-[#1E2634] dark:text-white">
                                                If Self Billing is enabled,<br />
                                                a new Super Client will be created under <br /> the same Client ID managing the account.
                                            </div>

                                            <div className="absolute -right-1.5 top-1/2 h-3 w-4 -translate-y-1/2 rotate-45 bg-white dark:bg-[#1E2634]"></div>
                                        </div>
                                    </div>
                                </div>
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
