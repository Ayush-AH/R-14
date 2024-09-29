import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function  RightPanel() {
  const {category} = useParams()
  const navigator = useNavigate()
  const [products, setProducts] = useState([])
  const handleclick = ()=>{
      navigator(-1)
  }
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then((data)=>{
       setProducts(data.data)
    })

    return ()=>{
      console.log("unmout");
    }

  },[category])

  return (
    <div className='w-[75%] min-h-full p-12 py-4 '>
      <div className='w-full flex items-center justify-between'>
      <h1 className='text-white capitalize text-2xl'>{category}</h1>
        <Link to="/product" className='text-blue-600 text-sm'>Go Back</Link>
        {/* link and button tag use */}
        {/* <button onClick={handleclick} className='text-blue-600 text-sm'>Go back</button> */}
      </div>
      <div className='w-full  flex items-start gap-6 mt-4 flex-wrap'>
      {products.length > 0 ? products.map((objdata , idx)=><Product key={idx} data={objdata} />) : <h1 className=' text-xl text-white/50'>Loading...</h1>}
      </div>
    </div>
  )
}

export default RightPanel