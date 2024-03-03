import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
const ForgotPassword = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://i.pinimg.com/564x/42/77/7f/42777faf7dbd89f6bf2a65ec223b6824.jpg'
                    alt='signup' />

                <form className='authform'>
                    <h1>Forgot Password</h1>
                   
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='formgroup'>
                        <label htmlFor='cpassword'>Confirm New Password</label>
                        <input type='password' id='cpassword' />
                    </div>
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Try Login again?</p>
                    </Link>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Verify</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword