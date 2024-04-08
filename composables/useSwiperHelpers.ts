export const useSwiperHelpers = () => {
  const enclosuresBreakpoints = {
    320: {
      coverflowEffect: {
        stretch: 40,
      },
    },
    640: {
      slidesPerView: 1.5,
      coverflowEffect: {
        stretch: 20,
      },
    },
    1024: {
      slidesPerView: 1.5,
      coverflowEffect: {
        stretch: -20,
      },
    },
    1280: {
      slidesPerView: 1.5,
      coverflowEffect: {
        stretch: -30,
      },
    },
    2560: {
      slidesPerView: 2,
      coverflowEffect: {
        stretch: -20,
      },
    },
  };

  const noticesBreakpoints = {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  const slidePrev = (swiperRef: any) => swiperRef.$el.swiper.slidePrev();

  const slideNext = (swiperRef: any) => swiperRef.$el.swiper.slideNext();

  return { enclosuresBreakpoints, noticesBreakpoints, slidePrev, slideNext };
};
