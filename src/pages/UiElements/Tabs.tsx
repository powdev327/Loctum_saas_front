import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import TabExample from "../../Components/ui/tabs";
import PageMeta from "../../Components/common/PageMeta";

export default function Tabs() {
  return (
    <>
      <PageMeta
        title="React.js Spinners Tabs | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Tabs page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Tabs" />
      <TabExample />
    </>
  );
}
