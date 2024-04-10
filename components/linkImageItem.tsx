// linkImageItem.js
import Link from "next/link";
import styles from "../styles/linkImageItem.module.css";
import Image from "next/image";

function LinkImageItem({ href, image, heading, paragraph}) {
  return (
    <div className={styles.imageLinkItem}>
      <Link href={href} >
        <div className={styles.imageWrap}>
          <img src={image} alt="image" className={styles.image} />
        </div>
        <div className={styles.textWrap}>
          <h3>{heading}</h3>
          <p>{paragraph}</p>{/* 140字対応 */}
        </div>
      </Link>
    </div>
  )
}

export default LinkImageItem;


// import LinkImageItem from "../components/linkImageItem";

// const href = "/";
// const image = "/image1.jpg";
// const heading = "Hello World!!";
// const paragraph = "Lorem Ipsum is dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

// <LinkImageItem
// href={href}
// image={image}
// heading={heading}
// paragraph={paragraph}
// />