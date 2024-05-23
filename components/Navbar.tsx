import Logo from "./common/Logo"
import LogoMobile from "./common/LogoMobile"
import Button from "./common/Button"
import ButtonFlat from "./common/ButtonFlat"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";




const Navbar = function () {
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuHandler = () => {
    setToggleMenu(!toggleMenu)

  }
  return (

    <>
      <nav className='flex justify-between items-center py-4 px-4 bg-ag-green'>


        <div className="md:hidden">
          <LogoMobile />
        </div>
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="ml-auto menu-btns  gap-6 justify-center items-center hidden md:flex ">
          <Link href='/login'><ButtonFlat w={97} h={35} text={`login`} /></Link>
          <Link href='/about'><ButtonFlat w={97} h={35} text={`about`} /></Link>
          <Link href='/contact us'><ButtonFlat w={97} h={35} text={`contact us`} /></Link>
          <Link href='/signup'><Button text={`Sign up`} /></Link>
        </div>
        <div className="ml-3 md:ml-0 mobile-menu md:hidden">
          <Button text='menu' onClick={menuHandler} />
          {/* <GiHamburgerMenu className="text-4xl text-ag-gold" onClick={menuHandler} /> */}
        </div>

      </nav >
      {toggleMenu && <div className="relative">
        <MobileMenu onClick={menuHandler} />
      </div>}
    </>
  )
}



export default Navbar

const urlChange = () => {

}

const MobileMenu = ({ onClick }) => {
  return <menu className="absolute top-0 left-0 h-full w-full z-10 ">
    <ul className="flex flex-col gap-4 bg-ag-green  justify-center  p-4 ">
      <Link onClick={onClick} href='/login'><ButtonFlat w={97} h={35} text={`login`} /></Link>
      <Link onClick={onClick} href='/signup'><ButtonFlat w={97} h={35} text={`sign up`} /></Link>
      <Link onClick={onClick} href='/about'><ButtonFlat w={97} h={35} text={`about`} /></Link>
      <Link onClick={onClick} href='/contact us'><ButtonFlat w={97} h={35} text={`contact`} /></Link>
    </ul>
  </menu>
}

