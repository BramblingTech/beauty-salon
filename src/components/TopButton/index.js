import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

function TopButton() {
  return (
    <button className='go-top' onClick={backToTop}>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5L5 0L10 5H0Z" fill="#000000"/>
      </svg>

    </button>
  )
}
function backToTop(){
  smoothscroll.polyfill();
  if(window.pageYOffset>0){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

  }
  document.querySelectorAll('section').forEach((item, index) => {
    if(document.querySelectorAll('section')[index+1]){
      item.style.transform= 'translateY(0)';
    }
  })
}
function trackScroll() {
  var a = window.pageYOffset, c = 100;
  a > c && document.querySelector('.go-top').classList.add("go-top_active");
  a < c && document.querySelector('.go-top').classList.remove("go-top_active")
}
window.addEventListener("scroll", trackScroll);
export default TopButton
