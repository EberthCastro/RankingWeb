import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FooterStyled } from './FooterStyle'

function Footer () {
  return (

    <FooterStyled>
        <ul>
            <li><Link to="https://">About Us</Link></li>
            <li><Link to="https://">Contact</Link></li>
        </ul>
        <ul>
            <li><Link Link to ="https://"><FaFacebook /></Link></li>
            <li><Link Link to ="https://"><FaInstagram /></Link></li>
            <li><Link Link to ="https://"><FaGoogle /></Link></li>
        </ul>
    </FooterStyled> 
  )
}

export default Footer;