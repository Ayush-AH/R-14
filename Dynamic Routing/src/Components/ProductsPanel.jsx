import React from 'react'
import LeftPanel from './LeftPanel'
import { Outlet } from 'react-router-dom'

function ProductsPanel() {
  return (
    <div className='w-full h-[90vh] flex'>
        <LeftPanel />
        <Outlet/>
    </div>
  )
}

export default ProductsPanel