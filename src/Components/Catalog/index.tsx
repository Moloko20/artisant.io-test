import React from 'react'

import { ProductList } from 'Components/ProductList'
import { Checkbox } from 'Components/UI/Checkbox'

import styles from './index.module.scss'

function CatalogComponent() {
    const [isChecked, isCheckedSet] = React.useState(false)

    const checkboxHandler = React.useCallback(() => {
        isCheckedSet(prevState => !prevState)
    }, [])

    return (
        <section className={styles.catalog}>
            <div className={styles['catalog-head']}>
                <div>
                    <h1>Explore</h1>
                    <p>Buy and sell digital fashion NFT art</p>
                </div>
                <div className={styles['catalog-head_filters']}>
                    <h2>Filters</h2>
                    <div className={styles['catalog-head_filterwrap']}>
                        <p>Available</p>
                        <Checkbox checkboxHandler={checkboxHandler} />
                    </div>
                </div>
            </div>

            <ProductList aviable={isChecked} />
        </section>
    )
}

export const Catalog = React.memo(CatalogComponent)