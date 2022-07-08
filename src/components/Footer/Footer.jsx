import React from 'react';
import { Link as Scroll } from 'react-scroll';
import './Footer.css';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineMessage
} from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im'



const Footer = () =>{
  return (
    <div className='navigation'>
        <Scroll to="header" smooth={true} duration={600}><AiOutlineHome/></Scroll>
        <Scroll to="about" smooth={true} duration={600}><AiOutlineUser/></Scroll>
        <Scroll to="service" smooth={true} duration={600}><BiBook/></Scroll>
        <Scroll to="work" smooth={true} duration={600} offset={-80}><MdWorkOutline /></Scroll>
        <Scroll to="blog" smooth={true} duration={600}><ImBlog /></Scroll>
        <Scroll to='contact' smooth={true} duration={600}><AiOutlineMessage/></Scroll>
    </div>
  )
}

export default Footer