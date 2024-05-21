import { useState } from "react"
const Tab = () => {


    return <div className=''>
        <TabButton text='recent questions' />
        <TabButton text='recent answers' />
        {/* <TabButton text='topics' />
        <TabButton text='latest' /> */}


    </div >
}

function TabButton({ text }) {
    const [isActive, setIsActive] = useState(true)
    const clickHandler = () => setIsActive(!isActive)

    return <button className={` rounded-lg shadow-3xl  text-ag-gold bg-ag-green mr-3 p-2 font-light text-sm`
    } onClick={() => clickHandler()}> <p className='capitalize'>{text}</p></button >
}


export default Tab


// `border rounded-t-lg p-2 text-black-400 mr-1 bg-ag-green