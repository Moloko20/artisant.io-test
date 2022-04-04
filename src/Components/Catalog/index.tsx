import React from 'react'

import { ProductList } from 'Components/ProductList'

import styles from './index.module.scss'

export function Catalog() {
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
