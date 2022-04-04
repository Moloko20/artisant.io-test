import React from 'react'

import { ProductItem } from 'Services/getProducts'

import styles from './index.module.scss'

type ProductCardProps = {
    product: ProductItem
}

function ProductCardComponent({ product }: ProductCardProps) {
    const setImageClass = (nftID: number) => {
        if (nftID % 5 === 0) {
            return styles['card-nft--eachfive']
        } else if (nftID % 2 === 0) {
            return styles['card-nft--even']
        }
        return styles['card-nft--odd']
    }

    const imageClassName: string = styles['card-nft'] + ' ' + setImageClass(product.product_id)

    const price = product.latest_price ? '0,0' + product.latest_price[0] : product.initial_price

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles.card}>
                <div className={imageClassName}>
                    <div className={styles['card-nft__creator']}>
                        <span>created by</span>
                        <br />
                        {product.created_by.display_name}
                    </div>
                    <div className={styles['card-nft__name']}>{product.name}</div>
                </div>
                <div className={styles['card-selling']}>
                    <div>
                        available
                        <br />
                        <span className={styles['card-selling_span']}>
                            {product.quantity_available} of {product.quantity}
                        </span>
                    </div>
                    <div>
                        price
                        <br />
                        <span
                            className={
                                styles['card-selling_span'] +
                                ' ' +
                                styles['card-selling_span--price']
                            }
                        >
                            {price} ETH
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ProductCard = React.memo(ProductCardComponent)
