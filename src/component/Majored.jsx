import ReactConfetti from "react-confetti";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Countdown from "react-countdown";
import CountdownEl from "./element/CountdownEl";
const Majored = () => {
  const { nama } = useParams();
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const titleref = useRef(null);
  const undanganRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleref.current, {
      strings: [nama],
      typeSpeed: 200,
      loop: true,
      backSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const handleUndangan = () => {
    undanganRef.current.scrollIntoView({ behavior: "smooth" });
  };
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 200,
    delay: 300,
    duration: 1000,
    easing: "ease",
    once: false,
    anchorPlacement: "top-bottom",
  });
  const timer = () => {
    const dateUltah = new Date("July 17 , 2024 14:20:00").getTime();
    const now = new Date().getTime();
    const remainingDate = dateUltah - now;
    return remainingDate;
  };
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div data-aos="flip-up" className="flex justify-evenly gap-4">
          <CountdownEl title={days} quote={"hari"} />
          <CountdownEl title={hours} quote={"jam"} />
          <CountdownEl title={minutes} quote={"menit"} />
          <CountdownEl title={seconds} quote={"detik"} />
        </div>
      );
    }
  };
  return (
    <>
      <ReactConfetti></ReactConfetti>
      <div className="bgMajored w-full h-screen flex flex-col items-center p-1">
        <h1 className=" font-xl mt-16 uppercase font-sans text-slate-800">
          kami mengundang saudara
        </h1>
        <h1
          ref={titleref}
          className=" font-primary capitalize font-semibold h-10 mt-4 text-2xl"
        ></h1>
        <p className="mt-10 mb-1 text-center">
          untuk pelaksaanaan acara ulang tahun putra kecil kami :{" "}
        </p>
        <div className="w-64 h-64 bg-white rounded-full"></div>
        <h1 className="text-4xl font-secondary capitalize text-center w-[95%] leading-relaxed font-semibold text-slate-900">
          Ananda Usam Muhajir
        </h1>
        <button
          onClick={handleUndangan}
          className="shadow mt-10 bg-gray-200 text-primary hover:bg-primary focus:shadow-outline focus:outline-none font-bold py-2 px-4 mb-10 rounded hover:text-white transition-all duration-150"
        >
          Buka Undangan
        </button>
      </div>
      <div ref={undanganRef} className="w-full min-h-screen p-2 bg-gray-100">
        <p
          data-aos="fade-up"
          className="text-center mt-10 font-mono tracking-wide text-slate-900"
        >
          Alhamdulillah Puji Syukur Kehadirat Allah SWT atas Rahmatnya, kami
          dapat melaksanakan acara ulang tahun putra kami
        </p>
        <h1
          data-aos="fade-bottom"
          className="text-4xl font-secondary capitalize text-center w-[95%] leading-relaxed text-primary "
        >
          ananda Usam muhajir
        </h1>
        <p
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-center mt-5 font-mono tracking-wide text-slate-900"
        >
          yang diselenggarakan pada 17 juli 2024
        </p>
        <p
          data-aos="flip-right"
          className="text-center mt-3 font-mono tracking-wide text-slate-900"
        >
          pukul 14:20 - selesai
        </p>
        <div className="w-full flex justify-center mt-10">
          <Countdown
            date={Date.now() + timer()}
            renderer={renderer}
            className="text-2xl"
          />
        </div>
        <p
          data-aos="flip-left"
          className="text-center mt-10 font-mono tracking-wide text-slate-900"
        >
          di kediaman kami JLN Sedap Malam RT 01 RW 09 TUREN MALANG
        </p>
        <div className="flex justify-center w-full mt-5">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.589329214565!2d112.61662247412835!3d-8.243983582794009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a756844f736f%3A0xee8e378530c977fc!2sSMK%20Negeri%201%20Gedangan!5e0!3m2!1sid!2sid!4v1720751715808!5m2!1sid!2sid"
            loading="lazy"
            style={{ border: "1px solid black" }}
            className="w-full h-40 p-1"
            referrerpolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          ></iframe>
        </div>
        <p
          // data-aos="flip-right"
          className="text-center mt-10 font-mono tracking-wide text-slate-900"
        >
          tiada kata terindah selain Doa , semoga putra kami menjadi anak yang
          sholeh , berbakti kepada orang tua , berguna bagi Agama dan Negara ,
          aamiin
        </p>
      </div>
      <div className="bgFooter p-2">
        <h1 className="font-secondary text-black text-center text-4xl mt-10">
          konfirmasi kehadiran
        </h1>
        <p className="font-mono text-black text-center text-sm ">
          isi form dibawah ini untuk konfirmasi kehadiran
        </p>
        <form className="w-full max-w-sm mt-10">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-slate-700 font-bold md:text-right mb-1 md:mb-0 pr-4 font-primary"
                for="inline-full-name"
              >
                Nama :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-100 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="inline-full-name"
                type="text"
                placeholder="masukkan nama"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-slate-700 font-bold md:text-right mb-1 md:mb-0 pr-4 font-primary"
                for="inline-password"
              >
                Konfirmasi :
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                className="bg-gray-100 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="inline-password"
              >
                <option value="">hadir</option>
                <option value="">tidak hadir</option>
              </select>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 flex justify-center">
              <button
                className="shadow bg-gray-200 text-primary hover:bg-primary focus:shadow-outline focus:outline-none font-bold py-2 px-4 mb-10 rounded hover:text-white transition-all duration-150"
                type="button"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Majored;
