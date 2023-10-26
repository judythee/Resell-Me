import { ReactComponent as Right } from "../assets/images/right-arrow.svg";
import { ReactComponent as Left } from "../assets/images/left-arrow.svg";
import {useSwiper} from 'swiper/react'

const SwiperNavButtons = () => {
    const swiper = useSwiper();
  return (
    <div className="swiperNav">
        <Left className="left" onClick={() => swiper.slidePrev()}/>
        <Right className="right" onClick={() => swiper.slideNext()}/>
    </div>
  )
}

export default SwiperNavButtons