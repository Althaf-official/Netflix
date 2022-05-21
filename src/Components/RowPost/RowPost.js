//TODO:14 ROW POST MAKE DYNAMIC
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import ReactPlayer from 'react-player'

//TODO:6 now we are going to add movie poster 
function RowPost(props) {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        // IF YOU WANT EDIT IN THE LINK HERE SHOULD BE USE"     `   ${API_KEY}  `   "LIKE THIS
        axios.get(props.url).then(response=>{
            console.log(response)
            setMovies(response.data.results)
        }).catch(err=>{
           // alert('Network Error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,

        },
      };
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
          {movies.map((obj)=>
              <img className={props.isSmall ? `smallPoster`:'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
      </div>  
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  )
}

export default RowPost
