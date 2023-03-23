import Tabs from "@/components/tabs/Tabs";

const tabs = [
  { label: "tab 1", key: "23" },
  { label: "tab 2", key: "2" },
  { label: "tab 3", key: "5" },
];

const TabsPage = () => {
  return (
    <div>
      <Tabs tabs={tabs} activeTab={"5"} />
    </div>
  );
};

export default TabsPage;
