import React from 'react'
import { ElfsightWidget } from 'react-elfsight-widget';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Navigation
} from 'swiper/core';

import './style.sass'

SwiperCore.use([Navigation]);

function Works() {
  return (
    <React.Fragment>
      <div id='works' style={{opacity:0, height: 0}}></div>
      <section className='works panel'>
        <div className="container">
          <h3 className='works__title fade-up'>Наш Instagram</h3>
          <div className="works__wrap">
            <div className="works__slider">
            <ElfsightWidget widgetID="e4bd4490-e232-40a5-989d-407c8c5b8344"/>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}
/*
  Remove button from instagram widget
  */

  {
    let counter = 0;
    window.addEventListener("DOMContentLoaded", ()=>{
      let timerId11111 = setInterval(
        () => remove_standart_close(timerId11111),
        500
       );
    });
    function remove_standart_close(timerId11111) {
      let link = document.querySelector("#eapps-instagram-feed-1>a");
      if (counter === 3) {
        clearInterval(timerId11111);
        return false;
      }
      if (link && link.length !== 0) {
        link.remove();

        counter++;
      } else {
      }
    }



  }

export default Works
