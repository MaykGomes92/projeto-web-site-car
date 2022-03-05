import React from 'react'
import "../Sidebar/sidebar.css";

import { GiCartwheel } from "react-icons/gi";
import { BsHouseDoor } from "react-icons/bs";
import { SiMercedes } from "react-icons/si";
import { BsPeople } from "react-icons/bs";
import { MdOutlineMonochromePhotos } from "react-icons/md";

const sidebar = () => {
  return (
    <nav className='navLeft'>
        <ul>
            <li><a href='#slide-house'><BsHouseDoor className='icon-menu'/></a></li>
            <li><a href='#main1'><GiCartwheel className='icon-menu'/></a></li>
            <li><a href='#ancor-lan'><SiMercedes className='icon-menu'/></a></li>
            <li><a href='#anco-hist'><BsPeople className='icon-menu'/></a></li>
            <li><a href='galle-photos'><MdOutlineMonochromePhotos className='icon-menu'/></a></li>
        </ul>
    </nav>
  )
}

export default sidebar