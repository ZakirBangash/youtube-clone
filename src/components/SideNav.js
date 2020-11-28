import React from 'react'
import SideBarRow from './SideBarRow'
import './SideNav.css'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';

const SideNav = () => {
    return (
        <div className="sideNav">
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <Divider />
            {/* <SideBarRow Icon={HomeIcon} title="Library"/> */}
        </div>
    )
}

export default SideNav
