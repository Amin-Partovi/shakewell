import React from "react";

import Link from "next/link";
import texts from "@/texts/texts";

import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link passHref href={"products/0"} className={styles["nav-item"]}>
        {texts.product}
      </Link>
      <Link passHref href={"items"} className={styles["nav-item"]}>
        {texts.items}
      </Link>
      <Link passHref href={"tabs"} className={styles["nav-item"]}>
        {texts.tabs}
      </Link>
    </nav>
  );
};

export default Home;
