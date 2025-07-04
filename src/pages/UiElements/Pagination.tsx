import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import PaginationExample from "../../Components/ui/pagination";
import PageMeta from "../../Components/common/PageMeta";

export default function Pagination() {
  return (
    <div>
      <PageMeta
        title="React.js  Pagination | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Pagination  page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Pagination" />
      <PaginationExample />
    </div>
  );
}
