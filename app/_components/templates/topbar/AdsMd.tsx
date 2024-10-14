import Image from "next/image";
import React from "react";

export default async function AdsMd() {
    const res = await fetch("http://91.107.138.134:80/api/header-discount/", {cache: "no-store"});
    const data = await res.json();
    return (
        <>
            <div className="hidden relative overflow-hidden md:flex w-[100px] h-[180px] rounded-b-full">
                <Image
                    width={100}
                    height={180}
                    className="blur-sm w-full h-full bg-cover bg-center"
                    src="/Ads/adsMd.png"
                    alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 "></div>
                <div className="text-center absolute top-0  w-full h-full flex flex-col items-center justify-evenly text-white">
                    <h3 className="">%{data.number} تخفیف</h3>
                    <h3 className="text-xs font-light">{data.text}</h3>
                    <div className="l rounded-full bg-white cursor-pointer text-black w-20 h-[25px] flex justify-center items-center text-xs" onClick={() => navigator.clipboard.writeText('nr20a')} title="کپی در کلیپ برد">
                        nr20a
                    </div>
                </div>
            </div>
        </>
    );
}
