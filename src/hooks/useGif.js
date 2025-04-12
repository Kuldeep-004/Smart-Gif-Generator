import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  
    const url1=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; 
    const url2=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; 

    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    
    async function fetchData(){
        setLoading(true);
        
        const {data}=await axios.get( tag ? url2 :url1 );
        const gify1=data.data.images.downsized_large.url;
        setGif(gify1)
        setLoading(false);
    }


  useEffect(() => {
    fetchData();
  },[])

  return {gif,loading,fetchData};

}

export default useGif
