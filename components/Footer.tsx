import Logo from "./common/Logo";
import {  BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";


const Footer = ()=>{
    return(
      <div className="footer mt-8 min-h-[30vh] bg-ag-green text-white p-4">
        <ul className="footer-links flex justify-between mb-8">
          <li className="link-item">Copyright 2023</li>
          <li className="link-item">Contact us</li>
          <li className="link-item">Terms & Conditions</li>
        </ul>
        <ul className="social-links flex gap-8">
          <BsTwitter/>
          <BsFacebook/>
          <BsLinkedin/>
        </ul>
        <div className="footer-logo mt-4">
        <Logo/>
        </div>
      </div>
    )
    }

    export default Footer