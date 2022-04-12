import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../src/myStyles.module.css'

function Navigation() {
    const user = localStorage.getItem('userAuthData')
    const navigate = useNavigate()
    return (
        <div className={styles.navBox} >
            {!user ?
                <div  >
                    <Link className={styles.nav} to='/'>Home</Link>
                    <Link className={styles.nav} to='/signup'> Signup </Link>
                    <Link className={styles.nav} to='/login'> Login </Link>


                </div>
                :
                <>
                    <Link className={styles.nav} to='/'>Home</Link>
                    <Link className={styles.nav} to='/feed'> Feeds </Link>
                    <Link className={styles.nav} to='/post'> Post </Link>
                    <button className={styles.logout} onClick={() => {
                        localStorage.removeItem('userAuthData')
                        navigate('/')
                    }}>Logout</button>

                </>
            }

        </div>
    )
}

export default Navigation
