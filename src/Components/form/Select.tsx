import { useState, useEffect } from "react";

interface Option {
    value: string;
    label: string;
    [key: string]: any; // Allows extra fields
}

interface SelectProps {
    options: Option[];
    placeholder?: string;
    onChange: (value: string) => void; // Changed to return string
    className?: string;
    value?: string; // Changed to string
    disabled?: boolean;
    required?: boolean;
}

const Select = ({
                    options,
                    placeholder = "Select an option",
                    onChange,
                    className = "",
                    value = "", // Default to empty string
                    disabled = false,
                    required = false,
                }: SelectProps) => {
    const getInitialValue = () => {
        return options.find((opt) => opt.value === value)?.value || "";
    };

    const [selectedValue, setSelectedValue] = useState<string>(getInitialValue());

    useEffect(() => {
        setSelectedValue(getInitialValue());
    }, [value, options]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onChange(newValue); // Pass only the value string
    };

    return (
        <select
            className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${
                selectedValue ? "text-gray-800 dark:text-white/90" : "text-gray-400 dark:text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
            value={selectedValue}
            onChange={handleChange}
            disabled={disabled}
            required={required}
        >
            <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
                {placeholder}
            </option>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;