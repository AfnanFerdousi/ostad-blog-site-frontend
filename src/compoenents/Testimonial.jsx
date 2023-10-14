import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
    const data = [
        {
            name: "Afnan Ferdousi",
            profileImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas! orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas!"
        },
        {
            name: "John Doe",
            profileImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas! orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas!"
        },
        {
            name: "APG Abul Kalam",
            profileImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas! orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas!"
        },
        {
            name: "Tom Holland",
            profileImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas! orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas!"
        }
    ]
    return (
        <div className="mt-[3rem] px-[4rem]">
            <h2 className="font-semibold text-4xl text-center mb-6">What Our Readers Say</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                {data.map((image, index) => (
                    <SwiperSlide key={index} className='text-center bg-[#fefefe] py-16 rounded-lg shadow-xl'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={image.profileImg} />
                            </div>
                        </div>
                        <h2 className='text-center text-xl'>{image.name}</h2>
                        <p className="font-mulish text-md mt-2">{image.comment}</p>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Testimonial;