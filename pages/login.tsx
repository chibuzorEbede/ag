import React, { useState } from 'react'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import Button from '../components/common/Button'
import ButtonFlat from '../components/common/ButtonFlat'
import Link from 'next/link'
import Hr from '../components/common/Hr'
import InputElement from '../components/common/InputElement'
import LoginButton from '../components/common/LoginButton'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = () => {
        console.log(email, password)
    }
    return (
        <div className="md:flex md:flex-row-reverse md:m-auto justify-center h-screen overflow-hidden">
            <div className="left p-8 flex flex-col gap-4 md:min-w-[50%] md:p-24">

                <InputElement name={`email`} type={`email`} value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputElement name={`password`} type={`password`} value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleClick} text={`login`} />
                <Hr text={`or`} />
                <LoginButton icon={<BsGoogle className='text-red-700' />} text={`continue with google`} />
                <LoginButton icon={<BsFacebook className='text-blue-700' />} text={`continue with facebook`} />
                <div className='flex items-center text-ag-green pt-8'>
                    <p className='mr-4'>Don&apos;t have an account? </p>
                    <Link href={`/auth/signup`}><ButtonFlat text={`signup`} w={'auto'} h={'auto'} c='text-ag-green' /></Link>
                </div>
            </div>
            <div className="right hidden md:block ">
                <img src="/img/boy_right.svg" alt="boy fishing" />
            </div>
        </div>
    )
}




// const InputElement = ({ type, name, value, onChange }) => {
//     return <input onChange={onChange} className='rounded placeholder:text-ag-green p-3 bg-ag-gold text-ag-green font-extralight w-full' value={value} type={type} name={name} id={name} placeholder={name} />
// }

















export default Login