import Link from 'next/link'
import { handlerAddToBookmarks } from '../../lib/utils'; 

import styles from './sliderItem.module.css'
import styled from 'styled-components';

export default function SliderItem({data}){

  const {id, title, img, body} = data;

  const Paragraph = styled.p`
    display: block;
    height: 100px;
    overflow: hidden;
    line-height: 20px;
    z-index: 9;

    &:hover{
      transition: all .3s linear;
      height: auto;
    }
  `

  return (
    <div className={styles.sliderItem}>
        <div className={styles.sliderWrapper}>
          <div className={styles.imgBlock}>
              <img src={img} alt="" />
            </div>
            <div className={styles.textBlock}>
            <Link href='/products/[id]' as={`/products/${id}`}>
              <a className={styles.sliderLink}>
                <h3> Name: { title }</h3>
              </a>
            </Link>
                <Paragraph>{ body }</Paragraph>
                <button onClick={ ()=> handlerAddToBookmarks(id)}>Add to bookmarks</button>
            </div>
        </div>
          
        </div>
    
    
  )
}