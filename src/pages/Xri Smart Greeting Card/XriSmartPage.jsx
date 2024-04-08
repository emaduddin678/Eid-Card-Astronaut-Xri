import React from "react";
import xrlogo from "/xrLogo.png";
// import moon from "/gpmoon.png";
import eidm from "/public/Astronaut/eidmubrak.png";
import icon1 from "/public/Astronaut/icon1.png";
import icon2 from "/public/Astronaut/icon2.png";
import icon3 from "/public/Astronaut/icon3.png";
import icon4 from "/public/Astronaut/icon4.png";
// import astrh from "/public/Astronaut/Astronauthang.png";
import astrcrd from "/public/Astronaut/Astronautcard.png";
import astrfly from "/public/Astronaut/Astronautfly.png";
import { Link } from "react-router-dom";

const XriSmartPage = () => {
  return (
    <div className='h-[150vh] w-full bg-[url("/public/Astronaut/BG.png")] bg-[length:100%_100%] bg-no-repeat  overflow-hidden'>
      <div className='bg-[url("/design.png")] w-full h-full '>
        {/* nav of ui  */}
        <header className="pb-6">
          <div className="mx-auto max-w-screen-xl px-4 ">
            <div className="flex items-center justify-between">
              <img src={xrlogo} className="w-32 md:pt-3" alt="" />

              <div className="flex justify-end items-center">
                {/* <img
                  src={moon}
                  className=" md:w-1/3 w-1/3 sm:p-0 pt-2 "
                  alt="moon"
                />

                <div className=" inline-flex flex-col justify-center items-center ">
                  <h1 className="md:text-6xl  sm:text-6xl text-3xl sm:leading-12 leading-7 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] font-sansita italic">
                    EID
                  </h1>
                  <h1 className="relative md:text-3xl  sm:text-3xl text-sm sm:leading-7 leading-4  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] font-sansita italic">
                    Mubarak
                    <img className="absolute" src={astrh} alt="astronaut" />
                  </h1>
                </div> */}
                <img src={eidm} alt="" />
              </div>
            </div>
          </div>
        </header>
        {/* nav of ui end  */}
        {/* content box start  */}
        <div className="flex -mt-20 flex-wrap justify-center items-center xl:px-40 llg:!px-52 lg:px-20 md:px-20  gap-x-4   relative">
          <div className="relative w-[380px] h-[250px] bg-contain px-24 z-30 flex justify-center items-center bg-[url('./Astronaut/Board.png')] font-sansita font-bold italic text-3xl text-center ">
            SOCIAL MEDIA AR FILTER
            <img
              className="absolute bottom-10 right-12"
              src={icon1}
              alt="icon"
            />
            <img
              className="absolute -top-[100px] left-6"
              src={astrcrd}
              alt="icon"
            />
          </div>
          <div className="relative w-[380px] h-[250px] bg-contain z-30 flex justify-center items-center bg-[url('./Astronaut/Board.png')] text-center px-20">
            <Link
              className=" w-full h-full flex items-center font-sansita font-bold italic text-3xl"
              to={"/greetings"}
            >
              PERSONALIZED GREETINGS
            </Link>
            <img
              className="absolute bottom-10 right-12"
              src={icon2}
              alt="icon"
            />
          </div>
          <div className="relative w-[380px] h-[250px] bg-contain z-30 flex justify-center items-center bg-[url('./Astronaut/Board.png')] font-sansita font-bold italic text-3xl text-center px-2">
            GAME
            <img
              className="absolute bottom-10 right-12"
              src={icon3}
              alt="icon"
            />
          </div>
          <div className="relative w-[380px] h-[250px] bg-contain z-30 flex justify-center items-center bg-[url('./Astronaut/Board.png')] font-sansita font-bold italic text-3xl text-center px-4">
            AR OPEN WORLD
            <img
              className="absolute bottom-10 right-12"
              src={icon4}
              alt="icon"
            />
          </div>

          <img className="absolute left-20 bottom-0" src={astrfly} alt="Astronaut fly" />

        </div>
        {/* content box end*/}
      </div>
    </div>
  );
};

export default XriSmartPage;
