const Modal = ({children, isOpen, setIsOpen})=>{
  if(!isOpen) return null;      /* inicializa fechado */ 
  return(
      <div className="backdrop">
        <div className="modal">
          <button className="modalClose" onClick={()=> setIsOpen(false)}>X</button>
          {children}
        </div>
      </div>
    )
}
export default Modal