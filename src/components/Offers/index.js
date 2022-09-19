import React from 'react'
import './style.sass'

function Offers() {
  return (
    <section className='offers panel'>
      <div className="container">
        <h2 className="offers__title fade-up">Доступные акции</h2>
        <div className="row">
          <div className="col-6 fade-up">
            <img src="../img/offer1.jpg" alt="Комбинированная чистка лица" className="offers__image"/>
            <p className="bigger-text offers__name">Комбинированная чистка лица</p>
            <p className="normal-text offers__text">акционная цена - <span className="text-hightlight">500 грн</span></p>
          </div>
          <div className="col-6 fade-up">
            <img src="../img/offer2.jpg" alt="Аппаратный маникюр" className="offers__image"/>
            <p className="bigger-text offers__name">Аппаратный маникюр</p>
            <p className="normal-text offers__text">акционная цена - <span className="text-hightlight">500 грн</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
