// Header.js

import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { CiBookmark } from 'react-icons/ci';
import { MdOutlineShoppingBag } from 'react-icons/md';
import './Header.css';
import './Miniheader.css'


const Header = () => {
  return (
    <>
    <header className="header">
      
      <div className="logo">
      <h1 className='heading'>T A N N  T R I M</h1></div>
      <div className="icon-container">
        <CiSearch className="icon" />
        <IoPersonOutline className="icon" />
        <CiBookmark className="icon" />
        <MdOutlineShoppingBag className="icon" />
      </div>
      
      
    </header>
    <div class="list-items mini-header">
        <li>Bags</li>
        <li>Travel</li>
        <li>Accesaries</li>
        <li>Gifting</li>
        <li>Jewlary</li>
      </div>
      </>
  );
};

export default Header;
