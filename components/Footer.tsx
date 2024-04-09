import Link from "next/link";
import Logo from "./common/Logo";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer md:flex md:justify-between md:items-center  mt-8 min-h-[30vh] bg-ag-green text-white p-4">

      <div className="footer-logo mt-4 mb-8">
        <Logo />
      </div>

      <ul className="footer-links flex justify-between md:gap-8 mb-8">
        <li className="link-item">Copyright 2023</li>
        <li className="link-item">Contact us</li>
        <li className="link-item">Terms & Conditions</li>
      </ul>

      <ul className="social-links flex gap-8">
        <Link href='https://twitter.com'><BsTwitter /></Link>
        <Link href='https://twitter.com'><BsFacebook /></Link>
        <Link href='https://twitter.com'> <BsLinkedin /></Link>


      </ul>
    </div>
  )
}

export default Footer