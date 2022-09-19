import React from 'react'
import Form from '../Form'
import './style.sass'


var enableScroll = function() {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = 'auto';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
const closeModal = (el) =>{
  if(el===document.querySelector('.modal_contact')){
    document.querySelector('.modal_contact').classList.remove('modal_active');
    enableScroll();
  }
}
const closeModalByButton = () =>{
  document.querySelector('.modal_contact').classList.remove('modal_active');
  enableScroll();
}
function ModalContact() {
  return (
    <div className="modal modal_contact" onClick={(e)=>{closeModal(e.target)}}>
      <div className="modal__window">
        <h4 className="modal__title">Записаться</h4>
        <Form form='1'/>
        <div className="modal__close" onClick={()=>closeModalByButton()}>
          <span className="modal__close-wrap">
              <span className="modal__close-line modal__close-line_1"></span>
              <span className="modal__close-line modal__close-line_2"></span>
          </span>
        </div>
      </div>
    </div>
  )

}

export default ModalContact
