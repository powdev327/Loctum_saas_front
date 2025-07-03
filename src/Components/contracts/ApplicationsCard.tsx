import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown.tsx";
import { DropdownItem } from "../ui/dropdown/DropdownItem.tsx";
import { useState } from "react";
import { useApplication } from "../../context/owner/ApplicationContext.tsx";
import { useModal } from "../../hooks/useModal.ts";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button.tsx";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function ApplicationsCard() {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const [selectedAction, setSelectedAction] = useState<"approved" | "rejected" | null>(null);
    const [selectedApplication, setSelectedApplication] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const { applications, approved_applications, reject_application } = useApplication();
    console.log("ApplicationsCard", applications);

    const swiperOptions = {
        modules: [Navigation],
        slidesPerView: 1,
        loop: false,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 2.3,
            },
            1536: {
                slidesPerView: 2.3,
            },
        },
    };

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    const closeDropdown = () => {
        if (isOpenDropdown) setIsOpenDropdown(false);
    };

    const handleOpenModal = (action: "approved" | "rejected", application: any) => {
        setSelectedAction(action);
        setSelectedApplication(application);
        openModal();
        closeDropdown();
    };

    const handleCloseModal = () => {
        closeModal();
        setSelectedAction(null);
        setSelectedApplication(null);
        setLoading(false);
    };

    const handleAction = async () => {
        if (!selectedApplication || !selectedAction) return;

        setLoading(true);
        const toastId = toast.loading("Processing...");

        try {
            if (selectedAction === "approved") {
                await approved_applications(selectedApplication.application_id);
                toast.success("Application approved successfully!", { id: toastId });
            } else if (selectedAction === "rejected") {
                await reject_application(selectedApplication.application_id);
                toast.success("Application rejected successfully!", { id: toastId });
            }
            handleCloseModal();
        } catch (error) {
            console.error(`Error ${selectedAction}ing application:`, error);
            toast.error(`Failed to ${selectedAction} application. Please try again.`, { id: toastId });
        } finally {
            setLoading(false);
        }
    };
    const handleContactLocum = () => {
        navigate("/chat");
    }
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
            <div className="flex justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Contract Applications
                </h3>
                <div className="stocks-slider-outer relative flex items-center gap-1.5">
                    <div className="swiper-button-prev">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.1667 4L6 8.16667L10.1667 12.3333"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="swiper-button-next">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.83333 12.6667L10 8.50002L5.83333 4.33335"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="stocksSlider">
                <Swiper {...swiperOptions}>
                    {applications.map((application) => (
                        <SwiperSlide key={application.application_id} className="swiper-slide">
                            <div className="rounded-2xl bg-gray-100 p-5 dark:bg-white/[0.03] relative">
                                <div className="flex items-center justify-end">
                                    <div className="mb-5 relative inline-block">
                                        <button
                                            className="dropdown-toggle flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                            onClick={toggleDropdown}
                                        >
                                            <MoreDotIcon className="size-6" />
                                        </button>
                                        <Dropdown
                                            isOpen={isOpenDropdown}
                                            onClose={closeDropdown}
                                            className="w-40 p-2 absolute right-0 mt-2 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10"
                                        >
                                            <DropdownItem
                                                onItemClick={() => handleOpenModal("approved", application)}
                                                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300 py-2 px-4"
                                            >
                                                Approved
                                            </DropdownItem>
                                            <DropdownItem
                                                onItemClick={() => handleOpenModal("rejected", application)}
                                                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300 py-2 px-4"
                                            >
                                                Reject
                                            </DropdownItem>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pb-5 mb-5 border-b border-gray-200 dark:border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10">
                                            <img
                                                src={`http://127.0.0.1:8000${application.locum_image}`}
                                                alt={application.locum_name}
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
                                                {application.locum_name}
                                            </h3>
                                            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        contract name: {application.contract_name}
                      </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-medium text-right text-gray-700 text-theme-sm dark:text-gray-400">
                                            Experience: {application.locum_experience}
                                        </h4>
                                        <span className="flex items-center justify-end gap-1 font-medium text-theme-xs text-success-600 dark:text-success-500">
                      Status: {application.status}
                    </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={`http://127.0.0.1:8000/uploads/locums/${application.cv_url
                                            .replace(/\\/g, "/")
                                            .split("/")
                                            .pop()
                                            .replace(/ years$/, "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white p-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                                    >
                                        View CV
                                    </a>
                                    <button onClick={handleContactLocum} className="flex items-center justify-center w-full p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm shadow-theme-xs hover:bg-brand-600">
                                        Contact Locum
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                showCloseButton={false}
                className="max-w-[507px] p-6 lg:p-10"
            >
                <div className="text-center">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                        {selectedAction === "approved" ? "Approve Application" : "Reject Application"}
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Are you sure you want to set the status to{" "}
                        <span className="font-semibold">{selectedAction}</span>{" "}
                        for the application of{" "}
                        <span className="font-semibold">{selectedApplication?.locum_name}</span>?
                    </p>

                    <div className="flex items-center justify-center w-full gap-3 mt-8">
                        <Button size="sm" variant="outline" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleAction}
                            disabled={loading}
                        >
                            {selectedAction === "approved" ? "Approve" : "Reject"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}