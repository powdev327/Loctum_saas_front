import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import ButtonGroupExample from "../../Components/ui/buttons-group";
import PageMeta from "../../Components/common/PageMeta";

export default function ButtonsGroup() {
  return (
    <div>
      <PageMeta
        title="React.js Buttons Group Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Buttons Group Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buttons Group" />
      <ButtonGroupExample />
    </div>
  );
}
