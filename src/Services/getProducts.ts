export interface Creators {
    custom_url: string
    display_name: string
    image: {
        compressed: string
        original: string
    }
    public_address: string
    user_id: number
}

export interface ProductItem {
    additional_photos: {
        compressed: string
        original: string
    }
    avatar: {
        compressed: string
        original: string
    }
    created_at: string
    created_by: Creators
    description: string
    initial_price: number
    is_wearable: boolean
    json_nft_data: {
        attributes: {
            value: string
            trait_type: string
        }
        description: string
        external_url: string
        image: string
        name: string
    }
    json_nft_link: string
    latest_price: string | null
    name: string
    on_main_page: boolean
    other_file: { original: string }
    product_id: number
    quantity: number
    quantity_available: number
    quantity_nfts_created: number
    tx_status: string
    type: string
    updated_at: string
}

export interface ProductsCreators {
    [key: string]: Creators
}

export interface ProductsData {
    status: string
    data: {
        creators: ProductsCreators
        products: ProductItem[]
    }
}

export async function getProducts(): Promise<ProductsData> {
    return await fetch('https://artisant.io/api/products').then(response => response.json())
}
