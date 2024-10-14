import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brief = () => {
  return (
    <>
      <div className="px-5">
        <div className="mt-16">
          <div className="flex justify-center items-center">
            <div className="title text-center">
              <div className="flex justify-center font-cinema text-[25px] md:text-[40px]">
                <h2 className="gradient-orange text-transparent bg-clip-text">
                  لاول کد
                </h2>
                <h2 className="">در یک نگاه</h2>
              </div>
              <h2 className="font-light text-xs md:text-base text-gray_text">
                تو ارتقا کسب و کار های انلاین پیشرو هستیم :)
              </h2>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-7">
          لاول کد در سال 1402 ساخته شد! طی فعالیت در حوزه­ بازاریابی و برندینگ
          با افراد و کسب و کارهای کوچک و متوسط زیادی برخورد داشتیم که به دریافت
          مشاوره و راهکار جهت توسعه و بهبود بیزینس خود نیاز داشتند، پاسخگویی به
          این نیاز در حوزه ی بازاریابی و برندینگ منجر به شکل گیری لاول کد شد.
        </p>
        {/* <p className="text-sm leading-7">{"briefdesc"}</p> */}
        <div className="flex justify-center mt-5">
          <div className="flex flex-col items-center w-[232px] h-[75px] bg-main_dark rounded-2xl justify-center shadow-btn mb-5">
            <span className="text-xl">35</span>
            <span className="text-xs">پروژه موفق در کارنامه تیم لاول کد</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-80 h-[156px] mt-[65px] rounded-[22px] flex flex-col items-center gap-[15px] overflow-hidden justify-center">
            <div className="z-10 text-center flex flex-col gap-[15px] px-8">
              <h3 className="text-2xl font-cinema ">
                شماره تلفن پشتیبانی لاول کد
              </h3>
              <p className="text-xs font-light">
                ما منتظر تماس شما هستیم. ساعات پاسخگویی روزهای شنبه الی پنج شنبه
                8.30 الی 21.00 می باشد.
              </p>
              <Link href="tel:09305712252">09305712252</Link>
            </div>

            <Image
              className="blur-sm"
              fill
              alt="/home/brief/phone.png"
              src={"/home/brief/phone.png"}
            ></Image>
            <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brief;
