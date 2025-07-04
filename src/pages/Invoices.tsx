import PageBreadcrumb from "../Components/common/PageBreadCrumb";
import Invoice from "../Components/invoice/Invoice";
import PageMeta from "../Components/common/PageMeta";

export default function Invoices() {
  return (
    <div>
      <PageMeta
        title="React.js Invoices Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Invoices Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Invoices" />
      <Invoice />
    </div>
  );
}
