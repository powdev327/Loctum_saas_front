import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import ComponentCard from "../../Components/common/ComponentCard";
import BarChartOne from "../../Components/charts/bar/BarChartOne";
import BarChartTwo from "../../Components/charts/bar/BarChartTwo";
import PageMeta from "../../Components/common/PageMeta";

export default function BarChart() {
  return (
    <div>
      <PageMeta
        title="React.js Chart Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
        <ComponentCard title="Bar Chart 2">
          <BarChartTwo />
        </ComponentCard>
      </div>
    </div>
  );
}
