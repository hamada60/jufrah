import React, { Component } from "react";
import Slider from "react-slick";

import { BsShare, BsArrowClockwise, BsHeartFill } from 'react-icons/bs';
import { MdAccessTimeFilled, MdLocationPin, MdShoppingCart } from 'react-icons/md';
import Image from "next/image";

import tablet from '../public/image/tablet.jpg';
import tvscreen from '../public/image/tvscreen.jpg';
import camera from '../public/image/camera.jpg';
import headphone from '../public/image/headphone.jpg';

import style from './../styles/Products.module.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
  }

export default class Responsive extends Component {
  render() {
    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container mx-auto px-2 z-0">
        <div className="p-0 ">
            <div className="text-red-700 text-lg font-bold py-3">
                <h3 >الإعـلانـات الـممـيـزة :</h3>
            </div>
            <Slider {...settings} className={style.slickSlide} >
                <div className={`rounded-lg ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={tablet} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={tablet} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={camera} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg  ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={headphone} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg  ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={tablet} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg  ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={tablet} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={camera} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
                <div className={`rounded-lg  ${style.shadow}`} lang="ar-EG" dir="rtl">
                    <div className="flex justify-between items-center">
                        <p className="rounded-tr-lg rounded-bl-lg  px-4 py-1 text-2xl text-white bg-red-700">ممــيز</p>
                        <p><BsHeartFill className="text-2xl mx-2 text-red-700" /></p>
                    </div>
                    <div className="py-2 flex justify-center">
                        <Image src={headphone} width={180} height={140} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-red-700 mx-2 text-xl my-3">لينوفو p8 تاب بلس TB</h5>
                        <p className="flex flex-row items-center p-2 m-0"><MdLocationPin className="text-red-700 text-xl" /> رياض السعودية</p>
                        <p className="flex flex-row items-center  p-2 m-0"><MdShoppingCart className="text-red-700 text-xl" /> متاحة للبيع</p>
                        <p className="flex flex-row items-center p-2 m-0"><MdAccessTimeFilled className="text-red-700 text-xl" />  06/09/2021 05:23 PM</p>
                        <div className="m-0 border-t-2" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                            <p  className="my-2 mx-0">329.99 مصـري</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      </div>
    );
  }
}