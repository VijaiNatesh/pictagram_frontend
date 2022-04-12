import React, {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Editpost() {

    const navigate = useNavigate()
    const [content, setContent] = useState()
    const {postId} = useParams()
   

    const handleEdit = () => {
        axios.put('https://pictagram-vj.herokuapp.com/posts/edit_post', {postId, content})
        .then(res => {                
           console.log(res);
        })
        .catch(err => {
           console.log(err);
        });
        alert("Post Edited")
        navigate('/feed')
    }

    return (
        <form onSubmit = {handleEdit}>
             <input 
                type="text"
                placeholder="Write something about Post"
                name="content"
                value={content}
                onChange={(e) => {setContent(e.target.value)}}
            />
            <input type = "submit" />
        </form>
    )
}

export default Editpost
