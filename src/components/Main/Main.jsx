import React from 'react'
import'./Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>'elloBaE</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Fella.</span></p>
                <p>How Can I help You Today?</p>
            </div>
            <div className="cards">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="cards">
                <p>Briefly summarize this concept:urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="cards">
                <p>SBrainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="cards">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Main

