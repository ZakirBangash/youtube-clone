import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import Divider from '@material-ui/core/Divider';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon />
                <h4>FILTER</h4>
            </div> 
            <div className="searchPage__divider">
               <Divider />
            </div>
            <ChannelRow />
            <div className="searchPage__divider">
               <Divider />
            </div>
            <VideoRow />
            <VideoRow />
            <VideoRow />
            <VideoRow />
            <VideoRow />
            <VideoRow />

        </div>
    )
}

export default SearchPage
