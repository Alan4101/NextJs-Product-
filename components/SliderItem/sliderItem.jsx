import styles from './sliderItem.module.css'

export default function SliderItem({data}){
  
  const {id, title, img, body} = data;

  return (
    <div className={styles.sliderItem}>
      <div className={styles.imgBlock}>
        <img src={img} alt="" />
      </div>
      <div className={styles.textBlock}>
          <h3> Name: { title }</h3>
          <p>{ body }</p>
      </div>
    </div>
  )
}