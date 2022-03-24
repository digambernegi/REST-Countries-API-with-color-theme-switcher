import React, { useContext } from 'react'
import './header.css'
import {ThemeContext} from '../../context/darkModeContext'
import {Link} from 'react-router-dom'

function Header() {
const {dispatch} = useContext(ThemeContext)
  const {darkMode}=useContext(ThemeContext)

  return (
    <div className='header'>
      <Link to={'/'} style={{textDecoration:'none', color:'hsl(200, 15%, 8%)'}}><div className="title">Where in the world?</div></Link>
      <div className="darkMode">
      <i onClick={() => dispatch({type:'TOGGLE'})} className={darkMode? 'far fa-sun':'far fa-moon'}></i> 
      <span className='darkModeTitle'> Dark Mode</span></div>
    </div>
  )
}
export default Header
