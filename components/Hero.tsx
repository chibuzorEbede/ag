import React from 'react'
import Button from './common/Button'
import Link from 'next/link'

// 
const Hero = () => {
    return (
        <div className="py-4 bg-hero-pattern3  bg-no-repeat bg-cover  md:min-h-[90vh]">

            <div className='flex flex-col justify-center items-center md:p-16'>
                <div className="hero-text md:mt-8 p-2">
                    <p className='text-ag-gold font-bold text-left md:text-center text-3xl md:text-[40px] lg:text-[60px] leading-relaxed md:leading-loose uppercase drop-shadow-lg'>
                        providing  <span className='md:text-ag-green inline'>farmers</span> with reliable <span className='text-ag-green inline'>solutions</span> to daily <span className='md:text-ag-green  inline'>farming</span> problems </p>

                </div>
                <div className=" text-center mt-8">
                    <Link href='/ask'>
                        <Button text='Ask a question' />
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default Hero

