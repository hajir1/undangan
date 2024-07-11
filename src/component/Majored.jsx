import ReactConfetti from "react-confetti";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Typed from "typed.js";
const Majored = () => {
  const { nama } = useParams();
  const titleref = useRef(null);
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
        <p className="mt-10 mb-5 text-center">
          untuk pelaksaanaan acara ulang tahun putra kecil kami :{" "}
        </p>
        <div className="w-64 h-64 bg-white rounded-full"></div>
        <h1 className="text-4xl font-secondary capitalize text-center w-[95%] leading-relaxed">
          Ananda Usam Muhajir
        </h1>
        <button className="mt-12 w-3/5 bg-white p-2 rounded-md hover:bg-gray-200 transition-all duration-100 hover:text-slate-700">
          Buka undangan
        </button>
      </div>
    </>
  );
};

export default Majored;
