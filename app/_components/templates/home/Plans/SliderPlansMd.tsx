import Plan from "@/app/_components/modules/home/Plan";
import PlansProps, { PlanProps } from "@/app/_types/types";
import React from "react";
const SliderPlansMd: React.FC<PlansProps> = ({ plans }) => {
    console.log("....", plans);
    
    return (
        <div className="flex justify-center">
            <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-5">
                {plans.map((plan: PlanProps) => (
                    <div key={plan.id}>
                        <Plan
                            id={plan.id}
                            backup={plan.backup}
                            custom_color
                            customization={plan.customization}
                            delivery_time={plan.delivery_time}
                            learning_program
                            name={plan.name}
                            seo={plan.seo}
                            speed={plan.speed}
                            price={plan.price}
                        ></Plan>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderPlansMd;
