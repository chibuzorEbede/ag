const InputElement = ({ type, name, value, onChange }) => {
    return <input onChange={onChange} className='rounded placeholder:text-ag-green p-3 bg-ag-gold text-ag-green font-extralight w-full' value={value} type={type} name={name} id={name} placeholder={name} />
}

export default InputElement