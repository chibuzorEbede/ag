import React from 'react'
import Navbar from './Navbar'
import Button from './common/Button'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="hero p-4 bg-hero-pattern bg-no-repeat bg-cover h-[90vh] ">
            <Navbar />

            <div className='flex flex-col justify-center items-center'>
                <div className="hero-text mt-8">
                    <p className='text-white font-bold text-center text-4xl md:text-[75px] leading-[60px] md:leading-loose uppercase drop-shadow-lg'>
                        providing  <i className='text-ag-gold inline'>farmers</i> with reliable <i className='text-ag-gold inline'>solutions</i> to daily <i className='text-ag-gold underline inline'>farming</i> problems </p>

                </div>
                <div className="cta text-center mt-8">
                    <Link href='/ask'>
                        <Button text='ask a question' />
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default Hero