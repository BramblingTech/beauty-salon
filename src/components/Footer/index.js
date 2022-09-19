import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './style.sass';

const scrollTo = (el, href) =>{
  if(window.location.pathname==='/'){
    smoothscroll.polyfill();
    el.preventDefault();
    const topOffset = 0;
    const elementPosition = document.querySelector(href).offsetTop;
    const offsetPosition = elementPosition - topOffset;

    window.scroll({
        top: offsetPosition,
        behavior: 'smooth'
    });

  }
}
function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <a href='/' className='footer__logo-wrap'>
          <img src='../img/logo.svg' alt='logo' className='footer__logo'/>
        </a>
        <ul className='footer__menu'>
          <li><a href="/#about" onClick={(e)=>scrollTo(e, '#about')}><span>О нас</span></a></li>
          <li><a href="/#services" onClick={(e)=>scrollTo(e, '#services')}><span>Услуги</span></a></li>
          <li><a href="/#works" onClick={(e)=>scrollTo(e, '#works')}><span>Наш Instagram</span></a></li>
          <li><a href="/#contacts" onClick={(e)=>scrollTo(e, '#contacts')}><span>Контакты</span></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
