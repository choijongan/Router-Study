import React from 'react'
import { useParams } from 'react-router-dom' 
//useParams의 리액터훅을 이용하면 파라미터 아이디값 가져다 보여줄수 있다.
const ProductDetailPage = () => {
 const {id} = useParams();
 console.log("ppp", useParams);

  return (
    <div>
        <h1>Show Product Detail{id}</h1>
    </div>
  )
}

export default ProductDetailPage