import { Modal } from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Button from "../../ui/button/Button.tsx";
import { useManager } from "../../../context/owner/ManagerContext.tsx";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import Switch from "../../form/switch/Switch.tsx";
import { useFormik } from "formik";
import * as Yup from "yup";

export function ClientAddManager({ isOpen, openModal, closeModal }) {
  const { storeManager } = useManager();
  const { refreshClient, institutions } = useClient();
console.log(institutions);


  const validationSchema = Yup.object().shape({
    manager_name: Yup.string().required("Manager name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone_number: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be at least 10 digits"),
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
      formData.append("phone_number", values.phone_number);
      formData.append("is_self_billing", String(values.is_self_billing));
      formData.append("institution_id", values.institution_id);

      try {
        await storeManager(formData);
        refreshClient();
        closeModal();
      } catch (e) {
        console.error("Error storing manager:", e);
      }
    },
  });

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
          <div className="px-2 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <Label>Manager Name</Label>
                <Input
                  type="text"
                  name="manager_name"
                  value={formik.values.manager_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.manager_name && formik.errors.manager_name
                  }
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                />
              </div>

              <div className="col-span-2">
                <Label>Phone Number</Label>
                <Input
                  type="text"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phone_number && formik.errors.phone_number
                  }
                />
              </div>

              <div className="col-span-2">
                <Label>Institution</Label>
                <select
                  name="institution_id"
                  value={formik.values.institution_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-3 py-2 border rounded-md ${
                    formik.touched.institution_id && formik.errors.institution_id
                      ? "border-red-500"
                      : "border-gray-300"
                  } dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
                >
                  <option value="">Select Institution</option>
                  {institutions.map((institution) => (
                    <option key={institution.institution_id} value={institution.institution_id}>
                      {institution.institution_name}
                    </option>
                  ))}
                </select>
                {formik.touched.institution_id && formik.errors.institution_id && (
                  <div className="mt-1 text-sm text-red-600">
                    {formik.errors.institution_id}
                  </div>
                )}
              </div>

              {/* Self-billing switch */}
              <div className="col-span-2 flex justify-between">
                <Switch
                  label="I'll handle the billing myself (Yes/No)"
                  checked={formik.values.is_self_billing}
                  onChange={(value) => {
                    formik.setFieldValue("is_self_billing", value);
                  }}
                />

                <div className="relative inline-block group">
                  <button
                    type="button"
                    className="inline-flex px-4 py-3 text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                    </svg>
                  </button>
                  <div className="invisible absolute z-999999 right-full top-1/2 mr-2.5 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="relative">
                      <div className="whitespace-nowrap rounded-lg bg-white border shadow-sm px-3 py-2 text-xs font-medium text-black drop-shadow-4xl dark:bg-[#1E2634] dark:text-white">
                        If Self Billing is enabled,
                        <br />
                        a new Super Client will be created under <br /> the same
                        Client ID managing the account.
                      </div>

                      <div className="absolute -right-1.5 top-1/2 h-3 w-4 -translate-y-1/2 rotate-45 bg-white dark:bg-[#1E2634]"></div>
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
              Close
            </Button>
            <Button
              size="sm"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}