import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => { //버튼누르면 함수호출없이 바로가도되면 Link
    const navigate = useNavigate()
    const goProductPage=()=>{
      navigate('/products?a=pants')
    }
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to about page</Link> 
        <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage