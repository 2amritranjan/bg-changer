"use client"
import React, { useState } from 'react';


const MyComponent = () => {
  const [color, setcolor] =useState("olive")
  return (
    <>
    <div className='h-screen w-full'   style={{backgroundColor: color}}>
    
      <div className='bg-white h-12 w-full rounded fixed bottom-12 flex flex-row justify-between shadow-xl'>
        <button 
        onClick={()=> setcolor("black")} 
        className='bg-black text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Black
        </button>

        <button 
        onClick={()=> setcolor("red")} 
        className='bg-red-700 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Red
        </button>

        <button 
        onClick={()=> setcolor("yellow")} 
        className='bg-yellow-500 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Yellow
        </button>

        <button 
        onClick={()=> setcolor("green")} 
        className='bg-green-600 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Green
        </button>

        <button 
        onClick={()=> setcolor("blue")} 
        className='bg-blue-700 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Blue
        </button>

        <button 
        onClick={()=> setcolor("pink")} 
        className='bg-pink-800 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Pink
        </button>

        <button 
        onClick={()=> setcolor("gray")} 
        className='bg-gray-600 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Grey
        </button>

        <button 
        onClick={()=> setcolor("orange")} 
        className='bg-orange-400 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Orange
        </button>

        <button 
        onClick={()=> setcolor("lime")} 
        className='bg-lime-300 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Lemon
        </button>

        <button 
        onClick={()=> setcolor("cyan")} 
        className='bg-cyan-400 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Sky
        </button>

        <button 
        onClick={()=> setcolor("teal")} 
        className='bg-teal-200 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Teal
        </button>

        <button 
        onClick={()=> setcolor("purple")} 
        className='bg-purple-800 text-white p-1 m-1 rounded h-8 w-20 shadow-lg'>Purple
        </button>
        </div>
        </div>
        </>
  );
};

export default MyComponent;
