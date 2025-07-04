import PageBreadcrumb from "../Components/common/PageBreadCrumb";
import AllMediaCard from "../Components/file-manager/AllMediaCard";
import AllFolders from "../Components/file-manager/AllFolders";
import RecentFileTable from "../Components/file-manager/RecentFileTable";
import StorageDetailsChart from "../Components/file-manager/StorageDetailsChart";
import PageMeta from "../Components/common/PageMeta";

export default function FileManager() {
  return (
    <>
      <PageMeta
        title="React.js File Manager Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js File Manager Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="File Manager" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          {/* <!-- Media Card --> */}

          <AllMediaCard />
          {/* <!-- Media Card --> */}
        </div>

        <div className="col-span-12 xl:col-span-8">
          {/* <!-- Folders Card --> */}
          <AllFolders />
          {/* <!-- Folders Card --> */}
        </div>

        <div className="col-span-12 xl:col-span-4">
          {/* <!-- ====== Chart Sixteen Start --> */}
          <StorageDetailsChart />
          {/* <!-- ====== Chart Sixteen End --> */}
        </div>

        <div className="col-span-12">
          {/* <!-- ====== Table Seven Start --> */}
          <RecentFileTable />
          {/* <!-- ====== Table Seven End --> */}
        </div>
      </div>
    </>
  );
}
