import React from "react";
import Btn from "../Btn/Btn";
import { PlanProps } from "@/app/_types/types";
import Image from "next/image";

const Plan: React.FC<PlanProps> = ({
    id,
    name,
    speed,
    customization,
    seo,
    custom_color,
    learning_program,
    backup,
    delivery_time,
    price,
}) => {
    const starts1 = new Array(+speed).fill(0);
    const starts2 = new Array(+customization).fill(0);

    console.log(">>" + seo);

    return (
        <div className="flex justify-center h-full">
            <div className="mt-10 px-5 pb-5 bg-second_dark w-[273px] border-[1px] rounded-[20px] flex flex-col justify-between">
                <div className="">
                    <div className="justify-center text-center items-center">
                        <span className="px-8 py-3 text-xs bg-[#5200FF]/10 inline-block rounded-b-[15px]">
                            {name}
                        </span>
                    </div>
                    <div className="mt-6 text-xs flex flex-col gap-5">
                        <div className="flex justify-between">
                            <h5 className="">سرعت سایت:</h5>
                            <div className="flex gap-2">
                                {starts1.map(() => (
                                    <Image
                                        alt=""
                                        src={`/home/plans/star.svg`}
                                        width={14}
                                        height={14}
                                        key={crypto.randomUUID()}
                                    ></Image>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">قابلیت سفارشی سازی:</h5>
                            <div className="flex gap-2">
                                {starts2.map(() => (
                                    <Image
                                        alt=""
                                        src={`/home/plans/star.svg`}
                                        width={14}
                                        height={14}
                                        key={crypto.randomUUID()}
                                    ></Image>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">سئو تکنیکال</h5>
                            <div className="">
                                {seo ? (
                                    <Image
                                        alt=""
                                        src={`/home/plans/check.svg`}
                                        width={14}
                                        height={14}
                                    ></Image>
                                ) : (
                                    <Image
                                        alt=""
                                        src={`/home/plans/cancel.svg`}
                                        width={14}
                                        height={14}
                                    ></Image>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">تغییر رنگ به سلیقه شما</h5>
                            <div className="">
                                <Image
                                    alt=""
                                    src={`/home/plans/check.svg`}
                                    width={14}
                                    height={14}
                                ></Image>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">اموزش کامل پنل کاربری :</h5>
                            <div className="">
                                <Image
                                    alt=""
                                    src={`/home/plans/check.svg`}
                                    width={14}
                                    height={14}
                                ></Image>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">پشتیبانی رایگان :</h5>
                            <span>{backup} ماه</span>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">: UI / UX</h5>
                            <span>آماده</span>
                        </div>
                        <div className="flex justify-between">
                            <h5 className="">زمان اجرا :</h5>
                            <span>{delivery_time} روزکاری</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex mt-[30px] items-center justify-center gap-2 ">
                        <span className="text-sm">
                            شروع قیمت از : <span className="text-3xl">{price}</span>{" "}
                        </span>
                        <div className="flex flex-col">
                            <span className="text-[10px]">میلیون</span>
                            <span className="text-[10px]">تومان</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Btn
                            bg="gradient"
                            href={`/tariffs/${id}`}
                            title="مشاهده پلن"
                            type="box6"
                        ></Btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
