import axios from "axios";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from "react";

const TopWriters = () => {
    const [writers, setWriters] = useState([]);
 
    console.log(writers)

    useEffect(() => {
        const writerData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/v1/user');
                console.log(res)
                if (res.data.status === "success") {
                    setWriters(res.data.data);
                }

            } catch (error) {
                console.log(error)
            }
        }
     writerData();
 }, [])
    return (
        <div className="mt-[3rem] px-[4rem]">
            <h2 className="font-semibold text-4xl text-center mb-6">Our Top Writers</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="w-[80vw] "

            >
                {writers.slice(0,4).map((writer, index) => (
                    <SwiperSlide key={index} className='text-center bg-[#fefefe] py-16 rounded-lg shadow-xl border-[3px] border-[#ddd]]'>
                        <div className="avatar">
                            <div className="w-32 rounded-full border-[#ddd]">
                                <img src={writer.profileImg} />
                            </div>
                        </div>
                        <h2 className='text-center text-2xl capitalize'>{writer.name}</h2>
                        <p className="font-mulish text-3xl mt-2">Total Blogs: {writer.writtenBlogs.length}</p>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default TopWriters;