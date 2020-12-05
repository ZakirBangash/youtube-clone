import React from 'react'
import './VideoRow.css'
import Avatar from '@material-ui/core/Avatar';

const VideoRow = () => {
    return (
        <div className="videoRow">
            <img src="https://i.ytimg.com/an_webp/nTjyD3aWQ3U/mqdefault_6s.webp?du=3000&sqp=CPOcrP4F&rs=AOn4CLBanASc1xUpYovIAwYDS7GehRsW7g" alt=""/>
        <div className="videoRow__text">
            <span>Top 8 VS code Shortcuts (2021)</span>
            <p>2.9k views . 12 hours ago</p>
            <div className="videoRow__avatar__text">
            <Avatar  alt="Remy Sharp" src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo" />
                <p>Clever Programmer</p>
            </div>
            <div className="videoRow__description">
            <p>Do you want a FREE Training on How to Become a 6-Figure JavaScript Developer?</p>
            </div>
            


        </div>
        </div>
    )
}

export default VideoRow
