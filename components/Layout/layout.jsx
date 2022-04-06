import Head from 'next/head'
import Navigation from '../Navigation/navigation'

import styles from './layout.module.css'

import styled from 'styled-components'

const Header = styled.header`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 250px;
`
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
`

export default function Layout({children, titleSite}){
  return(
    <div className={styles.container}>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Informaion about products"
        />
        <title>{titleSite}</title>
        
      </Head>
      <Header>
        <Navigation></Navigation>
      </Header>
     
      <Main>{children}</Main>
    </div>
  )
}