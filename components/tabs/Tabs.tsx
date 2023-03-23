import React, { useState } from "react";
import styles from "./tabs.module.css";

interface TabItem<K extends string> {
  label: string;
  key: K;
}

type Tabs<K extends string> = TabItem<K>[];

type ActiveTab<K extends string, T extends Tabs<K>> = T[number]["key"];

interface Props<K extends string, T extends Tabs<K>> {
  tabs: T;
  activeTab: ActiveTab<K, T>;
  onChange?: (arg: ActiveTab<K, T>) => void;
  fluid?: boolean;
}

function Tabs<K extends string, T extends Tabs<K>>(props: Props<K, T>) {
  const { tabs = [], activeTab, onChange, fluid = false } = props;

  if (!tabs.map((tab) => tab.key).includes(activeTab)) {
    throw Error("invalid activeTab value");
  }
  const [currentTab, setCurrentTab] = useState<ActiveTab<K, T>>(
    activeTab ?? tabs[0]["key"]
  );

  function handleClick(index: ActiveTab<K, T>) {
    setCurrentTab(index);
    if (onChange) onChange(index);
  }

  return (
    <ul className={`${styles["tab-container"]}  ${fluid && styles["fluid"]}`}>
      {tabs.length &&
        tabs.map(({ label, key }: TabItem<K>) => (
          <li
            className={` ${styles["tab"]} ${
              currentTab === key && styles["active"]
            }`}
            key={key}
            onClick={() => handleClick(key)}
          >
            {label}
          </li>
        ))}
    </ul>
  );
}

export default Tabs;
