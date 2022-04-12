import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import styles from '../src/myStyles.module.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const navigate = useNavigate()
    

    const logIn = async() => {
        await axios.post('https://pictagram-vj.herokuapp.com/users/login', { email, password })
            .then(res => {
                console.log(res);
                localStorage.setItem('userAuthData', JSON.stringify(res.data))                                    
            })
            .catch(err => {
                console.log(err);
            });
            navigate('/')
            window.location.reload(false)            
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        logIn()                         
    }
   


    return (
        <form className = {styles.signupForm}>
        <div className = {styles.signupLabel}>
            <label> Email: </label>
            <input
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
        <div className = {styles.signupLabel}>
            <label> Password: </label>
            <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button onClick = {handleSubmit}> Login </button>
            
        </form>
    )
}

export default Login
