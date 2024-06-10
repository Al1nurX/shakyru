"use client";
import Image from "next/image";
import Main from "../components/Main";
import bgElement from "../../public/images/bg-element-2.webp";
import Attendance from "../components/Attendance";
import Date from "../components/Date";
import insta from "../../public/images/insta.png";
import gis from "../../public/images/gis.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Calendar from "@/components/Calendar";
import Map from "@/components/Map";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="flex flex-col text-center ">
            <Main />
            <Image src="" alt="" />
            <div
                className="mt-[-150px] text-center text-xl text-green-800 font-sans font-extralight"
                data-aos="fade-up"
            >
                тойына арналған ақ <br /> дастарханымыздың қадірлі <br /> қонағы
                болуға шақырамыз!
            </div>
            {/* <div className="bg-[url('/images/bg-element-2.webp')] bg-cover bg-no-repeat bg-center h-[50px] w-full">dfs</div> */}
            <Image src="/images/bg-element-2.webp" className="w-full h-min mt-[-370px] rotate-12" alt="des" width={500} height={100} />
            <div
                className="mt-[-50px] text-xl text-center text-green-800 font-sans font-extralight"
                data-aos="fade-up"
            >
                <p>Той салтанаты:</p>
                <p>2 тамыз 2024 жыл</p>
                <p>Сағат 16:00 басталады</p>
            </div>
            <Image src="/images/calendar.png" alt="calendar" className="w-[90%] mx-auto h-auto" width={200} height={200} />
            <div
                className="mt-[-50px] text-3xl leading-relaxed font"
                data-aos="fade-up"
            >
                <h2>Той иелері:</h2>
                <h2 className="color">Амангелді - Құралай</h2>
            </div>

            <p className="mt-[50px] text-2xl">Тойға дейін:</p>
            <Date />

            <div
                className="mt-10 text-4xl leading-relaxed font"
                data-aos="fade-up"
            >
                <p>Мекен-жайымыз:</p>
                <p className="color">Теміртау қаласы</p>
                <p>9-й Микрорайон,98a</p>
                <p className="color">Тойбастар</p>
                <p>Мейрамханасы</p>
            </div>

            <div className="flex justify-center gap-10">
                <a href="https://www.instagram.com/toibastar_restoran_temirtau/">
                    <Image
                        className="mt-5 mb-10"
                        height={50}
                        width={50}
                        src={insta}
                        alt="Instagram"
                    />
                </a>
                <a href="https://2gis.kz/karaganda/firm/70000001056305233">
                    <Image
                        className="mt-5 mb-10 gis"
                        height={50}
                        width={50}
                        src={gis}
                        alt="GIS"
                    />
                </a>
            </div>
            <Map />

            {/* <ToiBagdarlamasi /> */}
            <Attendance />

            <h2 className="mt-5  text-3xl color font">Байбосыновтар әулеті </h2>
            <p className="text-2xl leading-relaxed mb-10 color font">
                сіздерді күтеді!
            </p>
        </div>
    );
}
