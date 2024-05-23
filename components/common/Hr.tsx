const Hr = ({ text }) => {
    return <div className=' flex  items-center py-8'>
        <div className='w-full bg-ag-green  h-[1px]'></div>
        <p className='text-ag-green   capitalize px-4'>{text}</p>
        <div className=' bg-ag-green h-[1px]  w-full'></div>
    </div>
}

export default Hr