import { Modal } from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Button from "../../ui/button/Button.tsx";
import { useManager } from "../../../context/owner/ManagerContext.tsx";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import Switch from "../../form/switch/Switch.tsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const canadianPhoneRegex = /^(\+?1[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;


const formatPhoneNumber = (value: string): string => {
  if (!value) return value;
  

  const phoneNumber = value.replace(/[^\d]/g, '');
  if (phoneNumber.length <= 3) {
    return phoneNumber;
  }
  if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export function ClientAddManager({ isOpen, openModal, closeModal }) {
  const { storeManager } = useManager();
  const { refreshClient, institutions } = useClient();

  const validationSchema = Yup.object().shape({
    manager_name: Yup.string()
      .required("Manager name is required")
      .min(2, "Must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone_number: Yup.string()
      .required("Phone number is required")
      .matches(canadianPhoneRegex, "Invalid Canadian phone number"),
    is_self_billing: Yup.boolean(),
    institution_id: Yup.string().required("Institution is required"),
  });

  const formik = useFormik({
    initialValues: {
      manager_name: "",
      email: "",
      phone_number: "",
      is_self_billing: false,
      institution_id: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("manager_name", values.manager_name);
      formData.append("email", values.email);
      
    
      const cleanPhone = values.phone_number.replace(/[^\d]/g, '');
      formData.append("phone_number", cleanPhone);
      
      formData.append("is_self_billing", String(values.is_self_billing));
      formData.append("institution_id", values.institution_id);

      try {
        await storeManager(formData);
        refreshClient();
        closeModal();
        formik.resetForm();
      } catch (e) {
        console.error("Error storing manager:", e);
      }
    },
  });


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    formik.setFieldValue("phone_number", formattedValue);
  };

  useEffect(() => {
    if (!isOpen) {
      formik.resetForm();
    }
  }, [isOpen]);

  // Update the shouldShowError function to always show errors for non-empty fields or when submit is attempted
  const shouldShowError = (fieldName) => {
    return (
      // Show errors in these cases:
      (formik.touched[fieldName] && formik.errors[fieldName]) || // Field was touched and has error
      (formik.submitCount > 0 && formik.errors[fieldName]) ||    // Form submission was attempted
      (formik.values[fieldName] && formik.errors[fieldName])     // Field has a value but it's invalid
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Add Manager Information
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Add details of Manager to keep your profile up-to-date.
          </p>
        </div>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <div className="px-2 mb-4">
            <p className="text-xs text-amber-600 dark:text-amber-400">
              <span className="font-semibold">Note:</span> Fields marked with * are required.
            </p>
          </div>
          <div className="px-2 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <Label htmlFor="manager_name">Manager Name*</Label>
                <Input
                  id="manager_name"
                  type="text"
                  name="manager_name"
                  value={formik.values.manager_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={shouldShowError('manager_name') ? formik.errors.manager_name : undefined}
                  placeholder="John Doe"
                />
                {shouldShowError('manager_name') && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.manager_name}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={shouldShowError('email') ? formik.errors.email : undefined}
                  placeholder="manager@example.com"
                />
                {shouldShowError('email') && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div className="col-span-2">
                <Label htmlFor="phone_number">Phone Number*</Label>
                <Input
                  id="phone_number"
                  type="tel"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={handlePhoneChange}
                  onBlur={formik.handleBlur}
                  error={shouldShowError('phone_number') ? formik.errors.phone_number : undefined}
                  placeholder="(123) 456-7890"
                  maxLength={14}
                />
                {shouldShowError('phone_number') && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.phone_number}
                  </div>
                )}
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Canadian format: (123) 456-7890 or 123-456-7890
                </p>
              </div>

              <div className="col-span-2">
                <Label htmlFor="institution_id">Institution*</Label>
                <select
                  id="institution_id"
                  name="institution_id"
                  value={formik.values.institution_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-3 py-2 border rounded-md ${
                    shouldShowError('institution_id')
                      ? "border-red-500"
                      : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
                >
                  <option value="">Select Institution</option>
                  {institutions.map((institution) => (
                    <option 
                      key={institution.institution_id} 
                      value={institution.institution_id}
                    >
                      {institution.institution_name}
                    </option>
                  ))}
                </select>
                {shouldShowError('institution_id') && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.institution_id}
                  </div>
                )}
              </div>

              <div className="col-span-2 flex justify-between items-center">
                <Switch
                  label="I'll handle the billing myself"
                  checked={formik.values.is_self_billing}
                  onChange={(value) => {
                    formik.setFieldValue("is_self_billing", value);
                  }}
                />

                <div className="relative inline-block group">
                  <button
                    type="button"
                    className="inline-flex p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Self-billing information"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </button>
                  <div className="invisible absolute z-10 right-full top-1/2 mr-2 w-64 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="relative bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        If Self Billing is enabled, a new Super Client will be 
                        created under the same Client ID managing the account.
                      </p>
                      <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white dark:bg-gray-800 border-r border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button
              size="sm"
              variant="outline"
              onClick={closeModal}
              type="button"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              type="submit"
              disabled={formik.isSubmitting}
              loading={formik.isSubmitting}
              onClick={() => {
                // This will set all fields as touched to trigger validation
                formik.setTouched({
                  manager_name: true,
                  email: true,
                  phone_number: true,
                  institution_id: true
                });
              }}
            >
              {formik.isSubmitting ? "Saving..." : "Save Manager"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}