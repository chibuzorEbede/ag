import Link from "next/link";
import Logo from "./common/Logo";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <div className="footer md:flex md:justify-between md:items-center  mt-8 min-h-[30vh] bg-ag-green text-white p-4">

      <div className="footer-logo mt-4 mb-8">
        <Logo />
      </div>

      <ul className="footer-links flex justify-between md:gap-8 mb-8">
        <li className="link-item">Copyright {today}</li>
        <li className="link-item">Contact us</li>
        <li className="link-item">Terms & Conditions</li>
      </ul>

      <ul className="social-links flex gap-8">
        <Link href='https://twitter.com/agserverng'><BsTwitter /></Link>
        <Link href='https://facebook.com/agserverng'><BsFacebook /></Link>
        <Link href='https://linkedin.com/agserverng'> <BsLinkedin /></Link>


      </ul>
    </div>
  )
}

export default Footer