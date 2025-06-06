import { useState, useEffect } from "react";

const useLocumUpdateForm = (initialData) => {
    const [formData, setFormData] = useState({
        full_name: "",
        province: "",
        city: "",
        industry_type: "",
        license_number: "",
        experience_years: "",
        hourly_rate: "",
        phone_number: "",
        sexe: "",
        address: "",
        profession: "",
        postal_code: "",
    });

    const [cvFile, setCvFile] = useState(null);
    const [logo, setLogo] = useState(null);


    useEffect(() => {
        if (initialData) {
            setFormData({
                full_name: initialData.full_name || "",
                province: initialData.province || "",
                city: initialData.city || "",
                industry_type: initialData.industry_type || "",
                license_number: initialData.license_number || "",
                experience_years: initialData.experience_years || "",
                hourly_rate: initialData.hourly_rate || "",
                phone_number: initialData.phone_number || "",
                sexe: initialData.sexe || "",
                address: initialData.address || "",
                profession: initialData.profession || "",
                postal_code: initialData.postal_code || "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setCvFile(e.target.files[0]);
    };

    const handleImageChange = (e) => {
        setLogo(e.target.files?.[0] || null)
    };

    return {
        formData,
        setFormData,
        cvFile,
        logo,
        handleFileChange,
        handleImageChange,
        handleChange,
    };
};

export default useLocumUpdateForm;
