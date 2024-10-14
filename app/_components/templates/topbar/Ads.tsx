"use client";
import React, { useState } from "react";
export default async function Ads() {
  const [isShow, setIsShow] = useState<boolean>(true);
  const res = await fetch("http://91.107.138.134:80/api/header-discount/", {cache: "no-store"});
    const data = await res.json();
  return (
    <>
      {isShow ? (
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className=" bg-[url('/Ads/ads.png')] py-10 blur-sm">
              <div className="absolute top-0 left-0 bg-black/60 z-10 w-full h-full"></div>
            </div>
            <div className="absolute top-5 flex justify-between w-full px-5">
              <div className="r flex gap-4 items-center">
                <div className="r flex flex-col">
                  <h3 className="text-sm ">%{data.number} تخفیف</h3>
                  <h4 className="text-[10px] font-light">
                    {data.text}
                  </h4>
                </div>
                <div className="l rounded-full bg-white text-black w-20 h-[26px] flex justify-center items-center text-sm cursor-pointer" onClick={() => navigator.clipboard.writeText('nr20a')} title="کپی در کلیپ برد">
                  nr20a
                </div>
              </div>
              <div
                onClick={() => setIsShow((priv) => !priv)}
                className="l flex items-center text-xs cursor-pointer"
              >
                <span>بستن</span>
                <i className="bi bi-x flex justify-center items-center"></i>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
