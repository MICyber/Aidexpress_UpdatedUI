import React from 'react'
import wheel from '../../ASSETS/wheel.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={wheel} alt='threewheel' />
            </div>
            <div className='right'>
                <h1>Fresh Vegetables & Fruits at your doorstep
                </h1>
                <p>We deliver fresh vegetables & fruits at your doorstep.
                    We deliver fresh vegetables & fruits at your doorstep.
                </p>
            </div>
        </div>
    )
}

export default Footer1