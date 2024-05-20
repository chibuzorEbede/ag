const Hr = ({ text }) => {
    return <div className=' flex  items-center'>
        <div className='w-full bg-ag-gold  h-[1px]'></div>
        <p className='text-ag-green   capitalize px-4'>{text}</p>
        <div className=' bg-ag-gold h-[1px]  w-full'></div>
    </div>
}

export default Hr