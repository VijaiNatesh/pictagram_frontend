import React, { useState } from 'react'
import axios from 'axios'
import styles from '../src/myStyles.module.css'
import {useNavigate} from 'react-router-dom'

function Post() {
    const [newPost, setNewPost] = useState({
        content: "",
        image: ""
    })
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", newPost.content)
        formData.append("image", newPost.image)
        const userInfo = localStorage.getItem('userAuthData')
        const user = JSON.parse(userInfo)
        const userId = user && user._id;
        formData.append("user", userId)

        await axios.post('https://pictagram-vj.herokuapp.com/posts/add', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
            navigate('/feed')
            window.location.reload(false)
    }
    return (
        <form className = {styles.signupForm} >
        <h1>Post your picture</h1>
            <div className ={styles.signupLabel}>                
                <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    onChange={(e) => { setNewPost({ ...newPost, image: e.target.files[0] }); }}
                />
            </div>

            <div className ={styles.signupLabel}>
            <input
                type="text"
                placeholder="Write something about Post"
                name="content"
                value={newPost.content}
                onChange={(e) => { setNewPost({ ...newPost, content: e.target.value }); }}
            />
            </div>

            <button onClick={submitHandler}>Post</button>
        </form>
    )
}

export default Post
