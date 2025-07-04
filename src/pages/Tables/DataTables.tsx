import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import ComponentCard from "../../Components/common/ComponentCard";

import PageMeta from "../../Components/common/PageMeta";
import DataTableOne from "../../Components/tables/DataTables/TableOne/DataTableOne";
import DataTableTwo from "../../Components/tables/DataTables/TableTwo/DataTableTwo";
import DataTableThree from "../../Components/tables/DataTables/TableThree/DataTableThree";

export default function DataTables() {
  return (
    <>
      <PageMeta
        title="React.js Data Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Data Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Data Tables" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Data Table 1">
          <DataTableOne />
        </ComponentCard>
        <ComponentCard title="Data Table 2">
          <DataTableTwo />
        </ComponentCard>
        <ComponentCard title="Data Table 3">
          <DataTableThree />
        </ComponentCard>
      </div>
    </>
  );
}
