import { useState } from "react"
const Tab = () => {


    return <div className='flex gap-2'>
        <TabButton text='Recent questions' />
        <TabButton text='Recent answers' />
        {/* <TabButton text='topics' />
        <TabButton text='latest' /> */}


    </div >
}

function TabButton({ text }) {
    const [isActive, setIsActive] = useState(true)
    const clickHandler = () => setIsActive(!isActive)

    return <button className={` rounded-lg shadow-md  text-ag-gold bg-ag-green  p-3 font-medium text-sm`
    } onClick={() => clickHandler()}> <p className=''>{text}</p></button >
}


export default Tab


// `border rounded-t-lg p-2 text-black-400 mr-1 bg-ag-green