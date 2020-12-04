import React from 'react'
import SideBarRow from './SideBarRow'
import './SideNav.css'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const SideNav = () => {
    return (
        <div className="sideNav">
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <div className="sideNav__divider">
            <Divider />
            </div>
            <SideBarRow Icon={VideoLibraryIcon} title="Library"/>
            <SideBarRow Icon={HistoryIcon} title="History"/>
            <SideBarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SideBarRow Icon={WatchLaterIcon} title="Watch later"/>
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="show more"/>
        
        </div>
    )
}

export default SideNav
