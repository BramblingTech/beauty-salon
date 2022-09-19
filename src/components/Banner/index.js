import React from 'react'
import './style.sass'
import Button from '../Button'

function Banner() {
  return (
    <section className='banner panel'>
        <video className="video" autoPlay="autoplay" muted="muted" loop="loop" playsInline >
            <source src="../media/preview.mp4" type="video/mp4" />
        </video>
      <div className="container banner__container">
        <h1 className="banner__title fade-up">Будь естественной, будь красивой, будь собой. Вместе с Т&Т Beauty Salon.</h1>
        <Button className='fade-up'/>
      </div>
    </section>
  )
}

export default Banner
