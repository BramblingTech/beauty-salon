import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './style.sass';
var disableScroll = function(target = false) {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.position = 'fixed';
  if (target) {
      target.style.overflow = 'auto';
  }
}
var enableScroll = function() {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = 'auto';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
const openMenu = () =>{
  if(document.querySelector('.header__burger-wrap').classList.contains("header__burger-wrap_close")){
    enableScroll()
  }
  else{
    disableScroll()
  }
  document.querySelector('.header__burger-wrap').classList.toggle("header__burger-wrap_close");
  document.querySelector('.header__menu').classList.toggle('header__menu_active')
}
const scrollTo = (e, href) =>{
  if(window.location.pathname==='/'){
    smoothscroll.polyfill();
    e.preventDefault();
    if(document.querySelector('.header__burger-wrap').classList.contains("header__burger-wrap_close")){
      enableScroll()
      document.querySelector('.header__burger-wrap').classList.remove("header__burger-wrap_close")
      document.querySelector('.header__menu').classList.remove('header__menu_active')
    }
    const topOffset = 0;
    const elementPosition = document.querySelector(href).offsetTop;
    const offsetPosition = elementPosition - topOffset;

    window.scroll({
        top: offsetPosition,
        behavior: 'smooth'
    });

  }
}


function Header() {
  return (
    <header className='header'>
      <div className='container header__container'>
          <a href='/' className='header__logo-wrap'>
            <img src='../img/logo.svg' alt='logo' className='header__logo'/>
          </a>
          <div className="header__burger-wrap" onClick={openMenu}>
            <span className="header__burger-line header__burger-line1"></span>
            <span className="header__burger-line header__burger-line2"></span>
            <span className="header__burger-line header__burger-line3"></span>
          </div>
        <ul className='header__menu'>
          <li><a href="/#about" onClick={(e)=>scrollTo(e, '#about')}><span>О нас</span></a></li>
          <li><a href="/#services" onClick={(e)=>scrollTo(e, '#services')}><span>Услуги</span></a></li>
          <li><a href="/#works" onClick={(e)=>scrollTo(e, '#works')}><span>Наш Instagram</span></a></li>
          <li><a href="/#contacts" onClick={(e)=>scrollTo(e, '#contacts')}><span>Контакты</span></a></li>
        </ul>
      </div>
    </header>
  )
}
export default Header
