import styles from "./main.module.css"
import { Product } from "../products/product"
import { EventBanner } from "../eventBanner/eventBanner"

export const Main = () => {
    return (
        <>
            <EventBanner />
            <div className={styles.filter}>
                <p>최신순</p>
                <p>낮은 가격</p>
                <p>높은 가격</p>
            </div>
            <main className={styles.flex_wrap}>
                <Product />
            </main>
        </>
    )
}