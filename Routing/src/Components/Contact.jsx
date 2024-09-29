import React from 'react'

function Contact() {
  return (
    <div className="w-full h-screen bg-cover bg-[url('https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="overlay w-full h-full bg-black/60 flex items-center justify-center flex-col">
        <p className="text-white text-lg w-[50%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga illum molestias facere laborum dicta quod quidem odio alias quae.</p>
        <button className='text-white border border-white p-2 px-3 font-semibold mt-4 hover:bg-white hover:text-black'>Contact  Us</button>
        </div>
    </div>
  )
}

export default Contact