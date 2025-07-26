interface Option {
    value: string;
    label: string;
    [key: string]: any;
}

interface SelectProps {
    options: Option[];
    placeholder?: string;
    onChange: (option: Option | null) => void; // Now returns the whole option object
    className?: string;
    value?: Option | null; // Expects an option object
    disabled?: boolean;
    required?: boolean;
}

const SelectOption = ({
                    options,
                    placeholder = "Select an option",
                    onChange,
                    className = "",
                    value = null,
                    disabled = false,
                    required = false,
                }: SelectProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = options.find(opt => opt.value === e.target.value) || null;
        onChange(selectedOption);
    };

    return (
        <select
            className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${
                value ? "text-gray-800 dark:text-white/90" : "text-gray-400 dark:text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
            value={value?.value || ""}
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

export default SelectOption;