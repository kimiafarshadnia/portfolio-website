"use client";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const t = useTranslations();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });

    tl.fromTo(
      imgRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1 },
      "-=0.8"
    );

    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "power1.inOut",
      });
    }

    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1 },
      "-=0.5"
    );

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }

    if (buttonsRef.current) {
      const buttons =
        buttonsRef.current.querySelectorAll<HTMLButtonElement>("button");
      buttons.forEach((btn) => {
        const btnAnimation = gsap.to(btn, {
          rotate: 3,
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out",
          paused: true,
        });

        btn.addEventListener("mouseenter", () => btnAnimation.play());
        btn.addEventListener("mouseleave", () => btnAnimation.reverse());
      });
    }

    return () => {
      if (buttonsRef.current) {
        const buttons =
          buttonsRef.current.querySelectorAll<HTMLButtonElement>("button");
        buttons.forEach((btn) => {
          btn.removeEventListener("mouseenter", () => {});
          btn.removeEventListener("mouseleave", () => {});
        });
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="container mx-auto px-5 flex justify-center">
      <div
        ref={glowRef}
        className="hidden sm:flex w-full absolute justify-center items-center top-[20rem]"
      >
        <div className="w-[300px] h-[300px] rounded-full bg-lavender opacity-50 blur-2xl relative animation2"></div>
      </div>

      <div className="w-full flex flex-col xl:flex-row-reverse gap-12 items-center justify-center xl:justify-between text-center xl:text-start z-10">
        <div className="flex items-center justify-center w-[250px] h-[250px] xl:w-[500px] xl:h-[500px] flex-shrink-0">
          <img
            ref={imgRef}
            src="/images/developer.png"
            alt="developer"
            className="rounded-full xl:rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center xl:items-baseline gap-10">
          <h1 className="w-full sm:w-3/4 pb-6 text-center xl:text-left text-5xl sm:text-6xl 2xl:text-7xl font-bold bg-lavender bg-clip-text text-transparent capitalize">
            {t("hero.title")}
          </h1>

          <div className="xl:w-[500px] h-[100px] text-primary xl:text-lg font-normal dark:text-white">
            <Typewriter
              options={{
                strings: [t("hero.description")],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 0,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(t("hero.description"))
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center xl:justify-normal xl:items-start gap-6"
          >
            <button className="w-fit xl:w-[223px] text-xs sm:text-sm xl:text-base bg-black dark:bg-white hover:bg-gray-900 hover:dark:bg-gray-200 rounded-s-full rounded-e-full dark:text-black text-white font-semibold py-2 xl:py-3 px-6 transition-all duration-500">
              {t("button.getintouch")}
            </button>
            <button className="w-fit xl:w-[223px] text-xs sm:text-sm xl:text-base rounded-s-full rounded-e-full border border-secondary dark:border-white font-semibold py-2 xl:py-3 px-6 transition-all duration-500 bg-[#FFFFFF1A] hover:bg-[#FFFFFF4D]">
              {t("button.download")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
