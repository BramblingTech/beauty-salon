import './style.sass'
import React, {Component} from 'react'
import Banner from '../Banner'
import Subject from '../Subject'
import Services from '../Services'
import Works from '../Works'
import Offers from '../Offers'
import Contact from '../Contact'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

class ScrolledElements extends Component {

  render(){
    return (
      <React.Fragment>

          <Banner/>
          <Subject />
          <Services />
          <Works />
          <Offers />
          <Contact />

      </React.Fragment>
    )
  }
}
window.addEventListener("load", ()=>{
  document.querySelectorAll('section').forEach((item, index) => {
    if(document.querySelectorAll('section')[index+1] && window.innerHeight-item.clientHeight<=100){
      item.style.top=(window.innerHeight-item.clientHeight)-100+'px';
    }
  });
  gsap.registerPlugin(ScrollTrigger);

  const panels = gsap.utils.toArray(".panel");
  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "bottom center+=100px",
      end: "bottom top-=100px",
      scrub: 3,
      toggleActions: "play reset play reset",
      onUpdate: self => {
        panel.style.transform= 'translateY('+(-self.progress.toFixed(3)*100)+'px)';
      },
      onRefresh: self =>{
        panel.style.transform= 'translateY('+(-self.progress.toFixed(3)*100)+'px)';
      },
    });
  });


})

window.addEventListener('resize', function(event) {
  document.querySelectorAll('section').forEach((item, index) => {
    if(document.querySelectorAll('section')[index+1] && document.querySelectorAll('section')[index-1] && window.innerHeight-item.clientHeight<=100){
      item.style.top=window.innerHeight-item.clientHeight-100+'px';
    }
  })
})

export default ScrolledElements
