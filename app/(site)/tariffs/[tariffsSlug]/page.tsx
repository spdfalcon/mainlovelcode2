import Btn from "@/app/_components/modules/Btn/Btn";
import FeaturesOfThePlan from "@/app/_components/modules/tariffs/FeaturesOfThePlan";
import Player from "@/app/_components/templates/home/Player";
import Plan from "@/app/_types/types";
import { plans } from "@/data/plans";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({ params }: Params){
  const { tariffsSlug } = params; // دسترسی به پارامتر slug
  const res = await fetch(`http://91.107.138.134:80/api/plan/detail/${tariffsSlug}/`, {cache: "no-store"});
  const plan:Plan = await res.json();
  console.log(plan);
  
  return (
    <>
      <div className="container mt-16">
        <div className="bredcromp">
          <div className="rounded-md p-3 flex items-center gap-2 bg-second_dark text-badge w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-xs">تعرفه طراحی سایت</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-xs">تعرفه {plan.name}</span>
          </div>
        </div>
        <div className="relative header px-5 flex flex-col items-center gap-6 mt-20">
          <h1 className="text-3xl font-cinema">تعرفه {plan.name}</h1>
          <div className="flex gap-4 md:bg-second_dark shadow-md md:mt-10">
            <Image
              alt="نمونه کار های لاولکد"
              src={"/portfolio/1.png"}
              width={399}
              height={228}
              className="hidden md:block"
            ></Image>
            <div className="p-3 ">
              <h2 className="text-2xl hidden md:block ">
                +260 نمونه کار طراحی سایت حرفه ای اختصاصی
              </h2>
            </div>
          </div>
          <h2 className="absolute -top-10 text-3xl bg-gradient-to-b from-[#FFFFFF] to-[#030712] text-transparent bg-clip-text font-bold opacity-20">
            {plan.name}
          </h2>
        </div>
        <div>
          <Player src={plan.video}></Player>
        </div>
        <div>
          <FeaturesOfThePlan id={plan.id}></FeaturesOfThePlan>
        </div>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row justify-center items-center">
          <Btn
            shadow
            href="/"
            type="box6"
            bg="gradient"
            title="ثبت درخاست"
          ></Btn>
          <Btn
            shadow
            href="/"
            type="box6"
            bg="background"
            title="میزبان حرفه ای : 2 گیگابایت"
          ></Btn>
        </div>
        <div className="questions">questions</div>
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

export default page;
