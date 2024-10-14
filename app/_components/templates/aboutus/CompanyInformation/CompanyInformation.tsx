import Image from "next/image";
import React from "react";

export default async function CompanyInformation() {
  const res = await fetch("http://91.107.138.134:80/api/about-us/", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="mb-12 md:mb-20">
      <div className="container">
        <div className="md:bg-main_dark rounded-2xl md:p-4 grid grid-cols-5 gap-10">
          <div className="col-span-5 md:col-span-3 flex flex-col gap-2 md:gap-4 order-1 md:-order-1">
            <div
              className="prose prose-invert"
              dangerouslySetInnerHTML={{ __html: data.text }}
            ></div>
          </div>
          <div className="col-span-5 md:col-span-2 md:bg-background rounded-xl flex flex-col items-center justify-center gap-4">
            <Image
              alt=""
              src={"/logo/logo.svg"}
              width={65.52}
              height={43.71}
              className="w-16 md:w-40"
            ></Image>
            <Image
              alt=""
              src={"/logo/logotype.svg"}
              width={65.52}
              height={43.71}
              className="w-20 md:w-44"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
