import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

import HGF from '../assets/HGF.png';
import PT from '../assets/PT.png';
import TF from '../assets/TF.png';
import NVD from '../assets/NVD.png';
import OPA from '../assets/OPA.png';
import LC from '../assets/LC.png';
import LLM from '../assets/LLM.png';
import { FaGithub } from "react-icons/fa";

const logos = [
    { src: HGF, alt: "HGF Logo" },
    { src: TF, alt: "TF Logo" },
    { src: PT, alt: "PT Logo" },
    { src: NVD, alt: "NVD Logo" },
    { src: OPA, alt: "OPA CSS Logo" },
    { src: LC, alt: "LC Logo" },
    { src: LLM, alt: "LLM Logo" },
    {icon: FaGithub, alt: "Github Logo" },
];

// Nhân đôi danh sách để tạo hiệu ứng chạy liên tục hơn
const duplicatedLogos = [...logos, ...logos, ...logos];

const SliderLogo = () => {
    return (
        <div className="h-8 w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={"auto"}
                spaceBetween={20}
                loop={true}
                loopedSlides={duplicatedLogos.length}
                autoplay={{ delay: 1, disableOnInteraction: false }}
                speed={6000}
                freeMode={true}
            >
                {duplicatedLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                        {logo.src ? (
                            <img className="h-8 w-auto bg-white rounded-lg" src={logo.src} alt={logo.alt} />
                        ) : logo.icon ? (
                            <logo.icon className="h-8 w-8 text-white" />
                        ) : null}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderLogo;
