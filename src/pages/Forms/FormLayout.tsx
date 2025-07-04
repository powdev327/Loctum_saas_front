import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import ExampleFormTwo from "../../Components/form/example-form/ExampleFormTwo";
import BasicForm from "../../Components/form/example-form/BasicForm";
import ExampleFormOne from "../../Components/form/example-form/ExampleFormOne";
import ExampleFormWithIcon from "../../Components/form/example-form/ExampleFormWithIcon";
import PageMeta from "../../Components/common/PageMeta";

export default function FormLayout() {
  return (
    <div>
      <PageMeta
        title="React.js Form Layout Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Layout  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="From Layouts" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <BasicForm />
          <ExampleFormOne />
        </div>
        <div className="space-y-6">
          <ExampleFormWithIcon />
          <ExampleFormTwo />
        </div>
      </div>
    </div>
  );
}
