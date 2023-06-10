import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './banner.css'
import axios from '../../Axios'
function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        const movies=response.data.results
        const random=Math.floor(Math.random()*movies.length)
        const randommovies=movies[random]
        setMovie(randommovies)
       })
    },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play </button>
            <button className='button'>My List </button>
        </div>
        <h1 className='description'>{movie ? movie.overview : '' }</h1>
      </div>
      <div className="fade_bottum"></div>
    </div>
  )
  }
export default Banner
