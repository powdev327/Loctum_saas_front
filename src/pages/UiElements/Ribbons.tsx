import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import RibbonExample from "../../Components/ui/ribbons";
import PageMeta from "../../Components/common/PageMeta";

export default function Ribbons() {
  return (
    <div>
      <PageMeta
        title="React.js List Ribbons | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ribbons page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Ribbons" />
      <RibbonExample />
    </div>
  );
}
