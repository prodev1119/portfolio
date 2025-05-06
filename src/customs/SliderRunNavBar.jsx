import Marquee from "react-fast-marquee";
// import RunGif from "../assets/back-to-school-14869.gif";

const SliderRunNavBar = () => {
    return (
        <div className="h-2 md:h-14 md:mt-1 mt-5 w-full flex items-center justify-center">
            <Marquee pauseOnHover className="flex items-center">
                <div className="flex items-center">
                    {/* <img src={RunGif} alt="Running Animation" className="h-24 w-auto" /> */}
                </div>
            </Marquee>
        </div>
    );
};

export default SliderRunNavBar;
