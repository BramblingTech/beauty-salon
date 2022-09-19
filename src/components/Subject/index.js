import React from 'react'
import './style.sass'

function Subject() {
  return (
    <React.Fragment>
    <div id='about' style={{opacity:0, height: 0}}></div>
    <section className='subject panel'>
      <div className="container subject__container">
                <h2 className='subject__title fade-up'>О нас</h2>
                <p className='subject__text fade-up'>Добро пожаловать в Т&Т Beauty Salon, в команду талантливых и увлеченных своей работой профессионалов. Мы всегда готовы превзойти ваши ожидания.</p>
                <p className='subject__text fade-up'>Наши специалисты используют только качественную косметику и новейшие технологии для создания эстетики тела и поддержания Вашей природной красоты. Мы предлагаем широкий спектр услуг и сервисов на любой вкус.</p>
      </div>
    </section>
    </React.Fragment>
  )
}

export default Subject
