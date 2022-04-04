import React from 'react'

import styles from './ProductList.module.scss'

function ProductListComponent() {
    console.log(styles)
    return <div className={styles.productlist}>null</div>
}

export const ProductList = React.memo(ProductListComponent)
