import React from 'react'

import { ProductCard } from 'Components/ProductCard'
import { Loader } from 'Components/UI/Loader'

import { getProducts, ProductItem } from 'Services/getProducts'

import styles from './index.module.scss'

function ProductListComponent({ aviable }: { aviable: boolean }) {
    const [poductData, productDataSet] = React.useState<Array<ProductItem>>([])
    const [poductErr, productErrSet] = React.useState<boolean>(false)

    const [isLoaded, isLoadedSet] = React.useState<boolean>(false)

    React.useEffect(() => {
        getProducts()
            .then(data => {
                productDataSet(data.data.products)

                isLoadedSet(true)
            })
            .catch(err => {
                productErrSet(true)
                console.error(err)
            })
    }, [])

    const setTemplate = () => {
        return poductErr ? (
            <div className={styles['productlist-error']}>Something's gone wrong :(</div>
        ) : isLoaded ? (
            aviable ? (
                poductData
                    .filter(product => product.quantity_available > 0)
                    .map(product => <ProductCard key={product.product_id} product={product} />)
            ) : (
                poductData.map(product => (
                    <ProductCard key={product.product_id} product={product} />
                ))
            )
        ) : (
            <Loader />
        )
    }

    return <div className={styles['productlist']}>{setTemplate()}</div>
}

export const ProductList = React.memo(ProductListComponent)
