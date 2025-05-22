import { useState } from "react";

const useManagerForm = () => {
    const [manager_name, setManager_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");


    return {
        manager_name, setManager_name,
        email, setEmail,
        phone_number, setPhone_number,
    };
};

export default useManagerForm;