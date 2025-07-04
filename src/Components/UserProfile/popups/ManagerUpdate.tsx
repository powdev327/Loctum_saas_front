import useManagerForm from "../../../hooks/owner/useManagerHook.ts";
import {useManager} from "../../../context/owner/ManagerContext.tsx";
import {Modal} from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Button from "../../ui/button/Button.tsx";
import {useEffect} from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Canadian phone number regex
const canadianPhoneRegex = /^(\+?1[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;

// Validation schema
const validationSchema = Yup.object().shape({
  manager_name: Yup.string()
    .required('Manager name is required')
    .min(2, 'Manager name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone_number: Yup.string()
    .matches(canadianPhoneRegex, 'Invalid Canadian phone number')
    .required('Phone number is required')
});

export function ManagerUpdate({ isOpen, closeModal, selectedManager }) {
    const {updateManager, refreshManager, managers} = useManager();
    
    const formik = useFormik({
        initialValues: {
            manager_name: '',
            email: '',
            phone_number: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append("manager_name", values.manager_name);
            formData.append("email", values.email);
            formData.append("phone_number", values.phone_number);

            try {
                await updateManager(selectedManager.id, formData);
                refreshManager();
                closeModal();
                console.log("close");
                
            } catch (e) {
                console.error("Error storing manager:", e);
            }
        }
    });

    useEffect(() => {
        if (!selectedManager?.id || managers.length === 0) return;

        const foundManager = managers.find(manager => manager.manager_id === selectedManager.id);
        if (foundManager) {
            formik.setValues({
                manager_name: foundManager.manager_name || '',
                email: foundManager.email || '',
                phone_number: foundManager.phone_number || ''
            });
        }
    }, [selectedManager, managers]);

    return(
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Update {selectedManager.name} Manager
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
                                />
                                {formik.touched.manager_name && formik.errors.manager_name ? (
                                    <div className="mt-1 text-sm text-red-600">{formik.errors.manager_name}</div>
                                ) : null}
                            </div>

                            <div>
                                <Label>Email</Label>
                                <Input 
                                    type="text" 
                                    name="email"
                                    value={formik.values.email} 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="mt-1 text-sm text-red-600">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className='col-span-2'>
                                <Label>Phone Number</Label>
                                <Input 
                                    type="text" 
                                    name="phone_number"
                                    value={formik.values.phone_number} 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="e.g., 123-456-7890 or (123) 456-7890"
                                />
                                {formik.touched.phone_number && formik.errors.phone_number ? (
                                    <div className="mt-1 text-sm text-red-600">{formik.errors.phone_number}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <Button size="sm" variant="outline" onClick={closeModal} type="button">
                            Close
                        </Button>
                        <Button size="sm" type="submit" disabled={formik.isSubmitting}>
                            {formik.isSubmitting ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}