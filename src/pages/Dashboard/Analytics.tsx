import RecentOrderAnalytics from "../../Components/analytics/RecentOrderAnalytics";
import DemographicCard from "../../Components/ecommerce/DemographicCard";
import TopPages from "../../Components/analytics/TopPages";
import LocumContracts from "../../Components/analytics/LocumContracts.tsx";
import AnalyticsMetrics from "../../Components/analytics/AnalyticsMetrics";
import ActiveUsersChart from "../../Components/analytics/ActiveUsersChart";
import AnalyticsBarChart from "../../Components/analytics/AnalyticsBarChart";
import AcquisitionChannelChart from "../../Components/analytics/AcquisitionChannelChart";
import SessionChart from "../../Components/analytics/SessionChart";
import PageMeta from "../../Components/common/PageMeta";

export default function Analytics() {
  return (
    <>
      <PageMeta
        title="React.js Analytics Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Analytics Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <AnalyticsMetrics />
        </div>

        <div className="col-span-12">
            <LocumContracts />
            {/*<TopPages />*/}
        </div>
        <div className="col-span-12">
          <AnalyticsBarChart />
        </div>

      {/*  <div className="col-span-12 xl:col-span-5">
          <ActiveUsersChart />
        </div>*/}

       {/* <div className="col-span-12 xl:col-span-7">
          <AcquisitionChannelChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <SessionChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrderAnalytics />
        </div>*/}
      </div>
    </>
  );
}
