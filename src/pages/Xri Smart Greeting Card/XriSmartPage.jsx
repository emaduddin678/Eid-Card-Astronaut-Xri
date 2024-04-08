import React from "react";
import xrlogo from "/xrLogo.png";
// import moon from "/gpmoon.png";
import eidm from "/Astronaut/eidmubrak.png";
import icon1 from "/Astronaut/icon1.png";
import icon2 from "/Astronaut/icon2.png";
import icon3 from "/Astronaut/icon3.png";
import icon4 from "/Astronaut/icon4.png";
// import astrh from "/Astronaut/Astronauthang.png";
import astrcrd from "/Astronaut/Astronautcard.png";
import astrfly from "/Astronaut/Astronautfly.png";
import { Link } from "react-router-dom";

const XriSmartPage = () => {
  return (
    <div className='h-[150vh] w-full lg:bg-[url("/Astronaut/BG.png")] bg-[url("/Astronaut/Backgroundsm.png")] bg-[length:100%_100%] bg-no-repeat  overflow-hidden'>
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
                <img
                  className="xl:w-full lg:w-4/5 "
                  src={eidm}
                  alt="Eid mubarak"
                />
              </div>
            </div>
          </div>
        </header>
        {/* nav of ui end  */}
        {/* content box start  */}
        <div className="flex xl:-mt-20 lg:flex-row flex-col flex-wrap justify-center items-center xl:px-48 llg:px-64 lg:px-52 md:px-20  gap-x-4   relative">
          <div className="relative xl:w-[380px] xl:h-[250px] llg:w-[250px] llg:h-[170px] lg:w-[250px] lg:h-[170px] w-[280px] h-[190px]    bg-contain xl:px-24 llg:px-5 lg:px-10 px-14 z-30 flex justify-center items-center bg-[url('/Astronaut/Board.png')]  font-sansita font-bold italic lg:text-2xl llg:text-3xl text-2xl text-center ">
            SOCIAL MEDIA AR FILTER
            <img
              className="absolute xl:bottom-10 xl:right-12 lg:bottom-8 lg:right-8 bottom-8 right-8 xl:w-fit lg:w-[10%] md:w-fit"
              src={icon1}
              alt="icon"
            />
            <img
              className="absolute -top-[100px] left-6"
              src={astrcrd}
              alt="astr"
            />
          </div>
          <div className="relative xl:w-[380px] xl:h-[250px] llg:w-[250px] llg:h-[170px] lg:w-[250px] lg:h-[170px] w-[280px] h-[190px]   xl:px-8 px-5 bg-contain z-30 flex justify-center items-center bg-[url('/Astronaut/Board.png')] text-center">
            <Link
              className=" w-full h-full flex items-center font-sansita font-bold italic lg:text-2xl llg:text-3xl text-2xl"
              to={"/greetings"}
            >
              PERSONALIZED GREETINGS
            </Link>
            <img
              className="absolute xl:bottom-10 xl:right-12 lg:bottom-8 lg:right-8 xl:w-fit lg:w-[10%] bottom-8 right-8 md:w-fit"
              src={icon2}
              alt="icon"
            />
          </div>
          <div className="relative xl:w-[380px] xl:h-[250px] llg:w-[250px] llg:h-[170px] lg:w-[250px] lg:h-[170px] w-[280px] h-[190px]    bg-contain xl:px-24 llg:px-5 z-30 flex justify-center items-center bg-[url('/Astronaut/Board.png')]  font-sansita font-bold italic lg:text-2xl llg:text-3xl text-2xl text-center ">
            GAME
            <img
              className="absolute xl:bottom-10 xl:right-12 lg:bottom-8 lg:right-8 xl:w-fit lg:w-[10%] bottom-8 right-8 md:w-fit"
              src={icon3}
              alt="icon"
            />
          </div>
          <div className="relative xl:w-[380px] xl:h-[250px] llg:w-[250px] llg:h-[170px] lg:w-[250px] lg:h-[170px] w-[280px] h-[190px]    bg-contain xl:px-24 llg:px-5 z-30 flex justify-center items-center bg-[url('/Astronaut/Board.png')]  font-sansita font-bold italic lg:text-2xl llg:text-3xl text-2xl text-center  px-4">
            AR OPEN WORLD
            <img
              className="absolute xl:bottom-10 xl:right-12 lg:bottom-8 lg:right-8 xl:w-fit lg:w-[10%] bottom-8 right-8 md:w-fit"
              src={icon4}
              alt="icon"
            />
          </div>

          <img
            className="absolute left-20 bottom-0"
            src={astrfly}
            alt="Astronaut fly"
          />
        </div>
        {/* content box end*/}
      </div>
    </div>
  );
};

export default XriSmartPage;
