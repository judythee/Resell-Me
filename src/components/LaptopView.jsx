import { Link } from 'react-router-dom';
import PC from '../assets/images/laptop.webp';
import { ReactComponent as YouTube } from "../assets/images/youtube-icon.svg"

const LaptopView = () => {
    return (
        <div className='laptop-img'>
            <img src={PC} alt="" />
            <div className="overlay">
              {/* <Link to="https://www.youtube.com/" target="_blank"><YouTube className="youtube" /></Link> */}
            </div>
        </div>
    );
};

export default LaptopView;