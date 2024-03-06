import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './AuthPage.css';
import firebase from './firebaseConfig';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pass);
      const user = userCredential.user;
      
      if (user) {
        alert("Login Successful");
        // Redirect to UserProfile page
        navigate('/UserProfile/accountsettings'); // Change the path as needed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='authpage'>
      <Navbar reloadnavbar={false} />
      <div className='authcont'>
        <img src='https://i.pinimg.com/564x/80/37/8c/80378c968a1dbd5eefaff4c102a89205.jpg' alt='login' />
        <form className='authform'>
          <h1>{t("Login")}</h1>
          <div className='formgroup'>
            <label htmlFor='email'>{t("Email1")}</label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='formgroup'>
            <label htmlFor='password'>{t("Password")}</label>
            <input type='password' id='pass' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Link to='/forgotpassword' className='stylenone'>
            <p>{t("Forgotpassword?")}</p>
          </Link>
          <button onClick={submit}>{t("Login")}</button>
          <h2 className='or'>{t("OR")}</h2>
          <Link to='/SignUpUser' className='stylenone'>
            <button className='btn'>{t("Signup")}</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;