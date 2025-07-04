import { useModal } from "../../../hooks/useModal"

export default function LocumCvSummary({cvs}) {
    const { isOpen, openModal, closeModal } = useModal()
    const handleSave = () => {
        console.log("Saving changes...")
        closeModal()
    }
    return (
        <>
            {cvs && cvs.length > 0 ? (
                <div className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-8 bg-white dark:bg-[#171F2F] ">
                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cv Summary</h4>
                    </div>

                    {cvs &&
                        cvs.map((cv) => (
                            <div key={cv.cv_id} className="mb-12 last:mb-0">
                                <div className="mb-8 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 ">
                                    <h5 className="text-sm font-bold dark:text-white uppercase tracking-wider mb-4 letter-spacing-wide">
                                        🎓 Education
                                    </h5>
                                    <div className="space-y-3">
                                        {cv.education?.map((item, i) => (
                                            <div
                                                key={i}
                                                className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-300 dark:border-gray-600"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 ">
                                    <h5 className="text-sm font-bold  dark:text-white uppercase tracking-wider mb-4">
                                        💼 Experience
                                    </h5>
                                    <div className="space-y-3">
                                        {cv.experience?.map((item, i) => (
                                            <div
                                                key={i}
                                                className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-300 dark:border-gray-600"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 ">
                                    <h5 className="text-sm font-bold dark:text-white uppercase tracking-wider mb-4">
                                        🛠️ Skills
                                    </h5>
                                    <div className="space-y-4">
                                        {cv.skills?.map((item, i) => (
                                            <div
                                                key={i}
                                                className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-300 dark:border-gray-600 mb-3 pb-2"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <div className="p-8 border border-gray-200 rounded-2xl dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-4 relative">
                            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Loading CV information...</p>
                    </div>
                </div>
            )}

{/*
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
                <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Edit Address</h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Update your details to keep your profile up-to-date.
                        </p>
                    </div>
                    <form className="block">
                        <div className="px-2 overflow-y-auto custom-scrollbar">
                            <div className="space-y-5">
                                <div className="w-full inline-block align-top lg:w-[48%] lg:mr-[4%]">
                                    <Label>Country</Label>
                                    <Input type="text" value="United States" />
                                </div>

                                <div className="w-full inline-block align-top lg:w-[48%]">
                                    <Label>City/State</Label>
                                    <Input type="text" value="Arizona, United States." />
                                </div>

                                <div className="w-full inline-block align-top lg:w-[48%] lg:mr-[4%]">
                                    <Label>Postal Code</Label>
                                    <Input type="text" value="ERT 2489" />
                                </div>

                                <div className="w-full inline-block align-top lg:w-[48%]">
                                    <Label>TAX ID</Label>
                                    <Input type="text" value="AS4568384" />
                                </div>
                            </div>
                        </div>
                        <div className="px-2 mt-6 text-right">
                            <Button size="sm" variant="outline" onClick={closeModal} className="mr-3">
                                Close
                            </Button>
                            <Button size="sm" onClick={handleSave}>
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
*/}
        </>
    )
}
