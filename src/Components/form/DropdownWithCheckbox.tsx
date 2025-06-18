import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownWithCheckboxProps {
  label: string;
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const DropdownWithCheckbox = ({
  label,
  options,
  selectedValues = [],
  onChange,
  className = '',
  placeholder = 'Select options',
  disabled = false,
}: DropdownWithCheckboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOption = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    if (selectedValues.length === 1) {
      const selectedOption = options.find(opt => opt.value === selectedValues[0]);
      return selectedOption?.label || selectedValues[0];
    }
    return `${selectedValues.length} selected`;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        className={`w-full flex justify-between items-center h-11 rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none transition-colors ${
          disabled
            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700'
            : 'bg-white border-gray-300 hover:border-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-gray-600 cursor-pointer'
        }`}
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate text-left dark:text-white">{getDisplayText()}</span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-h-60 overflow-auto">
          <ul
            role="listbox"
            className="py-1 divide-y divide-gray-100 dark:divide-gray-700"
          >
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                className="group"
                aria-selected={selectedValues.includes(option.value)}
              >
                <label className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-blue-500"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                    {option.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckbox;