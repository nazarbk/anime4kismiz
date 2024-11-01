import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
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
                    <p>No tienes una cuenta?</p>
                    <a href="">Registro</a>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginForm;