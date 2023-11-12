// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const MySwiper = ({ slidesData }) => {
    return (
        <div className="flex flex-wrap sm:gap-4">
            <Swiper modules={[Pagination]} spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="w-full md:w-3/4 max-w-md m-auto swiper mySwiper">
                <div className="swiper-wrapper">
                    {slidesData?.map((item) => {
                        const { srcPath, altDes } = item;
                        return (
                            <SwiperSlide className="h-5/6" key={item.srcPath} >
                                <img
                                    className=" h-fit"
                                    src={srcPath}
                                    alt={altDes}
                                />
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </div>
    );
};
