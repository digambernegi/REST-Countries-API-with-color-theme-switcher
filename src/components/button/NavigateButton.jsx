import React from 'react'
import './button.css'
import {Link} from 'react-router-dom';

function NavigateButton() {
  return (
    <div className='button'>
    <Link to={'/'}><button className='backBtn' type="submit"><i className="fa fa-long-arrow-left"></i> <span>Back</span></button></Link> 
    </div>
  )
}

export default NavigateButton