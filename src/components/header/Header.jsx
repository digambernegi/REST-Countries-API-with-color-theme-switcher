import React, { useContext } from 'react'
import './header.css'
import {ThemeContext} from '../../context/darkModeContext'

function Header() {
const {dispatch} = useContext(ThemeContext)
  const {darkMode}=useContext(ThemeContext)

  return (
    <div className='header'>
      <div className="title">Where in the world?</div>
      <div className="darkMode">
      <i onClick={() => dispatch({type:'TOGGLE'})} className={darkMode? 'far fa-sun':'far fa-moon'}></i> 
      <span className='darkModeTitle'> Dark Mode</span></div>
    </div>
  )
}
export default Header
