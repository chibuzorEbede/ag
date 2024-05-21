const LoginButton = ({ text, icon }) => {
    return <div className='flex items-center gap-3 p-4 border border-ag-gold rounded'>
        <div className='text-2xl'>{icon}</div>
        <button className='capitalize text-center text-ag-green w-full '> {text}</button>
    </div>
}


export default LoginButton