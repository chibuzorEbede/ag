import { useState } from "react"
const Tab = () => {


    return <div className='border-b-2 border-ag-green '>
        <TabButton text='recent questions' />
        <TabButton text='recent answers' />


    </div >
}




function TabButton({ text }) {
    const [isActive, setIsActive] = useState(true)
    const clickHandler = () => setIsActive(!isActive)

    return <button className={isActive ? `bg-ag-green rounded-t-lg p-2 text-ag-gold mr-1` : `border rounded-t-lg p-2 text-black-400 mr-1`} onClick={() => clickHandler()}><p className='capitalize'>{text}</p></button>
}


export default Tab