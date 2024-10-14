import BriefFeacher from "@/app/_components/modules/BriefFeacher";

import Image from "next/image";
import Link from "next/link";
import React from "react";
const BriefMd = () => {
  return (
    <>
      <div className="flex flex-col px-[100px]">
        <div className="flex gap-14 w-full mt-40">
          <div className="r basis-1/2">
            <div className="w-full h-full">
              <div className="relative w-fit h-fit">
                <Image
                  alt=""
                  src={"/home/brief/briefmd.png"}
                  width={554}
                  height={619}
                ></Image>
                <div className="absolute w-10 h-4/5 ltr:-left-4 rtl:-right-4 rounded-xl bg-white/10 top-1/2 -translate-y-1/2 "></div>
                <div className="absolute w-1/2 h-20 bg-second_dark rounded-[20px] right-1/4 -bottom-10 flex flex-col justify-center text-center">
                  <span className="text-[26px]">35</span>
                  <span className="text-sm ">
                    پروژه موفق در کارنامه تیم لاول کد
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="l basis-1/2 flex flex-col gap-14">
            <div className="top flex flex-col gap-4">
              <div className="title">
                <div className="flex font-cinema text-[40px]">
                  <h2 className="gradient-orange text-transparent bg-clip-text">
                    لاول کد
                  </h2>
                  <h2 className="">در یک نگاه</h2>
                </div>
                <h2 className="font-light text-gray_text">
                  تو ارتقا کسب و کار های انلاین پیشرو هستیم :)
                </h2>
              </div>
              <p className="text-lg ">لاول کد در سال 1402 ساخته شد!</p>
              <p className="text-lg ">
                طی فعالیت در حوزه­ بازاریابی و برندینگ با افراد و کسب و کارهای
                کوچک و متوسط زیادی برخورد داشتیم که به دریافت مشاوره و راهکار
                جهت توسعه و بهبود بیزینس خود نیاز داشتند، پاسخگویی به این نیاز
                در حوزه ی بازاریابی و برندینگ منجر به شکل گیری لاول کد شد.
              </p>
            </div>
            <div className="down grid grid-cols-2 gap-x-20 gap-y-12">
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="پشتیبانی لحظه ای"
              ></BriefFeacher>
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="ظاهر چشم نواز و اختصاصی"
              ></BriefFeacher>
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="+2 سال سابقه کاری"
              ></BriefFeacher>
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="طراحی سایت استاندارد"
              ></BriefFeacher>
            </div>
          </div>
        </div>
        <div className="relative h-[233px] w-full  rounded-[30px] mt-[200px] overflow-hidden">
          <Image
            className="blur-sm"
            alt=""
            src={"/home/brief/phonemd.png"}
            fill
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 flex justify-center items-center">
            <div className="z-10 text-center flex flex-col gap-[15px] px-8">
              <h3 className="text-[40px] font-normal font-cinema ">
                شماره تلفن پشتیبانی لاول کد
              </h3>
              <p className="font-light">
                ما منتظر تماس شما هستیم. ساعات پاسخگویی روزهای شنبه الی پنج شنبه
                8.30 الی 21.00 می باشد.
              </p>
              <Link href="tel:09305712252">09305712252</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BriefMd;
