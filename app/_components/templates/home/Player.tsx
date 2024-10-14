"use client"
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

export default function Player({src}:any) {
  return (
    <>
      <div className="mid flex justify-center">
        <div className="mt-11 w-[820px] rounded-3xl md:rounded-[60px] overflow-hidden relative">
          {/* <Image
            width={820}
            height={463}
            className="blur-sm"
            src="/home/video.png"
            alt=""
          /> */}
          <video width={820}
            height={463} controls>
      <source src={`http://91.107.138.134:80${src}`} type="video/mp4"></source>
      </video>
          {/* <div className="absolute top-0 left-0 bg-black/60 w-full h-full"></div> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-9">
            <div className="relative">
              {/* <Image
                width={64}
                height={64}
                className=""
                src="/home/btnplay.png"
                alt=""
              />
              <Image
                width={14}
                height={14}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2"
                src="/home/btnplay2.svg"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <video >
        <source src={`http://91.107.138.134:80${src}`} />
      </video> */}
      
    </>
  );
}
