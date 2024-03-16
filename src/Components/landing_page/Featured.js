import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <>
    <div className='featured'>
        <div className='featured_item'>
            <div style={{margin: "8px", fontSize: "20px"}}>Featured On</div>
            <div className='flex_item'>
                <div className='container2'></div>
                <div className='container2'></div>
                <div className='container2'></div>
                <div className='container2'></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured