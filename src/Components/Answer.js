import React, { useEffect, useState } from 'react'
import styles from './Answer.module.css'
import Profile from './Signin/chico.png'

export default function Answer() {
    const [liked, setLiked] = useState(false)
    const [upvoteBG, setUpvoteBG] = useState('white')
    const [upvoteTextColor, setUpvoteTextColor] = useState('black')

    const [commentText, setCommentText] = useState('')

    useEffect(() => {
        if (liked) {
            setUpvoteBG('deepskyblue')
            setUpvoteTextColor('white')
        }
        else {
            setUpvoteBG('white')
            setUpvoteTextColor('black')
        }
    }, [liked])

    return (
        <div id={styles.container}>
            <div id={styles.profile}>
                <img src={Profile} id={styles.photo} />
                <div id={styles.bio}>
                    <h5>FirstName LastName</h5>
                    <p>This is the bio</p>
                </div>
            </div>
            <div id={styles.body}>
                This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer This is the answer
            </div>
            <div>
                <button
                    id={styles.upvoteButton}
                    style={{
                        backgroundColor: upvoteBG,
                        color: upvoteTextColor,
                    }}
                    onClick={() => setLiked(!liked)}
                >
                    Upvote
                </button>
            </div>
            <div id={styles.comment}>
                <img src={Profile} id={styles.commenterPhoto} />
                <textarea
                    id={styles.commentBox}
                    placeholder='Add a comment...'
                    onChange={e => {
                        setCommentText(e.target.value)
                        e.target.style.height = 'inherit'
                        e.target.style.height = e.target.scrollHeight + 'px'
                    }}
                    value={commentText}
                />
                <button
                    id={styles.addComment}
                    onClick={() => { }}
                >
                    Add comment
                </button>
            </div>
        </div>
    )
}