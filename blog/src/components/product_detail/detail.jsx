import styles from "./detail.module.css";

export const Detail = () => {
    return (
        <>
            <main className={styles.main}>
                <section className={styles.product}>
                    <div className={styles.product_img}>
                        <img src="/images/image002.png" alt="product" />
                    </div>
                </section>
                <section></section>
            </main>
        </>
    )
}