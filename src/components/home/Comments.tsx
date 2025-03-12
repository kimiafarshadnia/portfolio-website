"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CommentModal } from "Components";

const comments = [
  {
    id: "1",
    name: "Ali Rezaei",
    role: "Senior Developer",
    comment:
      "Kimia is a fantastic front-end developer with great attention to detail.",
  },
  {
    id: "2",
    name: "Sara Ahmadi",
    role: "UI/UX Designer",
    comment:
      "Working with Kimia was an absolute pleasure! Highly recommend her skills.",
  },
  {
    id: "3",
    name: "Mohammad Hosseini",
    role: "Student",
    comment:
      "I learned a lot from Kimia! She explains complex topics in an easy way.",
  },
  {
    id: "4",
    name: "Narges Tavakoli",
    role: "Project Manager",
    comment:
      "Kimia is very professional and delivers high-quality code on time.Kimia is very professional and delivers high-quality code on time.",
  },
];

export const Comments = () => {
  const t = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission from modal
  const handleNewComment = (newComment: {
    name: string;
    role: string;
    comment: string;
  }) => {
    console.log(newComment); // Here you can handle saving the data (e.g., save it in a JSON file or send it to an API)
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col gap-6">
        <h2 className="w-fit bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize pb-2">
          {t("comments.title")}
        </h2>
        <p className="text-primary font-normal md:w-[600px] ">
          {t("comments.description")}
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="w-full my-5"
        >
          {comments.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col w-full gap-5 p-6 rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] rounded-tl-lg text-center border dark:border-gray-700 h-[250px] relative">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Image
                      src="/images/user.png"
                      alt="user"
                      className="h-full w-full object-cover rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-base text-left text-gray-700 dark:text-gray-400">
                  {item.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={openModal}
          className="w-fit bg-lavender text-white font-medium capitalize px-4 py-1 rounded-lg"
        >
          {t("button.add-comment")}
        </button>
      </div>

      <CommentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleNewComment}
      />
    </div>
  );
};
