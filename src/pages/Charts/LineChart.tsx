import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import ComponentCard from "../../Components/common/ComponentCard";
import LineChartOne from "../../Components/charts/line/LineChartOne";
import LineChartTwo from "../../Components/charts/line/LineChartTwo";
import LineChartThree from "../../Components/charts/line/LineChartThree";
import PageMeta from "../../Components/common/PageMeta";

export default function LineChart() {
  return (
    <>
      <PageMeta
        title="React.js Chart Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Line Chart" />
      <div className="space-y-6">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
        <ComponentCard title="Line Chart 2">
          <LineChartTwo />
        </ComponentCard>
        <ComponentCard title="Line Chart 3">
          <LineChartThree />
        </ComponentCard>
      </div>
    </>
  );
}
