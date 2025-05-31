import {Table, TableBody, TableCell, TableHeader, TableRow} from "../ui/table";
import {useModal} from "../../hooks/useModal.ts";
import {ManagerUpdate} from "./popups/ManagerUpdate.tsx";
import {useState} from "react";
import {DeleteManager} from "./popups/DeleteManager.tsx";

export default function ClientManagers({managers}) {
  const { isOpen : isUpdate, openModal: isOpenUpdateModal, closeModal: isCloseUpdateModal } = useModal();
  const { isOpen : isDelete, openModal: isOpenDeleteModal, closeModal: isCloseDeleteModal } = useModal();
  const [selectedManager, setSelectedManager] = useState({ id: null, name: ""});

  const handleOpenEditModal = (id, name) => {
    setSelectedManager({ id, name });
    isOpenUpdateModal();
  };

  const handleOpenDeleteModal = (id, name) => {
    setSelectedManager({ id, name });
    isOpenDeleteModal();
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Manager Name
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Email
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Phone Number
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium justify-center flex items-center gap-3 text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {managers?.map((manager) => (
                  <TableRow key={manager.manager_id} className="">
                    <TableCell className="py-3">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {manager.manager_name}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {manager.email}
                    </TableCell>
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {manager.phone_number}
                    </TableCell>
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      <div className='justify-center flex items-center gap-3'>
                        <button
                            onClick={() => handleOpenEditModal(manager.manager_id, manager.manager_name)}
                            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                        >
                          <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                                fill=""
                            />
                          </svg>
                          Edit
                        </button>
                            <button
                                onClick={() => handleOpenDeleteModal(manager.manager_id, manager.manager_name)}
                                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                   height="18" viewBox="0 0 32 32">
                                <path d="M 16 1.796875 C 14.609842 1.796875 13.220056 2.0236183 11.886719 2.4765625 C 10.790918 2.8487493 9.9716454 3.8186096 9.8457031 4.9960938 L 9.8476562 4.9960938 C 9.823717 5.2192366 9.8260965 5.4407699 9.828125 5.6621094 C 8.6980388 5.5366353 7.5698981 5.3884329 6.4472656 5.1933594 A 1.0001 1.0001 0 1 0 6.1054688 7.1640625 C 6.5016683 7.2329079 6.899652 7.2832828 7.296875 7.34375 C 5.9795828 12.790056 5.7276747 18.426446 6.5605469 23.943359 L 6.5625 23.953125 L 6.5644531 23.960938 C 7.0525932 26.828298 9.6277992 28.984375 12.318359 28.984375 L 19.679688 28.984375 C 22.370967 28.984375 24.947453 26.828026 25.435547 23.960938 L 25.435547 23.953125 L 25.4375 23.943359 C 26.271986 18.422306 26.018991 12.782034 24.699219 7.3320312 C 25.098396 7.2707183 25.498349 7.2181869 25.896484 7.1484375 A 1.0001 1.0001 0 0 0 25.71875 5.1621094 A 1.0001 1.0001 0 0 0 25.550781 5.1796875 C 24.427324 5.3765064 23.298946 5.5252061 22.167969 5.6523438 C 22.169913 5.4337969 22.177511 5.2160141 22.154297 4.9960938 C 22.028354 3.8186097 21.209082 2.8487493 20.113281 2.4765625 C 18.779944 2.0236183 17.390158 1.796875 16 1.796875 z M 16 3.7988281 C 17.17302 3.7988281 18.346041 3.989038 19.470703 4.3710938 C 19.852902 4.5009068 20.124005 4.8344685 20.164062 5.2089844 C 20.186312 5.4207522 20.190168 5.6293404 20.177734 5.84375 C 17.397306 6.0553891 14.604823 6.0570824 11.824219 5.8496094 C 11.811413 5.6332896 11.813154 5.4213588 11.835938 5.2089844 C 11.875998 4.8344685 12.147098 4.5009068 12.529297 4.3710938 C 13.653959 3.989038 14.82698 3.7988281 16 3.7988281 z M 22.710938 7.6035156 C 24.010616 12.857557 24.26434 18.303453 23.460938 23.630859 C 23.152658 25.42598 21.191214 26.984375 19.679688 26.984375 L 12.318359 26.984375 C 10.809306 26.984375 8.8496668 25.427822 8.5390625 23.634766 C 7.7364274 18.309833 7.9895689 12.867062 9.2871094 7.6152344 C 13.746791 8.1354052 18.251746 8.1302836 22.710938 7.6035156 z"></path>
                              </svg>
                              Delete

                            </button>

                      </div>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {isUpdate &&  <ManagerUpdate isOpen={isUpdate} closeModal={isCloseUpdateModal} selectedManager={selectedManager}/>}
      {isDelete &&  <DeleteManager isOpen={isDelete} closeModal={isCloseDeleteModal} selectedManager={selectedManager}/>}
    </>
  );
}
