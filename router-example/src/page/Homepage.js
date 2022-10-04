import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => { //버튼누르면 함수호출없이 바로가도되면 Link
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to about page</Link> 
    </div>
  )
}

export default Homepage