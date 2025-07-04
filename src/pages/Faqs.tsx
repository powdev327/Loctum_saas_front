import PageBreadcrumb from "../Components/common/PageBreadCrumb";
import ComponentCard from "../Components/common/ComponentCard";
import FaqsOne from "../Components/UiExample/FaqsExample/FaqsOne";
import FaqsTwo from "../Components/UiExample/FaqsExample/FaqsTwo";
import FaqsThree from "../Components/UiExample/FaqsExample/FaqsThree";
import PageMeta from "../Components/common/PageMeta";

export default function Faqs() {
  return (
    <>
      <PageMeta
        title="React.js Faqs Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Faqs Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Faqs" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Faq’s 1">
          <FaqsOne />
        </ComponentCard>
        <ComponentCard title="Faq’s 2">
          <FaqsTwo />
        </ComponentCard>
        <ComponentCard title="Faq’s 3">
          <FaqsThree />
        </ComponentCard>
      </div>
    </>
  );
}
