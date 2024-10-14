import React from "react";
// Import Swiper styles

import SliderPlans from "./SliderPlans";
import SliderPlansMd from "./SliderPlansMd";

// import required modules
export default async function Plans() {
  const res = await fetch("http://91.107.138.134:80/api/plan/list/", {
    cache: "no-store",
  });
  const plans = await res.json();

  
  return (
    <div>
      <div className="mt-16 md:px-[100px]">
        <div className="flex justify-center text-center items-center">
          <div className="title">
            <div className="flex font-cinema text-[25px] md:text-[40px] gap-1">
              <h2 className="">هزینه پلن های طراحی سایت</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                لاول کد
              </h2>
            </div>
            <h2 className="font-light text-xs text-gray_text md:text-base">
              پلن های ویژه برای مشتریان به همراه بهترین و بالاترین کیفیت
            </h2>
          </div>
        </div>
      </div>
      <SliderPlans plans={plans}></SliderPlans>
      <SliderPlansMd plans={plans}></SliderPlansMd>
    </div>
  );
}
