"use client";
import { Data } from "Types";
import { useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CardProject, SkeletonCard } from "Components";
import "swiper/css";
import "swiper/css/navigation";
import projectsData from "@/projects/projects.json";

export const Projects = () => {
  const t = useTranslations();
  const [data, setData] = useState<Data[]>(projectsData);
  const [isLoading, setIsLoading] = useState(false);

  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-5 relative" id="projects">
      <div className="flex flex-col justify-center gap-8">
        <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl pb-2 w-fit">
          {t("project.title")}
        </h2>
        <p className="text-primary font-normal md:w-[600px] dark:text-white">
          {t("project.description")}
        </p>
        <div className="relative w-full">
          <button
            ref={prevRef}
            className="absolute top-1/2 left-[-40px] z-10 transform -translate-y-1/2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ◀
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 right-[-40px] z-10 transform -translate-y-1/2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ▶
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              if (prevRef.current && nextRef.current) {
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            touchEventsTarget="container"
            simulateTouch={true}
            className="w-full"
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <SkeletonCard />
                  </SwiperSlide>
                ))
              : data.map((repo: Data) => (
                  <SwiperSlide key={repo.id} className="flex justify-center">
                    <CardProject project={repo} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
