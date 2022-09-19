import React from 'react'
import './style.sass'
function Error() {
  return (
  <div className="error">
    <div className="container error__container">
        <h1 className="error__title">404</h1>
        <p  className="error__text">Данная страница еще на процедурах, пожалуйста, <br/>перейдите на главную</p>
        <a href="/" className='site-button'><span>На главную</span></a>
    </div>
        <img src="../img/error.svg" alt="Not found" className="error__image" />
  </div>
  )
}


export default Error
