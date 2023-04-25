import { FaPython, FaReact, FaAws, FaFigma, FaDatabase } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiAdobe, SiAdobeaftereffects, SiOpenai } from "react-icons/si";
import Slider from "react-slick";
import { Container } from "../../styeles/container/style";

const HabilityList = ({counticons}) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: counticons,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
    };

    return (
        <Container pad="200px 0px 0px 0px" overflow="hidden" width="100%" data-aos="fade-up" data-aos-delay="1000" data-aos-duration='2000' >   
            <div>
                <Slider {...settings}>
                    <div>
                        <RiFlutterFill size={70} />
                    </div>
                    <div>
                        <FaReact size={70} />
                    </div>
                    <div>
                        <FaAws size={70} />
                    </div>
                    <div>
                        <SiAdobe size={70} />
                    </div>
                    <div>
                        <FaPython size={70} />
                    </div>
                    <div>
                        <SiOpenai size={70} />
                    </div>
                    <div>
                        <FaFigma size={70} />
                    </div>
                    <div>
                        <SiAdobeaftereffects size={70} />
                    </div>
                    <div>
                        <SiRedux size={70} />
                    </div>
                    <div>
                        <SiStyledcomponents size={70} />
                    </div>
                    <div>
                        <FaDatabase size={70} />
                    </div>
                    <div>
                        <SiTypescript size={70} />
                    </div>
                </Slider>
            </div>

        </Container>
    );

}

export default HabilityList;