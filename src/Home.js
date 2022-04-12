import React from 'react'
import logo from '../src/pictagramLogo.jpg'
import styles from '../src/myStyles.module.css'

function Home() {
   
    return (
        <div>
            <p className = {styles.homeTitle}>Pictagram </p> 
            <p className = {styles.homeQuote}>If you see something that moves you, and then snap it, you keep a moment. </p>
            <img className = {styles.logo} src = {logo} alt = "logo"/>           
        </div>
    )
}

export default Home
