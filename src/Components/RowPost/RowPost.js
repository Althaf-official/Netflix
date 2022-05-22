//TODO:14 ROW POST MAKE DYNAMIC
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants'
import ReactPlayer from 'react-player'

//TODO:6 now we are going to add movie poster 
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        // IF YOU WANT EDIT IN THE LINK HERE SHOULD BE USE"     `   ${API_KEY}  `   "LIKE THIS
        axios.get(props.url).then(response => {
            console.log(response)
            setMovies(response.data.results)
        }).catch(err => {
            // alert('Network Error')
        })
    }, [])
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                console.log(response.data.results[0])
                setUrlId(response.data.results[0])
            } else {
                console.log('Array empty')
            }
        })

    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? `smallPoster` : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
            </div>
           {urlId && <ReactPlayer playing={true} url={`https://www.youtube.com/watch?v=${urlId.key}`} width="100%" />}
        </div>
    )
}

export default RowPost
