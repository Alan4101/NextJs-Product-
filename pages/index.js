import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import styled from "styled-components";

import Layout from "../components/Layout";
import StyleButton from "../components/StyleButton";

import {getItemsFromLocalStorage,
  handlerClearLocalStorage,
} from "../lib/utils";

import { Link } from 'next/link';
import { getById } from "../lib/products";
import { config } from './../config';
  

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: underline;
`;

export default function Home() {
  const [state, setState] = useState([]);
  const [product, setProduct] = useState({
    id: '',
    title:''
  });
  useEffect(() => {
    const items = getItemsFromLocalStorage("id");
    items ? setState([...state, ...items]) : setState([]);
    
    // const getProduct = async () =>{
    //  for (let i = 0; i < items.length; i++) {
    //   const data = await getById(items[i], config.urlApi, 'products')       
    //   setProduct(prev => {
    //     return{
    //       ...prev,
    //       id: data[0].id,
    //       title: data[0].title
    //     }
    //   })
    //   }
    // }
    // getProduct()
   
  }, []);

  const clearLocalStorageIds = () => {
    setState([]);
    handlerClearLocalStorage("id");
  };

  return (
    <Layout titleSite="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <Title>Welcome to our site.</Title>
          <p className={styles.description}>Bookmarks</p>

          <div className={styles.grid}>
            {
              state.length ? (
                state.map((el) => (
                    <a
                    key={el}
                    className={styles.card}
                  >
                    <h2>{el} &rarr;</h2>
                  </a>
                ))
              ) : (
                <p>You don`t hane a bookmarks.</p>
              )
            }
          </div>
          <StyleButton handler={clearLocalStorageIds} data="id">
            Clear bookmarks
          </StyleButton>
        </main>
      </div>
    </Layout>
  );
}
