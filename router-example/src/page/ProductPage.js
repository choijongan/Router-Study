import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
    let [query, setQuery] = useSearchParams() // eslint-disable-line no-unused-vars 
    console.log("dddd",query.get('page'));
  return (
    <div>
        <h1>Show All Products!!</h1>
    </div>
  )
}

export default ProductPage