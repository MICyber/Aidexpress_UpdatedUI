import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import firebase from './firebaseConfig';
import { useTranslation } from 'react-i18next';


const Signup = () => {
  const [firstname, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [confpass, setConfirmPassword] = useState('');
  const { t } = useTranslation();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, pass,firstname,lastname,confpass);
      if (user) {
        alert("Account Created Successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='authpage'>
      <Navbar reloadnavbar={false} />
      <div className='authcont'>
        <img
          src='https://i.pinimg.com/564x/b3/a9/8d/b3a98deb7de1be503be0d6279153a881.jpg'
          alt='signup'
        />
        <form className='authform'>
          <h1>{t("Signup")}</h1>
          <div className='form-group-row'>
            <div className='formgroup'>
              <label htmlFor='firstname'>First Name</label>
              <input type='text' id='firstname' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='formgroup'>
              <label htmlFor='lastname'>Last Name</label>
              <input type='text' id='lastname' onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className='formgroup'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form-group-row'>
            <div className='formgroup'>
              <label htmlFor='pass'>Password</label>
              <input type='password' id='pass' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='formgroup'>
              <label htmlFor='confpass'>Confirm Password</label>
              <input
                type='password'
                id='confpass'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <Link to='/login' className='stylenone'>
            <p>Already have an account?</p>
          </Link>
          <button onClick={submit}>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;