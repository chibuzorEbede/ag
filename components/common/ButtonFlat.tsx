const ButtonFlat = ({ text, w, h, c }) => {
  return (<button className={`px-2  ${c ? c : 'text-ag-gold'} text-center rounded-md text-lg font-normal capitalize `}>{text}</button>)
}

export default ButtonFlat