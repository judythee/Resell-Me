import 'swiper/css'
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperNavButtons from './SwiperNavButtons'

const Testimonials = ({testimony}) => {
  return (
    <section className='testimonials'>
        <div className="heading">
            <h2 className="sm">{testimony.title}</h2>
            <p>{testimony.text}</p>
        </div>
        <Swiper 
        className="wrapper"
        spaceBetween={30}
        slidesPerView='auto'>
            {testimony.cards && testimony.cards.map(card => {
                return(
                    <SwiperSlide className='card'>
                        <div className="img">
                            <img src={card.image} alt="testimony_img" />
                            {/* <card.quotes className="quotes" /> */}
                        </div>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <h4>{card.text1}</h4>
                            <p>{card.text}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
            <SwiperNavButtons className="navLink"/>
        </Swiper>
    </section>
  )
}

export default Testimonials