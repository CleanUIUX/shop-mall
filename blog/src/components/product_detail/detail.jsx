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
                <section className={styles.product}>
                    <div className={styles.product_info}>
                        <p className={styles.seller_store}>아이돈케어</p>
                        <p className={styles.product_name}>마로네</p>
                        <span className={styles.price}>
                            1000
                            <span className={styles.unit}>원</span>
                        </span>
                    </div>

                    <div className={styles.delivery}>
                        <p>택배 / 무료 배송</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.amount}>
                        <img
                            className={styles.minus} 
                            src="/images/icon-minus-line.svg" 
                            alt="minus" 
                        />

                        <div className={styles.count}>
                            <>1</>
                        </div>

                        <img
                            className={styles.plus} 
                            src="/images/icon-plus-line.svg" 
                            alt="plus" 
                        />
                    </div>

                    
                </section>
            </main>
        </>
    )
}