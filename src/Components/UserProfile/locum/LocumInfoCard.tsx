import {useLocum} from "../../../context/locum/LocumContext";

export default function LocumInfoCard() {
    const {locum} = useLocum()
    return (
        <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                        Personal Information
                    </h4>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                Full Name
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.full_name ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                Industry Type
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.industry_type ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                Email address
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.email ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                Phone
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.phone_number ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                profession
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.profession ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                License Number
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.license_number ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                Province
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.province ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                postal code
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.postal_code ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                experience_years
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.experience_years ?? "undefined"}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                                hourly_rate
                            </p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                {locum?.hourly_rate ?? "undefined"}
                            </p>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
}