import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "../src/myStyles.module.css"
import { useNavigate } from 'react-router';


function Feed() {

    const navigate = useNavigate()
    const [feed, setFeed] = useState([]);

    var getPosts = async () => {
        await axios.get('https://pictagram-vj.herokuapp.com/posts/allposts')
            .then(res => {
                console.log(res.data);
                setFeed(res.data)

            })
            .catch(err => {
                console.log(err);
            });

    }


    useEffect(() => {
        getPosts()
    }, [])







    const userInfo = localStorage.getItem('userAuthData')
    const user = JSON.parse(userInfo)
    const userId = user && user._id;



    const handleLikes = async(postId) => {
         await axios.post("https://pictagram-vj.herokuapp.com/posts/like_dislike", { userId, postId })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
            window.location.reload(false)
    }     


    return (
        <div>
            {feed && feed.map((feed) => {
                return (

                    <div key={feed._id} className={styles.postBox}>
                        <div className={styles.postTitle}>
                            <img className={styles.userImage} src={`https://pictagram-vj.herokuapp.com/images/${feed.userdetails[0].photo}`} alt="user" />
                            <p className={styles.userName}>{feed.userdetails[0].name}</p>
                        </div><br />
                        {feed.content}<br />
                        < img className={styles.postImage} src={`https://pictagram-vj.herokuapp.com/images/${feed.image}`} alt="post" /><br />
                        <button onClick={() => {
                            handleLikes(feed._id)
                            window.location.reload(false);
                        }}> {feed.likes.length} Like </button>
                        <button onClick={() => {
                            navigate(`/editPost/${feed._id}`)
                        }}>Edit</button>                      
                    </div >
                )
            })}

        </div>
    )
}


export default Feed
