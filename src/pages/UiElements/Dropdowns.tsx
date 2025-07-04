import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import ComponentCard from "../../Components/common/ComponentCard";
import PageMeta from "../../Components/common/PageMeta";
import AccountMenuDropdown from "../../Components/ui/dropdown/AccountMenuDropdown";
import DropdownWithDivider from "../../Components/ui/dropdown/DropdownWithDivider";
import DropdownWithIcon from "../../Components/ui/dropdown/DropdownWithIcon";
import DropdownWithIconAndDivider from "../../Components/ui/dropdown/DropdownWithIconAndDivider";

export default function Dropdowns() {
  return (
    <div>
      <PageMeta
        title="React.js Dropdowns Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Dropdowns Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Dropdowns" />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
        <ComponentCard title="Default Dropdown">
          <div className="pb-[300px]">
            <AccountMenuDropdown />
          </div>
        </ComponentCard>
        <ComponentCard title="Dropdown With Divider">
          <div className="pb-[300px]">
            <DropdownWithDivider />
          </div>
        </ComponentCard>
        <ComponentCard title="Dropdown With Icon">
          <div className="pb-[300px]">
            <DropdownWithIcon />
          </div>
        </ComponentCard>
        <ComponentCard title="Dropdown With Icon and Divider">
          <div className="pb-[300px]">
            <DropdownWithIconAndDivider />
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
