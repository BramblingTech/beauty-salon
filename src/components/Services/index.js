import React, { useState } from 'react';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Navigation} from 'swiper/core';
import './style.sass'
import Button from '../Button'
SwiperCore.use([Navigation, Controller]);
function Services() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <React.Fragment>
    <div id='services' style={{opacity:0, height: 0}}></div>
    <section className='services panel'>
      <div className="services__wrap">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        simulateTouch={false}
        allowTouchMove={false}
        loop={true}
        speed={500}
        onResize={(swiper)=>swiper.update()}
        onSwiper={setControlledSwiper}
        className="services__image-slider"
      >
        <SwiperSlide>
          <img src="../img/slide1.jpg" alt="Шугаринг" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/slide2.jpg" alt="Лазерная эпиляция" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/slide3.jpg" alt="Маникюр" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/slide4.jpg" alt="Косметология" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/slide5.jpg" alt="Парикмахерские услуги" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/slide6.jpg" alt="Бровист / Визажист" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/slide7.jpg" alt="Массаж" />
        </SwiperSlide>
      </Swiper>
        <Button  className='services__button fade-up'/>
      </div>
        <div className="container services__container">

        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            simulateTouch={false}
            allowTouchMove={false}
            loop={true}
            speed={500}
            navigation={{
              prevEl: '.services__arrow_left',
              nextEl: '.services__arrow_right',
            }}
            controller={{ control: controlledSwiper }}
            onSwiper={(swiper) => console.log(swiper)}
            onResize={(swiper)=>swiper.update()}
            className="services__wrap-slider fade-up"
          >
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Шугаринг</h4>
                <p className="services__text">Шугаринг — это самый популярный метод удаления волос, который пришёл к нам с древних времен. Специалисты салона T&T используют натуральную пасту из таких ингредиентов, как сахар, лайм и вода. Регулярный шугаринг также позитивно влияет на кожу, делая ее гладкой и мягкой, так как в процессе происходит пилинг верхнего слоя эпидермиса.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Лазерная эпиляция</h4>
                <p className="services__text">В Т&Т Beauty Salon вы можете воспользоваться услугами лазерной эпиляции для женщин и мужчин. Мы используем безопасный лазер, который взаимодействует только  с верхним слоем кожи. Процедуры с использованием лазера абсолютно безболезненны и гипоаллергенны. При регулярном удалении волос лазером Вы сможете дольше наслаждаться гладкой кожей.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Маникюр</h4>
                <p className="services__text">В Т&Т Beauty Salon мы предлагаем все современные виды маникюра и педикюра, а также разнообразных покрытий. Наши специалисты работают классическим, европейским, аппаратным и комбинированным методами. Все инструменты и расходные материалы дезинфицируются и обрабатываются согласно принятым стандартам безопасности.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Косметология</h4>
                <p className="services__text">Современные методы косметологии помогают заботиться о красоте и здоровье вашей кожи. Т&Т Beauty Salon предоставляет услуги чистки лица, карбокситерапии и дарсонвализации. К уходовому и антивозрастному спектру процедур мы также относим пилинг и нанесение масок. Наслаждайтесь молодостью и своим великолепием благодаря своевременному уходу и заботе.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Парикмахерские услуги</h4>
                <p className="services__text">В Т&Т Beauty Salon мы предлагаем полный спектр косметических услуг в соответствии с вашими потребностями, от укладки волос до их стрижки и лечения. Позвольте нашим опытным стилистам создать для Вас образ, о котором вы мечтаете! Профессиональный уход за волосами любого типа, стрижки и укладки – наша команда готова обеспечить ваши волосы лучшим результатом.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Визаж и макияж</h4>
                <p className="services__text">Специалисты Т&Т Beauty Salon предоставляют такие виды макияжа, как дневной, вечерний и даже kids make-up. Мы с удовольствием выслушаем все ваши пожелания и выполним макияж, который подчеркнет вашу красоту.</p>
                <p className="services__text">Кроме услуг макияжа, наши визажисты также выполняют процедуры по уходу за бровями и ресницами, включая коррекцию, ламинирование, окрашивание и восстановление.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <SwiperSlide className="services__text-slide">
                <h4 className="services__title">Массаж</h4>
                <p className="services__text">Т&Т Beauty Salon предоставляет услуги классического, оздоровительного, антицеллюлитного, и спортивного типов массажей. Процедуры массажа – лучший способ избавиться от боли в мышцах, улучшить кровообращение, а регулярный массаж избавляет от усталости и возвращает телу легкость.</p>
                <p className="services__text">Наши массажисты проконсультируют и подберут для Вас лучший вариант процедуры.</p>
                <a href="https://drive.google.com/file/d/1yooel9LjFRyqxKYRPObqE4pC6sOyFqOz/view?usp=drivesdk" rel="noreferrer" target="_blank" className="services__link">смотреть прайс</a>
            </SwiperSlide>
            <button className="swiper-button-prev services__arrow services__arrow_left"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip45)">
            <path d="M24.1447 0.203484C24.416 0.474794 24.416 0.915869 24.1447 1.18718L9.33112 15.9993L24.1432 30.8128C24.4145 31.0841 24.4145 31.5252 24.1432 31.7965C23.8719 32.0678 23.4308 32.0678 23.1595 31.7965L7.85483 16.4918C7.71989 16.3554 7.65167 16.1774 7.65167 15.9993C7.65167 15.8212 7.71982 15.6431 7.8562 15.5081L23.1609 0.203419C23.4323 -0.0678253 23.8734 -0.0678253 24.1447 0.203484Z" fill="url(#paint45_linear)"/>
            </g>
            <defs>
            <linearGradient id="paint45_linear" x1="15.998" y1="32" x2="15.998" y2="0.00394391" gradientUnits="userSpaceOnUse">
            <stop stopColor="#924D3D"/>
            <stop offset="0.0448" stopColor="#9F5D4B"/>
            <stop offset="0.0995" stopColor="#B47363"/>
            <stop offset="0.1573" stopColor="#C68877"/>
            <stop offset="0.2749" stopColor="#F2BBA8"/>
            <stop offset="0.2985" stopColor="#F9C4B3"/>
            <stop offset="0.5025" stopColor="#F7B8A7"/>
            <stop offset="1" stopColor="#946051"/>
            </linearGradient>
            <clipPath id="clip45">
            <rect width="32" height="32" fill="white" transform="matrix(0 -1 -1 0 32 32)"/>
            </clipPath>
            </defs>
            </svg>
            </button>
            <button className="swiper-button-next services__arrow services__arrow_right"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip46)">
            <path d="M7.85534 0.203484C7.58403 0.474794 7.58403 0.915869 7.85534 1.18718L22.6689 15.9993L7.85677 30.8128C7.58546 31.0841 7.58546 31.5252 7.85677 31.7965C8.12808 32.0678 8.56916 32.0678 8.84047 31.7965L24.1452 16.4918C24.2801 16.3554 24.3483 16.1774 24.3483 15.9993C24.3483 15.8212 24.2802 15.6431 24.1438 15.5081L8.8391 0.203419C8.56772 -0.0678253 8.12665 -0.0678253 7.85534 0.203484Z" fill="url(#paint46_linear)"/>
            </g>
            <defs>
            <linearGradient id="paint46_linear" x1="16.002" y1="32" x2="16.002" y2="0.00394391" gradientUnits="userSpaceOnUse">
            <stop stopColor="#924D3D"/>
            <stop offset="0.0448" stopColor="#9F5D4B"/>
            <stop offset="0.0995" stopColor="#B47363"/>
            <stop offset="0.1573" stopColor="#C68877"/>
            <stop offset="0.2749" stopColor="#F2BBA8"/>
            <stop offset="0.2985" stopColor="#F9C4B3"/>
            <stop offset="0.5025" stopColor="#F7B8A7"/>
            <stop offset="1" stopColor="#946051"/>
            </linearGradient>
            <clipPath id="clip46">
            <rect width="32" height="32" fill="white" transform="translate(0 32) rotate(-90)"/>
            </clipPath>
            </defs>
            </svg></button>
          </Swiper>

        </div>
    </section>
    </React.Fragment>

  )
}

export default Services
