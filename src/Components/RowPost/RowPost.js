//TODO:14 ROW POST MAKE DYNAMIC
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'

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
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
          {movies.map((obj)=>
              <img className={props.isSmall ? `smallPoster`:'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}
          
         


      </div>
    </div>
  )
}

export default RowPost
