import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../Axios'
import { imageUrl,API_KEY } from '../../Constants/Constants'
function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
         axios.get(props.urls).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
         }).catch(err=>{
            // alert('network error')
         })
    },[])
    const option={
      height:'390',
      width:'100%',
      playerVars:{
        autoplay:1,
      },
    };
    const handleMovie =(id)=>{
      console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data);
      if(response.data.results!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer Not Available");
      }
    })
    }
  return (
    <div>
      <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
        {
            movies.map((obj)=>
      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

            )
        }      
        </div>
        
      </div>
      { urlId && <Youtube  opts={option} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
