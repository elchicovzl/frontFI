'use client'

import Image from "next/image";

import React, { useEffect, useState, useRef } from 'react';
import { Swiper } from 'swiper';
import 'photoswipe/style.css';

import LightGallery from 'lightgallery';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface GalleryProps {
    images: Array<string>
}

const Gallery: React.FC<GalleryProps>  = ({
    images
}) => {
    
    const swiperRef = useRef();

    useEffect(() => {
        let $lgSwiper = document.getElementById("lg-swipper");
        let swiper = new Swiper(".swiper", {
            slidesPerView:1,
            breakpoints: {
                720: {
                    slidesPerView: 3,
                    spaceBetween: 50, 
                },
            },
            spaceBetween:50,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                beforeInit: function (swiper) {
                    swiperRef.current = swiper;
                },
                init: function () {
                    const lg = LightGallery($lgSwiper, {
                    speed: 300
                    });
                    $lgSwiper.addEventListener("lgBeforeClose", () => {
                        swiper.slideTo(lg.index, 0);
                    });
                }
            }
        });
      }, [swiperRef]);

    return (
        <div className="swiper">
            <button className="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}></button>
            <div className="swiper-wrapper !h-[250px]  sm:!h-[350px]" id="lg-swipper">
                {images.map((image: any, index: number) => (
                    <a key={index} data-lg-size="1600-1067" className="swiper-slide cursor-pointer" data-src={image}>
                        <Image  className="img-responsive h-full w-full rounded-lg object-cover object-center" width="400" height="400" alt={'image'+index} src={image} />
                    </a>
                ))}
                </div>
            <button className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></button>
            </div>
    );
}
 
export default Gallery;