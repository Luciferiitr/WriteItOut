import React from 'react'
import styles from './Comment.module.css'
import Profile from 'C:/Users/devji/Desktop/DBMS Project/WriteItOut/src/Components/Signin/chico.png'

export default function Comment(props) {
    return (
        <div id={styles.container}>
            <div id={styles.profile}>
                <img src={Profile} id={styles.photo} />
                <div id={styles.bio}>
                    <h5>FirstName LastName</h5>
                    <p>This is the bio</p>
                </div>
            </div>
            <div id={styles.datetime}>Commented {props.datetime}</div>
            <div id={styles.comment}>
                {props.body}
            </div>
        </div>
    )
}