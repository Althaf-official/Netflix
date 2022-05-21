//TODO:14 ROW POST MAKE DYNAMIC
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import ReactPlayer from 'react-player'

//TODO:6 now we are going to add movie poster 
function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [id,setId] = useState('')
    useEffect(()=>{
        // IF YOU WANT EDIT IN THE LINK HERE SHOULD BE USE"     `   ${API_KEY}  `   "LIKE THIS
        axios.get(props.url).then(response=>{
            console.log(response)
            setMovies(response.data.results)
        }).catch(err=>{
           // alert('Network Error')
        })
    },[])
    const handleMovie = (id) =>{
        console.log(id)

    }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
          {movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall ? `smallPoster`:'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
      </div>  
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  width="100%" />
    </div>
  )
}

export default RowPost
