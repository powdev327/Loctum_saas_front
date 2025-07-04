import PageBreadcrumb from "../../Components/common/PageBreadCrumb";
import PageMeta from "../../Components/common/PageMeta";
import TaskListPage from "../../Components/task/task-list/TaskListPage";

export default function TaskList() {
  return (
    <>
      <PageMeta
        title="React.js Task List Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Task List Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Task List" />
      <TaskListPage />
    </>
  );
}
