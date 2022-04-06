import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import styled from 'styled-components'

import { Layout } from '../components/Layout/layout'
const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: underline; 
`

export default function Home() {
  return (
    <Layout titleSite='Home'>
      <div className={styles.container}>
        
      <main className={styles.main}>
          <Title>Welcome to our site.</Title>

        <p className={styles.description}>
          Bookmarks          
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
      </main>

      
    </div>
    </Layout>
    
  )
}
