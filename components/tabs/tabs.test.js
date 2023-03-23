import { render } from "@testing-library/react";
import Tabs from "./Tabs";

describe("tabs", () => {
  it("should throw an error if activeTab is not available in the keys of tabs", () => {
    const tabs = [
      { label: "Tab 1", key: "tab1" },
      { label: "Tab 2", key: "tab2" },
    ];
    const activeTab = "tab3"; // activeTab not available in keys of tabs

    expect(() => {
      render(<Tabs tabs={tabs} activeTab={activeTab} />);
    }).toThrow();
  });

  it("should not throw an error if activeTab is available in the keys of tabs", () => {
    const tabs = [
      { label: "Tab 1", key: "tab1" },
      { label: "Tab 2", key: "tab2" },
    ];
    const activeTab = "tab1"; // activeTab available in keys of tabs

    expect(() => {
      render(<Tabs tabs={tabs} activeTab={activeTab} />);
    }).not.toThrow();
  });
});
