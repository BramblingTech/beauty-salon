import React from 'react'
import './style.sass'

function Cookies() {
  return (
    <div className="offset-xl-2 offset-sm-1 cookies">
      <div className="cookies__wrap">
        <p className="cookies__text">Этот сайт использует технологию cookie для улучшения работы с сайтом.</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="cookies__button" onClick={()=>{setCookie('visited','testcookie',7); document.querySelector('.cookies').classList.remove('cookies_active');}}>Принимаю</a>
      </div>
    </div>
  )
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        // eslint-disable-next-line
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        // eslint-disable-next-line
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  window.onload = function() {
    var x = getCookie('visited');
    if (x!=='testcookie') {
      document.querySelector('.cookies').classList.toggle('cookies_active');
    }
  };



export default Cookies
