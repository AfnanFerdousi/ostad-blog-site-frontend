import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    const images = [
        {
            img: "https://marketplace.canva.com/EAEcPz5qotw/3/0/1600w/canva-blog-banner-for-website-content-MqPNJu3HBz8.jpg"
        },
        {
            img: "https://marketplace.canva.com/EAFHNkHvFsA/1/0/1600w/canva-grey-minimalist-tips-blog-banner-yR0ULIwVxyE.jpg"
        },
        {
            img: "https://marketplace.canva.com/EAEcPz5qotw/3/0/1600w/canva-blog-banner-for-website-content-MqPNJu3HBz8.jpg"
        }
    ]
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={true} 
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.img} className="w-[100vw] h-[80vh]" alt="" />
                    </SwiperSlide>
                ))}

            </Swiper>
            
        </div>
    );
};

export default Banner;