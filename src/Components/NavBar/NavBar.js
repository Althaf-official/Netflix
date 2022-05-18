import React from 'react'
//Import navbar.css
import "./NavBar.css"
//TODO:1 import css file.  create logo and avatar



function NavBar() {
  return (
      //put one logo and avatar which is taked from   https://github.com/Packapeer/React_tutorial_netflix_app/blob/main/assets.md 
      // give className to div & logo and avatar a className
      //TODO:2 give style to className= navbar and logo. avatar
    <div  className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      
    </div>
  )
}

export default NavBar
