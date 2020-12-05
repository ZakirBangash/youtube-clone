import React,{useState,useEffect} from 'react'
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
import {Link} from 'react-router-dom';

const SideNav = ({selected}) => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
            if (selected) {
                setIndex(1)
            }
     }, [selected])



    return (

        <div className="sideNav">

            <Link to="/" onClick={()=>setIndex(1)} className="sideNav__link">
            <SideBarRow 
             selected={index === 1}
             
             Icon={HomeIcon} 
             title="Home"
             />
            </Link>

            <Link to="/trending" onClick={()=> setIndex(2)} className="sideNav__link">
            <SideBarRow
            selected={index === 2}
            
             Icon={WhatshotIcon}
             title="Trending"
              />
            </Link>
            <Link to='/subscription' onClick={()=> setIndex(3)} className="sideNav__link">
            <SideBarRow selected={index === 3}  Icon={SubscriptionsIcon} title="Subscription"/>
            </Link>

            <div className="sideNav__divider">
            <Divider />
            </div>
            <Link to="/library" onClick={()=> setIndex(4)} className="sideNav__link">
            <SideBarRow selected={index === 4}  Icon={VideoLibraryIcon} title="Library"/>
            </Link>

            <Link to="/history" onClick={()=> setIndex(5)} className="sideNav__link">
            <SideBarRow  selected={index === 5}  Icon={HistoryIcon} title="History"/>
            </Link>
            
            <Link to="/yourVideos" onClick={()=> setIndex(6)} className="sideNav__link">
            <SideBarRow selected={index === 6} Icon={OndemandVideoIcon} title="Your Videos"/>
            </Link>

            <Link to="/watchLater" onClick={()=> setIndex(7)} className="sideNav__link">
            <SideBarRow selected={index === 7} Icon={WatchLaterIcon} title="Watch later"/>
            </Link>
            <Link to="/likedVideos" onClick={()=> setIndex(8)} className="sideNav__link">
            <SideBarRow selected={index === 8}  Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            </Link>
            <Link to="/showMore" onClick={()=> setIndex(9)} className="sideNav__link">
            <SideBarRow selected={index === 9} Icon={ExpandMoreOutlinedIcon} title="show more"/>
            </Link>
        </div>
    )
}

export default SideNav
