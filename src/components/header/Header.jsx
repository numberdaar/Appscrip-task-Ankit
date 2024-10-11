import React from 'react';
import '../header/header.css';
import { IoIosSearch , IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTwirlyFlower } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='icons-left'>
          <RxHamburgerMenu className='icon' id='ham-icon' size={24}/>
          <GiTwirlyFlower className='icon' id='main-icon' size={24}/>
        </div>
        <div className='logo'>LOGO</div>
        <div className='icons-right'>
          <IoIosSearch className='icon' size={20}/>
          <IoIosHeartEmpty className='icon' size={20}/>
          <IoBagOutline className='icon' size={20}/>
          <LuUser2 className='icon' size={20}/>
          {/* <p className='icon' size={20}>Eng</p> */}
        </div>
      </div>
    </>  
  )
}

export default Header