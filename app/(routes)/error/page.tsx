"use client"

import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { dataTestimonials } from "@/data";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ErrorPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex flex-col justify-center h-lvh">
                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text4xl md:mb-5">
                    Se está trabajando
                    <span className="block font-bold text-secondary">
                        en este repo :(.
                    </span>
                </h1>
            </div>
        </>
    );
}

export default ErrorPage;