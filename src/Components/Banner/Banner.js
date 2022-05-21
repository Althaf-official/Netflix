//TODO:4 create a banner page 
//TODO:12 MAKE THE PAGE DYNAMIC.SO IMPORT useState
// i want use useEffect on banner
import React, { useEffect, useState } from 'react'

//TODO:5 Create style for banner.js in Banner.css
import './Banner.css'

//TODO:10  IMPORT AXIOS WHICH IS I CREATED
import axios from '../../axios'

//TODO:11 Import API KEY FOR useEffect
//i will call image url here .because its come from same file
import { API_KEY, imageUrl } from '../../constants/constants'


function Banner() {
    //TODO:13 setState (Dynamic page) state name changed to movie 
    const [movie, setMovie] = useState()


    //TODO:8 Showing data when the banner is mount
    // i will call axios hear.this axios is differrent because i make coustom base url on the axios.js and call here
    //api_key={API_KEY_HERE} so need API_KEY .i will import api key

    // (`trending/all/week?api_key=${API_KEY}&language=en-US`) IF WE MAKE LIKE THIS WE CAN EDIT  "  `${API_KEY}`    "
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data);
            //for 1st data printing 
            console.log(response.data.results[0]);
            // in the console will show the object. if you click on the object it will show the details of the movie so i will copy the movie details.which part i need  copy the property then call it with the {movie.title or movie.overview etc...}
            setMovie(response.data.results[5])
            //TODO:14 CHANGE BANNER IMAGE
        })
    }, [])

    

    return (
        <div
            style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie && movie.title}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""} </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )//im going to set a fade in the downside of the website

}

export default Banner
