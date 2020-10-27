import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './QuesAnsComment.module.css';
import Personal_info from '../utils/personal_info';
import Radium, { StyleRoot } from 'radium';
import { zoomIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import profile_image from '../Signin/profile.svg';

import QuestionHeading from './QuestionHeading/QuestionHeading'
import Answer from './Answer/Answer'

const Styles = {
    zoomIn: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    },
    fadeOut: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(fadeOut, 'fadeOut')
    }
}


export default function QuesAnsComment(props) {
    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetcher = () => {
            fetch(`http://127.0.0.1:3001/get-question/${id}/`)
                .then(response => response.json())
                .then(json => {
                    setData(json)
                })
        }
        fetcher()
    }, [id])

    return (
        <StyleRoot>
            <div className="dt w-100 h-100 vh-100" style={Styles.zoomIn}>
                <Personal_info data={props.data.user} />
                <div className="dtc w-70 bg-near-white v-top h-100" >
                    <div id={styles.container}>
                        {data && <QuestionHeading questionHeading={data.que} />}
                        {data && data.answers.map(answer => {
                            return <Answer
                                ansid={answer.ansid}
                                userid={props.data.userid}
                                body={answer.ans}
                                datetime={answer.datetime}
                                upvotes={answer.upvotes}
                                comments={answer.comments}
                            />
                        })}
                    </div>
                </div>
            </div>
        </StyleRoot>
    )
}