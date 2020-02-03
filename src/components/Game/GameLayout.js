import React from 'react'
import Play from './steps/Play';
import './steps/Answers.css'
export default function GameLayout(props) {
    return (
        <div className="row" style={{ height: "85vh" }}>
            <div className="col l2 s12 hideMobile">
                LeaderBoard
            </div>
            <div className="col l10 s12">
                <Play />
            </div>
        </div>
    )
}