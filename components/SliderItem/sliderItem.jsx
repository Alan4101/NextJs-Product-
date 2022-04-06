import Link from 'next/link'
import { handlerAddToBookmarks } from '../../lib/utils'; 

import styles from './sliderItem.module.css'

export default function SliderItem({data}){

  const {id, title, img, body} = data;

  return (
    <div className={styles.sliderItem}>
          <div className={styles.imgBlock}>
            <img src={img} alt="" />
          </div>
          <div className={styles.textBlock}>
          <Link href='/products/[id]' as={`/products/${id}`}>
            <a className={styles.sliderLink}>
              <h3> Name: { title }</h3>
            </a>
          </Link>
              <p>{ body }</p>
              <button onClick={ ()=> handlerAddToBookmarks(id)}>Add to bookmarks</button>
          </div>
        </div>
    
    
  )
}