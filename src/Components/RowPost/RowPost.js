//TODO:14 ROW POST MAKE DYNAMIC
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {API_KEY} from '../../constants/constants'

//TODO:6 now we are going to add movie poster 
function RowPost() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        // IF YOU WANT EDIT IN THE LINK HERE SHOULD BE USE"     `   ${API_KEY}  `   "LIKE THIS
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
            console.log(response)
            setMovies(response.data.results)
        }).catch(err=>{
           // alert('Network Error')
        })
    },[])
  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
          {movies.map(()=>{
              
          })}
          <img className='poster' src="https://pngbackground.com/public/uploads/thumbnail/horror-tree-poster-background-for-picsart-cb-editing-11638661320psxisepqqr.jpg" alt="" />
         


      </div>
    </div>
  )
}

export default RowPost
