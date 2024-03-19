import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './OfficerAuthPage.css'
import firebase from './firebaseConfig';

const OfficerSignup = () => {
    const [fname, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setConfirmPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password,fname,lname,cpassword);
        if (user) {
            alert("Account Created Successfully");
        }
        } catch (error) {
        alert(error.message);
        }
    };
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://i.pinimg.com/564x/b3/a9/8d/b3a98deb7de1be503be0d6279153a881.jpg'
                    alt='signup' />

                <form className='authform'>
                    <h1>Signup Auth</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' id='fname' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' id='lname' onChange={(e) => setLastName(e.target.value)}  />
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}  />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password'  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='formgroup'>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input type='password' id='cpassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    </div>

                    <Link to='/Officerlogin'
                        className='stylenone'
                    >
                        <p>Already have an account?</p>
                    </Link>
                    <Link to='/Officersignup'
                        className='stylenone'
                    >
                        <button className='btn' onClick={submit}>Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default OfficerSignup