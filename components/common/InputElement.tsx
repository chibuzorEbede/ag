const InputElement = ({ type, name, value, onChange }) => {
    return <input onChange={onChange} className='rounded placeholder:text-ag-green placeholder:text-xs p-3 shadow shadow-ag-green bg-ag-gold text-ag-green font-extralight w-full outline-none hover:outline hover:outline-ag-green' value={value} type={type} name={name} id={name} placeholder={name} />
}

export default InputElement