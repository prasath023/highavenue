// import Swiper core and required modules
import { Pagination } from 'swiper';
import unity from "../assets/unity.webp"
import unreal from "../assets/unreal.webp"
import vuforia from "../assets/vuforia.webp"
import Firebaselogo from "../assets/Firebaselogo.webp"
import ios from "../assets/ios.webp"
import godot from "../assets/godot.webp"
import cocos from "../assets/cocos.webp"
import ARKit from "../assets/ARKit.webp"
import ARCore from "../assets/ARCore.webp"
import Android from "../assets/Android.webp"
import "../css/swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="h-full w-screen lg:w-3/4"
    >
      <SwiperSlide className='flex justify-center w-full items-center lg:h-80'>
        <ul className='flex container px-5 items-center flex-wrap justify-center'>
        <li className='top md:mb-16 lg:mr-10 md:mr-12 mb-7 mr-1 lg:mb-24'>
          <img className="md:h-9 h-8 lg:h-12" src={unity} />
        </li>
        <li className='top md:mb-16 lg:mr-12 md:mr-12 mb-7 mr-2 lg:mb-24'>
          <img className="md:h-20 h-14 lg:h-24" src={unreal} />
        </li>
        <li className='top md:mb-16 lg:mr-16 md:mr-12 mb-7 mr-5 lg:mb-24'>
          <img className="md:h-14 h-12 lg:h-20" src={cocos} />
        </li>
        <li className='top md:mb-16 lg:mr-10 md:mr-12 mb-7 lg:mb-24'>
          <img className="md:h-12 h-9 lg:h-16" src={godot} />
        </li>
        <li className='md:mb-16 lg:mb-24 mr-5 md:mr-0 mb-7'>
          <img className="md:h-12 h-10 lg:h-16" src={Firebaselogo} />
        </li>
        <li className=' bottom lg:mr-4 md:mr-5 mr-5 mb-7 md:mb-0'>
          <img className="md:h-16 h-11 lg:h-20" src={Android} />
        </li>
        <li className=' bottom lg:mr-4 md:mr-5 mb-7 md:mb-0'>
          <img className="md:h-14 h-8 lg:h-16" src={ios} />
        </li>
        <li className=' bottom lg:mr-8 md:mr-5 mr-5 '>
          <img className="md:h-9 h-6 lg:h-12" src={ARCore} />
        </li>
        <li className=' bottom flex justify-center items-center mr-3 md:mr-5 lg:mr-4 '>
          <img className="md:h-10 h-8 lg:h-14" src={ARKit} />
          <h1 className='lg:text-3xl text-lg ml-1 opacity-70'>ARKit</h1>
        </li>
        <li className=''>
          <img className="md:h-14 h-11 lg:h-20" src={vuforia} />
        </li>

        </ul>
        </SwiperSlide>
    
    </Swiper>
  );
};
