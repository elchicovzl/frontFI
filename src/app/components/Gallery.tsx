'use client'

import Image from "next/image";

import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper';
import 'photoswipe/style.css';

import LightGallery from 'lightgallery';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import Swiper styles
import 'swiper/css';

interface GalleryProps {
    images: Array<string>
}

const Gallery: React.FC<GalleryProps>  = ({
    images
}) => {
    
    let [swiper, setSwiper] = useState(null);

    useEffect(() => {
        let $lgSwiper = document.getElementById("lg-swipper");
        let swiper = new Swiper(".swiper", {
            slidesPerView:3,
            spaceBetween:50,
            // other parameters
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                init: function () {
                    console.log("iniciando...")
                    const lg = LightGallery($lgSwiper, {
                    speed: 300
                    });
                    $lgSwiper.addEventListener("lgBeforeClose", () => {
                    swiper.slideTo(lg.index, 0);
                    });
                }
            }
        });
      }, []);

    return (
        <div className="swiper">
            <div className="swiper-wrapper" id="lg-swipper">
                <a data-lg-size="1600-1144" className="swiper-slide" data-src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
                    <img className="img-responsive" src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80" />
                </a>
                <a data-lg-size="1600-1067" className="swiper-slide" data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
                    <img className="img-responsive" src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80" />
                </a>
                <a data-lg-size="1600-1067" className="swiper-slide" data-src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80">
                    <img className="img-responsive" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80" />
                </a>
            </div>
        </div>
    );
}
 
export default Gallery;