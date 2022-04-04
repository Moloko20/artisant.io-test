import React from 'react'

import { ProductList } from 'Components/ProductList'

import styles from './Catalog.module.scss'

export function Catalog() {
    console.log(styles)
    return (
        <section className={styles.catalog}>
            <div className={styles.head}>
                <h1>Explore</h1>
                <p>Buy and sell digital fashion NFT art</p>
            </div>

            <ProductList />
        </section>
    )
}
