import React from 'react'
import './Videos.css'
import { Avatar } from '@material-ui/core';

const Videos = () => {
    return (
        <div className="videos">
            <img className="videos__thumbnail" src="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=COTFqP4F&rs=AOn4CLBwq6tT0-MdnBl-PQjSkMdQ3DXdbw " alt=""/>
        
        <div className="videos__info">
            <Avatar />
            <div className="videos__text">
                <h4>🔴 Let's Build a YouTube Clone with REACT JS for Beginners</h4>
                <p>Clever programmer</p>
                <p>101k views . 1 month ago</p>
            </div>
        </div>
        </div>
    )
}

export default Videos
