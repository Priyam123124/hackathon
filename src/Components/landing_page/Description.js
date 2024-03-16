import React from 'react'
import './description.css'
import { Link } from 'react-router-dom'
const Description = () => {
  return (
    <>
    <div className='desc'>
        <div className='box'>
            <p className='big_text'>Heaven Sports</p>
            <p className='small_text margin_top'>Level Up Your Sports Life: Connect</p>
            <p className= 'small_text'>Complete, Celebrate on 'App Name'</p>
            <div className='buttons'>
            <Link to="/signup"><input type='button' value='Sign Up' className='button'/></Link>
            <Link to="/login"><input type='button' value='Sign In' className='button'/></Link>
            </div>
        </div>
        <div className='box'>
            <div className='logo_image'></div>
        </div>
    </div>
    </>
  )
}

export default Description