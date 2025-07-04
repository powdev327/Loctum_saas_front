import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import CardWithImage from "../../Components/cards/card-with-image/CardWithImage";
import HorizontalCardWithImage from "../../Components/cards/horizontal-card/HorizontalCardWithImage";
import CardWithLinkExample from "../../Components/cards/card-with-link/CardWithLinkExample";
import CardWithIconExample from "../../Components/cards/card-with-icon/CardWithIconExample";
import PageMeta from "../../Components/common/PageMeta";

export default function Cards() {
  return (
    <>
      <PageMeta
        title="React.js Cards Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Cards Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Cards" />
      <div className="space-y-6 sm:space-y-5">
        <CardWithImage />
        <HorizontalCardWithImage />
        <CardWithLinkExample />
        <CardWithIconExample />
      </div>
    </>
  );
}
