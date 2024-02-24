import React from 'react'
import manwithphone from '../../ASSETS/manwithphone.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={manwithphone} alt='manwithphone' />
            </div>
            <div className='right'>
                <h1>Putting the power of financial control in the hands of Samurdhi families. 
                    Track, access, and manage your assistance seamlessly.
                </h1>
                <p>“Poverty isn’t a lack of character. It’s a lack of cash.” 
                    —Rutger Bregman
                   
                </p>
            </div>
        </div>
    )
}

export default Footer1