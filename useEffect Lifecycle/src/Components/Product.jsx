import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'


function Product() {
  const [products , setProducts] = useState([])

  useEffect(()=>{
    //jab component create hota h
    console.log("component mout");
    axios.get('https://fakestoreapi.com/products')
    .then((data)=>{
      setProducts(data.data)
    })

    //jab component delete hota h
    return ()=>{
      console.log("component unmout");
    }
  },[]) //COMP UPDATE["var name  for which comp wil rerender"] control reconciliation re-render (re-render full component) or reconciliation update (only update particular part that changes)


  return (
    <div className='w-full h-[90vh] flex gap-6 flex-wrap p-6'>
      {products.length > 0 ? products.map((obj , idx)=><Card key={idx} data={obj} />) : <h1 className='text-3xl text-blue-600 w-full text-center'>Loading...</h1>}
    </div>
  )
}

export default Product