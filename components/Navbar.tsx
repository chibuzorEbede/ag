import Logo from "./common/Logo"
import Button from "./common/Button"
import ButtonFlat from "./common/ButtonFlat"
import Link from "next/link"
import { useState } from "react"


const Navbar = function () {
  const [toggleMenu, setToggleMenu] = useState(true)
  const menuHandler = () => {
    setToggleMenu(!toggleMenu)
  }
  return (

    <>
      <nav className='flex justify-between items-center py-8 px-4 bg-ag-green'>


        <Logo />
        <div className="ml-auto menu-btns  gap-6 justify-center items-center hidden md:flex ">
          <Link href='/login'><ButtonFlat w={97} h={35} text={`login`} /></Link>
          <Link href='/about'><ButtonFlat w={97} h={35} text={`about`} /></Link>
          <Link href='/contact us'><ButtonFlat w={97} h={35} text={`contact us`} /></Link>
          <Link href='/signup'><Button text={`sign up`} /></Link>
        </div>
        <div className="ml-2 md:ml-0 mobile-menu md:hidden">
          <Button text='menu' onClick={menuHandler} />
        </div>

      </nav >
      {toggleMenu && <div className="relative">
        <MobileMenu />
      </div>}
    </>
  )
}



export default Navbar

const MobileMenu = () => {
  return <menu className="absolute top-0 left-0 h-full w-full z-10">
    <ul className="flex flex-col gap-4 bg-ag-green items-center justify-center p-4">
      <Link href='/login'><ButtonFlat w={97} h={35} text={`login`} /></Link>
      <Link href='/about'><ButtonFlat w={97} h={35} text={`about`} /></Link>
      <Link href='/contact us'><ButtonFlat w={97} h={35} text={`contact us`} /></Link>
    </ul>
  </menu>
}

