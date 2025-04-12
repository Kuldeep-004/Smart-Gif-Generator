import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
import Spinner from './Spinner.js'
import useGif from '/home/kuldeep/Documents/CodeGround/GIF/src/hooks/useGif.js'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
  const {gif,loading,fetchData}=useGif();


  function clickHandler(){
    fetchData();
  }


  return (
    <div className='mt-[5.4rem] bg-green-400 min-w-[50%] border border-black rounded-[1rem] flex flex-col items-center gap-y-4 p-3'>
      <h1 className='text-[24px] underline font-bold'>A RANDOM GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gif not available' />)
      }
      
      <button className='min-w-[77%] bg-white p-2 rounded-md opacity-80 font-semibold' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}

export default Random

