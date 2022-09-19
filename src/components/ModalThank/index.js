import React from 'react'
import './style.sass'


var enableScroll = function() {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = 'auto';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
const closeModal = (el) =>{
  if(el===document.querySelector('.modal_thank')){
    document.querySelector('.modal_thank').classList.remove('modal_active');
    document.querySelector('.modal_contact').classList.remove('modal_active');
    enableScroll();
  }
}
const closeModalByButton = () =>{
  document.querySelector('.modal_thank').classList.remove('modal_active');
  document.querySelector('.modal_contact').classList.remove('modal_active');
  enableScroll();
}
function ModalThank() {
  return (
    <div className="modal modal_thank" onClick={(e)=>{closeModal(e.target)}}>
      <div className="modal__window">
        <h4 className="modal__title">Мы свяжемся с вами в ближайшее время</h4>
        <div className="modal__image-wrap">
          <img src="../img/thank.png" alt="" className="modal__image" />
        </div>
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

export default ModalThank
