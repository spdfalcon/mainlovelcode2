import Link from "next/link";
import React from "react";
import SliderPortfolios from "./SliderPortfolios";
import Btn from "@/app/_components/modules/Btn/Btn";
import SliderPortfoliosMd from "./SliderPortfoliosMd";
export default function Portfolios() {
  return (
    <div>
      <div className="mt-16 px-5 md:px-[100px]">
        <div className="flex justify-center lg:justify-between  items-center">
          <div className="title">
            <div className="flex justify-center md:justify-normal font-cinema text-[25px] md:text-[40px] gap-1">
              <h2 className="">نمونه کارهای تیم</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                لاول کد
              </h2>
            </div>
            <h2 className="font-light text-xs md:text-base text-center md:text-start text-gray_text">
              در بازاری که همه حرف میزنند، ترجیح میدهیم چیزی نگوییم، چرا که در
              انتها ما با کارهایمان قضاوت میشویم نه حرف هایمان
            </h2>
          </div>
          <Link
            className="w-[188px] h-[55px] rounded-2xl bg-second_dark justify-center items-center hidden lg:flex shadow-btn "
            href={"/portfolio"}
          >
            مشاهده جزئیات
          </Link>
        </div>
      </div>
      <SliderPortfolios></SliderPortfolios>
      <SliderPortfoliosMd></SliderPortfoliosMd>
      <div className="flex justify-center mt-[30px] md:hidden">
        <Btn
          shadow={true}
          type="box7"
          href="/portfolio"
          title="مشاهده جزئیات"
          bg="background"
        ></Btn>
      </div>
    </div>
  );
}
