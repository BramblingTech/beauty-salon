import React from 'react'
var disableScroll = function(target = false) {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.position = 'fixed';
  if (target) {
      target.style.overflow = 'auto';
  }
}
// eslint-disable-next-line
var enableScroll = function() {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = 'auto';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
const showModal = () =>{
  document.querySelector('.modal_contact').classList.add('modal_active');
  disableScroll();
}
function Button(props) {
  return (
    <button className={`site-button ${props.className}`} onClick={showModal}><span>{props.title?props.title:'записаться'}</span></button>
  )
}

export default Button
