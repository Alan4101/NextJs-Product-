import StyleButton from "./StyleButton";
import styles from "../styles/ProductsItem.module.css";

export default function ProductItem({ data, addToBookmarks }) {
  const { img, id, title, body } = data;
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.container}>
        <div className={styles.pictureBlock}>
          <img src={img} alt="" />
        </div>
        <article className={styles.textBlock}>
          <p>{body}</p>
          <StyleButton id={id} handler={addToBookmarks}>Add to bockmarks</StyleButton>
        </article>
      </div>
    </div>
  );
}
