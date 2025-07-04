import PageBreadcrumb from "../Components/common/PageBreadCrumb";
import ComponentCard from "../Components/common/ComponentCard";
import PriceTableOne from "../Components/price-table/PriceTableOne";
import PriceTableThree from "../Components/price-table/PriceTableThree";
import PriceTableTwo from "../Components/price-table/PriceTableTwo";
import PageMeta from "../Components/common/PageMeta";

export default function PricingTables() {
  return (
    <div>
      <PageMeta
        title="React.js Pricing Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Pricing Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Pricing Tables" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Pricing Table 1">
          <PriceTableOne />
        </ComponentCard>
        <ComponentCard title="Pricing Table 2">
          <PriceTableTwo />
        </ComponentCard>
        <ComponentCard title="Pricing Table 3">
          <PriceTableThree />
        </ComponentCard>
      </div>
    </div>
  );
}
