import React from 'react'

import { ProductCard } from 'Components/ProductCard'

import { getProducts, ProductItem } from 'Services/getProducts'

import styles from './index.module.scss'

function ProductListComponent() {
    const [poductInfo, productInfoSet] = React.useState<Array<ProductItem>>([])

    React.useEffect(() => {
        getProducts().then(data => {
            console.dir(data)
            productInfoSet(data.data.products)
        })
    }, [])

    return (
        <div className={styles.productlist}>
            {poductInfo.map(product => (
                <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
    )
}

export const ProductList = React.memo(ProductListComponent)
