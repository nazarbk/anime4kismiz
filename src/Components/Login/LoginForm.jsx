import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {

    const[action, setAction] = useState('');

    const registerLink = () =>{
        setAction(' active');
    }

    const loginLink = () =>{
        setAction('');
    }

  return (
    <div className={`wrapper${action}`}>
        <div className='form-box'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label htmlFor="">
                        <a href="#">Olvidaste la contraseña?</a>
                    </label>
                </div>

                <button type='submit'>Login</button>

                <div className="register">
                    <p>No tienes una cuenta? <a href="#" onClick={registerLink}>Registro</a></p>
                </div>
            </form>
        </div>

        <div className='form-box register'>
            <form action="">
                <h1>Registro</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <button type='submit'>Registrarse</button>

                <div className="register">
                    <p>Ya tienes una cuenta? <a href="#" onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginForm;