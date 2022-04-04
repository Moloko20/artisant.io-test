import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProductList } from 'Components/ProductList'

import './index.scss'

function App() {
    return (
        <div>
            <h1>Explore</h1>
            <p>Buy and sell digital fashion NFT art</p>
            <ProductList />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
