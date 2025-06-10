import { useState, useEffect } from "react";

interface Option {
    value: string;
    label: string;
    [key: string]: any; // Allows extra fields
}

interface SelectProps<T extends Option> {
    options: T[];
    placeholder?: string;
    onChange: (option: T) => void;
    className?: string;
    value?: T | string; // Accepts full option or just the value
    disabled?: boolean; // Added to control interactivity
    required?: boolean; // Added to enforce selection
}

const Select = <T extends Option>({
                                      options,
                                      placeholder = "Select an option",
                                      onChange,
                                      className = "",
                                      value,
                                      disabled = false, // Default to false (enabled)
                                      required = false, // Default to false (not required)
                                  }: SelectProps<T>) => {
    const getInitialValue = () => {
        if (typeof value === "string") {
            return options.find((opt) => opt.value === value) || null;
        }
        return value || null;
    };

    const [selectedOption, setSelectedOption] = useState<T | null>(getInitialValue());

    useEffect(() => {
        setSelectedOption(getInitialValue());
    }, [value, options]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options.find((opt) => opt.value === e.target.value);
        if (selected) {
            setSelectedOption(selected);
            onChange(selected);
        }
    };

    return (
        <select
            className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
                selectedOption
                    ? "text-gray-800 dark:text-white/90"
                    : "text-gray-400 dark:text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
            value={selectedOption?.value || ""}
            onChange={handleChange}
            disabled={disabled}
            required={required}
        >
            <option
                value=""
                disabled
                className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
            >
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