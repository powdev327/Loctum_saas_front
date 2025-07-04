import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import PageMeta from "../../Components/common/PageMeta";
import PopoverExample from "../../Components/ui/popover";

export default function Popovers() {
  return (
    <div>
      <PageMeta
        title="React.js List Popover | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Popover  page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Popovers" />
      <PopoverExample />
    </div>
  );
}
