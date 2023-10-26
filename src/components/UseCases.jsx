import Button from "./Button"
import 'swiper/css';
// import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperNavButtons from "./SwiperNavButtons";


const UseCases = ({usecase}) => {
  return (
    <section className="usecases">
      <h2 className="sm">{usecase.title}</h2>
      <Swiper 
      className="wrapper"
      // modules={[Navigation]}
      spaceBetween={30}
      slidesPerView='auto'>
        {usecase.cards && usecase.cards.map(card => {
          return(
            <SwiperSlide className="card">
              <div className="icon">
                <card.icon className="case-icon" />
              </div>
              <div className="textBox">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              <Button title="read more" />
            </SwiperSlide>
          )
        })}
        <SwiperNavButtons/>
      </Swiper>
    </section>
  )
}

export default UseCases