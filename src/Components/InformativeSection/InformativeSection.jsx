import React from 'react'
import ICONS from '../Icons/Icons.jsx'
import './InformativeSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'


const bullets = [
  {
    id:1,
    icon: 'handheart',
    title: '100% a mano',
    description: 'Están hechos con una historia, personalidad y mucho amor.'
  },
  {
    id:2,
    icon: 'cat',
    title: 'Para tener cerca',
    description: 'En el escritorio, en la mesa de luz, en la mochila o en tu bolsillo.'
  },
  {
    id:3,
    icon: 'gift',
    title: 'Regalá con intención',
    description: 'Son únicos, como la persona a quien elegis regalarselo.'
  }
]

const InformativeBullet = ({ title, description, icon }) => (
  <div className="informative-bullet">
    <span className="icon informative-icon">{ICONS[icon] ? React.createElement(ICONS[icon]) : <span>?</span>}</span>
    <div className="informative-bullet-title h4">{title}</div>
    <div className="informative-bullet-description">{description}</div>
  </div>
)

const InformativeSection = () => (
  <div className="informative-section-bg">
    <h2 className="section-title pt-4">Cada punto importa</h2>
    <div className="informative-section-content pb-3">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          769: { slidesPerView: 3, spaceBetween: 40 }
        }}
        loop={true}
      >
        {bullets.map(bullet => (
          <SwiperSlide key={bullet.id}>
            <InformativeBullet
              title={bullet.title}
              description={bullet.description}
              icon={bullet.icon} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

export default InformativeSection