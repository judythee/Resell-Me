import 'swiper/css'
import { Swiper,SwiperSlide } from "swiper/react"
import img1 from "../assets/images/tech-zim-icon.webp"
import img2 from "../assets/images/techno-mag-icon.webp"
import img3 from "../assets/images/econet-logo.webp"
import img4 from "../assets/images/netOne-logo.webp"
// import img4 from "../assets/images/netone_100634.webp"
import img5 from "../assets/images/cassava-logo.webp"
import img6 from "../assets/images/red-blue-yellow-green-logo.webp"
import img7 from "../assets/images/eight2five-logo.webp"
import img8 from "../assets/images/263chat-logo.webp"
import SwiperNavButtons from './SwiperNavButtons';


const PartnerCarousel = () => {
    const images = [img1,img2,img3,img4,img5,img6,img7,img8]
  return (
    <Swiper 
    className='wrapper part-carousel'
    slidesPerView='auto'
    spaceBetween={30}
    >
        {images && images.map(image => {
            return(
                <SwiperSlide className="card">
                    <img src={image} alt="partner_logo" />
                </SwiperSlide>
            )
        })}
        <SwiperNavButtons/>
    </Swiper>
  )
}

export default PartnerCarousel