import styles from './productsItem.module.css'

export default function ProductItem({data}){

const {img, id, title, body} = data
  return(
    
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.container}>
        <div className={styles.pictureBlock}>
          <img src={img} alt="" />
        </div>
        <article className={styles.textBlock}>
          <p>{body}</p>
          <button className='p-btn'>Add to bockmarks</button>
        </article>
      </div>
      
    </div>
  )
}