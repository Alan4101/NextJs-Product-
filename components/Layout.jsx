import Head from "next/head";
import Navigation from "./Navigation";

import styles from "../styles/Layout.module.css";

import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
`;
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
`;

export default function Layout({ children, titleSite }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Informaion about products" />
        <title>{titleSite}</title>
      </Head>

      <div className={styles.mainWrapper}>
        <Header>
          <Navigation></Navigation>
        </Header>
        <Main>{children}</Main>
      </div>
    </div>
  );
}
