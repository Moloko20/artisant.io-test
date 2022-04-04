import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Catalog } from 'Components/Catalog'

import './index.scss'

function App() {
    return <Catalog />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
