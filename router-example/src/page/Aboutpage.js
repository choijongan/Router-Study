import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate() //함수안에서 써야되면 useNavigate

    const goToHomepage=()=> {
      navigate("/")
    };

  return (
    <div>
        <h1>Aboutpage</h1>
        <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  )
}

export default Aboutpage