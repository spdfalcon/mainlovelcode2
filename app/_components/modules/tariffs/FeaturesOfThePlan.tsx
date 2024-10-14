"use client";
import { FeaturesOfThePlanProps } from "@/app/_types/types";
import { plans } from "@/data/plans";
import React, { useState } from "react";

const FeaturesOfThePlan: React.FC<FeaturesOfThePlanProps> = ({ id }) => {
  const [isShow, setIsShow] = useState(true);
  const mainPlan = plans?.filter((plan) => plan.id === id)[0];
  return (
    <div className="relative mt-20">
      <h2 className="title  font-cinema text-3xl text-center py">
        امکانات پلن
      </h2>
      <div className="items mt-10">
        <h3 className="flex justify-center bg-[#5200FF]/10 py-5 text-sm rounded-t-[20px] ">
          {mainPlan.title}
        </h3>
        <ul
          className={`md:h-full md:grid md:grid-cols-2 md:gap-x-10 md:px-10 lg:px-20 lg:gap-x-40  px-5 flex flex-col gap-4 p-10 pb-20 text-sm bg-second_dark rounded-b-[20px] ${
            isShow ? "h-52 overflow-hidden" : "h-full"
          } `}
        >
          <li className="flex justify-between items-center ">
            <span>طراحی تم اختصاصی برند</span>
            <i className="bi bi-x-circle-fill text-main_red"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>زمان تحویل</span>
            <span>5روز کاری</span>
          </li>
          <li className="flex justify-between items-center ">
            <span>صفحه تماس با ما</span>
            <i className="bi bi-check-circle-fill text-green-700"></i>
          </li>
          <li className="flex justify-between items-center ">
            <span>امکان انتخاب از ۱۰۰ قالب آماده</span>
            <i className="bi bi-star-fill text-yellow-500"></i>
          </li>
          <li className="flex justify-between items-center ">
            <span>طراحی تم اختصاصی برند</span>
            <i className="bi bi-x-circle-fill text-main_red"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>زمان تحویل</span>
            <span>5روز کاری</span>
          </li>
          <li className="flex justify-between items-center ">
            <span>صفحه تماس با ما</span>
            <i className="bi bi-check-circle-fill text-green-700"></i>
          </li>
          <li className="flex justify-between items-center ">
            <span>امکان انتخاب از ۱۰۰ قالب آماده</span>
            <i className="bi bi-star-fill text-yellow-500"></i>
          </li>
          <li className="flex justify-between items-center ">
            <span>طراحی تم اختصاصی برند</span>
            <i className="bi bi-x-circle-fill text-main_red"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>زمان تحویل</span>
            <span>5روز کاری</span>
          </li>
          <li className="flex justify-between items-center ">
            <span>صفحه تماس با ما</span>
            <i className="bi bi-check-circle-fill text-green-700"></i>
          </li>
          <li className="flex justify-between items-center ">
            <span>امکان انتخاب از ۱۰۰ قالب آماده</span>
            <i className="bi bi-star-fill text-yellow-500"></i>
          </li>
        </ul>
      </div>
      <div className="relative md:hidden">
        <div
          onClick={() => setIsShow((priv) => !priv)}
          className={`absolute ${
            isShow ? "bg-gradient-to-t from-second_dark to-second_dark/75" : ""
          }  w-full h-32 bottom-0 cursor-pointer`}
        >
          <span className="absolute bottom-10 text-sm left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            {isShow ? "مشاهده همه" : null}
            <i
              className={`bi bi-chevron-double-down duration-500 ${
                isShow ? "rotate-0" : "rotate-180"
              }`}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfThePlan;
