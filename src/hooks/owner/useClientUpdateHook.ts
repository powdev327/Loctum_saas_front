import { useState } from "react";

const useClientUpdateFom = () => {
    const [institution_name, setInstitution_name] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [full_address, setFull_address] = useState("");
    const [logo, setLogo] = useState<File | null>(null);


    return {
        institution_name, setInstitution_name,
        province, setProvince,
        city, setCity,
        phone_number, setPhone_number,
        full_address, setFull_address,
        logo, setLogo,
    };
};

export default useClientUpdateFom;