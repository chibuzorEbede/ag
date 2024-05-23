const Button = ({ text, onClick = null }) => {
  return (<button onClick={onClick} className={`px-9 py-3 bg-ag-green text-ag-gold text-center rounded-lg text-sm font-medium  shadow-md outline outline-1 outline-ag-gold capitalize`}>{text}</button>)
}

export default Button