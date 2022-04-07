import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import styled from "styled-components";

import Layout from "../components/Layout/layout";
import { getItemsFromLocalStorage } from "../lib/utils";

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: underline;
`;

export default function Home() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const items = getItemsFromLocalStorage();
    if(items){
      setState([...state, ...items]);
    }else{
      setState([])
    }
  }, []);

  return (
    <Layout titleSite="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <Title>Welcome to our site.</Title>
          <p className={styles.description}>Bookmarks</p>

          <div className={styles.grid}>

            { state.length ? 
            state.map((el) => (
              <a
                key={el}
                href="https://nextjs.org/docs"
                className={styles.card}
              >
                <h2>{el} &rarr;</h2>
                <p>ss</p>
              </a>
            ))
            :
            (<p>You don`t hane a bookmarks.</p>)
          }
          </div>
        </main>
      </div>
    </Layout>
  );
}
