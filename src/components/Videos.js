import React from 'react'
import './Videos.css'
import { Avatar } from '@material-ui/core';

const Videos = () => {
    return (
        <div className="videos">
            <img className="videos__thumbnail" src="https://i.ytimg.com/an_webp/4dsBkgUCGRY/mqdefault_6s.webp?du=3000&sqp=CPynrf4F&rs=AOn4CLDsJ6POc2P5yQaDR-r3-B_bp4TtBA " alt=""/>
        
        <div className="videos__info">
        <Avatar className="channelRow__avatar" alt="Remy Sharp" src="https://yt3.ggpht.com/a-/AOh14GjUOgFCdV4YafDiabCu7TUZpmekLrbdRf2TMw=s68-c-k-c0x00ffffff-no-rj-mo" />
            <div className="videos__text">
                <h4>Best Scenes Of Hira Mani -Do Bol Top Pakistani Dramas</h4>
                <p>Top Pakistani Dramas</p>
                <p>101k views . 1 month ago</p>
            </div>
        </div>
        </div>
    )
}

export default Videos
