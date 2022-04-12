import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import styles from '../src/myStyles.module.css'

const User = () => {

    const navigate = useNavigate()
    const [newUser, setNewUser] = useState(
        {
            name: '',
            email: '',
            password: '',
            birthdate: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);
        formData.append('email', newUser.email);
        formData.append('password', newUser.password);

        axios.post('https://pictagram-vj.herokuapp.com/users/add', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        navigate('/login')
    }

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] });
    }

    return (
        <form className={styles.signupForm} encType='multipart/form-data'>
            <h1>User Details </h1>
            <div className={styles.signupLabel}>
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.signupLabel}>
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.signupLabel}>
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.signupLabel}>
                <label>D.O.B:</label>
                <input
                    type="date"
                    name="birthdate"
                    value={newUser.date}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.signupLabel}>
                <label>Profile Picture:</label>
                <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                />
            </div>
            <button onClick={handleSubmit}> Signup</button>
        </form>
    );
}

export default User;