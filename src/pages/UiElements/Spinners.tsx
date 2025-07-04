import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import SpinnerExample from "../../Components/ui/spinner";
import PageMeta from "../../Components/common/PageMeta";

export default function Spinners() {
  return (
    <div>
      <PageMeta
        title="React.js Spinners | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Spinners page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Spinners" />
      <SpinnerExample />
    </div>
  );
}
