import Image from 'next/image'
import Link from 'next/link'

function Contact() {
    return (
        <section className='md:flex '>
            <div className="h-64 overflow-hidden md:h-screen md:w-[40%]  ">
                <Image src={`/img/boy_right.svg`} width={0} height={0} style={{ width: 'auto', height: 'auto' }} alt='picture of a boy on a farm' />
            </div>
            <div className='p-4 md:w-[60%] '>
                <h1 className='text-2xl'>Need to reach out to us?</h1>
                <p>Send us an email at info@agserver.net</p>

            </div>
        </section >
    )
}

export default Contact