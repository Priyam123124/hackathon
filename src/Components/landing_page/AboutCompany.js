import React from 'react'
import './company.css'
const AboutCompany = () => {
  return (
    <>
    <div className='company'>
        <div className='enter_text'>
            <p style={{fontSize: "25px", marginTop: "20px"}}>Stay Connected</p>
        </div>
        <div className='logos'>
            <div className='logos2'>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className='logo3'></div>
                    <p style={{fontSize: "25px", marginTop: "10px"}}>About Company</p>
                </div>
                <div style={{display: "flex", marginLeft: "75px", marginTop: "15px"}}>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><div className='logo4'></div><p style={{textAlign: "center"}}>Logo 1</p></div>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><div className='logo4'></div><p style={{textAlign: "center"}}>Logo 2</p></div>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><div className='logo4'></div><p style={{textAlign: "center"}}>Logo 3</p></div>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><div className='logo4'></div><p style={{textAlign: "center"}}>Logo 4</p></div>
                </div>
            </div>
            <div style={{marginTop: "30px", marginLeft: "3vw"}}>
                <div style={{fontSize: "25px"}}>Join Our Newsletter</div>
                <div className='button_flex'>
                    <input type='text' placeholder=" Your Email Address" style={{width: "25vw", height: "50px", border: "none", borderRadius: "27px"}}/>
                    <input type='button' value="Submit" style={{marginTop: "10px", border: "none", width: "10vw", height: "30px", borderRadius: "27px"}}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutCompany