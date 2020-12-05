import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css'

const ChannelRow = () => {
    return (
        <div className="channelRow">
             <Avatar className="channelRow__avatar" alt="Remy Sharp" src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo" />
            <div className="channelRow__text">
                <span>Clever Programmer</span>
                <p>839K subscribers . 501 videos</p>
                <p>You can find awesome programming lessons here, This is the channel from i become expert of react</p>
            </div>
        </div>
    )
}

export default ChannelRow
