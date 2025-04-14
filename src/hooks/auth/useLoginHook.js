import { useState } from "react";

const useLoginHook = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState("");

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        setLoading,
        userType,
        setUserType,
    };
};

export default useLoginHook;
