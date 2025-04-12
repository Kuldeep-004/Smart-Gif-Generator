import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
import Spinner from './Spinner.js'
import useGif from '/home/kuldeep/Documents/CodeGround/GIF/src/hooks/useGif.js'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
 
  const [tag,setTag]=useState('');
  const[text,changeText]=useState('');
  


  const {gif,loading,fetchData}=useGif(tag);

  function clickHandler(){
    fetchData();
  }

  function changeHandler(event){
    changeText(event.target.value);
    setTag(event.target.value)


  }
  return (
    <div className=' bg-green-400 min-w-[50%] border border-black rounded-[1rem] flex flex-col items-center gap-y-4 p-3'>
      <h1 className='text-[24px] underline font-bold'>RANDOM {text} GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gif not available' />)
      }
      

<input className='min-w-[77%] bg-white p-2 rounded-md opacity-80 text-center' value={tag} onChange={changeHandler}></input>
      <button className='min-w-[77%] bg-white p-2 rounded-md opacity-80 font-semibold' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}

export default Tag
