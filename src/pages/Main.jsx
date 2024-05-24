import { useState } from 'react'
import Button from '@mui/material/Button';
import Logo from '../images/logo.png';
import Med from '../images/image1.png';
import Med2 from '../images/image2.png';
import Med3 from '../images/image3.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useNavigate} from "react-router-dom";
import './Main.css'

const responsive = {
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1
    }
};
function Main() {

    const [time, setTime] = useState(false)
    const navigate = useNavigate()

    function timeoutFunction() {
        setTime(true)
    }

    setTimeout(timeoutFunction, 2000);
    if (!time){
        return (
            <img src={Logo} alt="Logo" className="logo"/>
        )
    } else {
        return (
            <div className="parent">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    <div className="slider">
                        <img src={Med} alt=""/>
                    </div>
                    <div className="slider">
                        <img src={Med2} alt=""/>
                    </div>
                    <div className="slider">
                        <img src={Med3} alt=""/>
                    </div>

                </Carousel>
                <div>
                    <h3>Прием лекарств вовремя</h3>
                </div>
                <div>
                    <h5>
                        Принимайте лекарство согласно вашему плану
                    </h5>
                </div>
                <div className="but">
                    {/*<Button variant="contained">Продолжить</Button>*/}
                    <button type='submit' onClick={() => navigate('/register')} className="submitButton">Продолжить</button>
                    {/*<Button variant="contained" onClick={() => navigate('/register')}>Пропустить</Button>*/}
                </div>
            </div>
        )

    }
}

export default Main
