import './style/style.sass'
import React from 'react'
import Header from '../Header'
import Main from '../Main'
import Cookies from '../Cookies'
import TopButton from '../TopButton'
import Error from '../Error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route  path="/err" component={Error} />
        <Route path="*" component={Error} />
      </Switch>
      </Router>
      <Cookies />
      <TopButton />
    </React.Fragment>
  )
}

var Animate = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,

      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom) {
    target.classList.add('fade-up_active');
  } else {

  };
};
window.addEventListener('scroll',() => {
  document.querySelectorAll('.fade-up').forEach(element => {Animate(element);});
});
window.addEventListener("load", ()=>{
    document.querySelectorAll('.fade-up').forEach(element => {Animate(element);});
    document.querySelector('.banner').classList.add('banner_active');
});
export default App
