import { useState, useEffect } from "react"

import styles from "../styles/Home.module.css"

import styled from "styled-components"

import Layout from "../components/Layout"
import StyleButton from "../components/StyleButton"

import {
  getItemsFromLocalStorage,
  handlerClearLocalStorage,
} from "../lib/utils"

import { getAll } from "../lib/products"
import { config } from "./../config"
import Link  from 'next/link';

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: underline;
`

export default function Home() {
  const [state, setState] = useState([])
  const [product, setProduct] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const items = getItemsFromLocalStorage("id")
    items ? setState([...state, ...items]) : setState([])

    const getProduct = async () => {
      const data = await getAll(config.urlApi, "products")
      setProduct(data)
    }


    getProduct()
    
  }, [])

  useEffect(()=>{
    const productFilteredData = filterProduct(state, product)
    setBookmarks(productFilteredData)
  },[product, state])

  const filterProduct = (dataFromLocalStorage, dataFromApi)=>{
    const _data = []
    for (let i = 0; i < dataFromLocalStorage.length; i++) {
      for (let j = 0; j < dataFromApi.length; j++) {
        if (dataFromApi[j].id === dataFromLocalStorage[i]) {
           _data.push(dataFromApi[j])
        }
      }
    }
    return _data;
  }
  const clearLocalStorageIds = () => {
    setState([])
    handlerClearLocalStorage("id")
  }

  return (
    <Layout titleSite="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <Title>Welcome to our site.</Title>
          <p className={styles.description}>Bookmarks</p>

          <div className={styles.grid}>
            {state.length ? (
              bookmarks.map((el) => (
                <Link key={el.id} href="/products/[id]" as={`/products/${el.id}`}>
                   <a  className={styles.card}>
                  <h2>{el.title} &rarr;</h2>
                </a>
                </Link>
               
              ))
            ) : (
              <p>You don`t have a bookmarks.</p>
            )}
          </div>
          <StyleButton handler={clearLocalStorageIds} data="id">
            Clear bookmarks
          </StyleButton>
        </main>
      </div>
    </Layout>
  )
}
