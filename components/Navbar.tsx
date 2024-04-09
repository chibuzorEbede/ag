import Logo from "./common/Logo"
import Button from "./common/Button"
import ButtonFlat from "./common/ButtonFlat"
import Link from "next/link"


const Navbar = function () {
  return (
    <nav className='flex justify-between p-2 '>

      <Logo />

      <div className="ml-auto menu-btns flex gap-6 justify-center items-center invisible md:visible">
        <Link href='/login'><ButtonFlat w={97} h={35} text={`login`} /></Link>
        <Link href='/signup'><Button text={`sign up`} /></Link>
      </div>
      <div className="mobile-menu md:hidden">
        <Button text='menu' />
      </div>
    </nav >
  )
}



export default Navbar

