import React from "react";
import banner from "../assets/assets/banner-main.png"

const Banner = ({handleCredit}) => {
  return (
    <section className=" w-[90%] mx-auto rounded-lg mt-10 flex justify-center items-center p-10 bg-black">
      <div className="relative w-full max-w-4xl">
        
        {/* Overlay Content */}
        
        <div className=" inset-0 flex flex-col text-white items-center justify-center text-center rounded-lg">
        <img
          src={banner}
          alt="Cricket Fantasy"
        />
          <h2 className="text-2xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-sm mt-1">Beyond Boundaries Beyond Limits</p>
          <button onClick={()=>handleCredit(600000)} className="mt-4 cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-md shadow-md">
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
