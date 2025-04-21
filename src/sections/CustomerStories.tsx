"use client"

import GrayButton from "@/components/GrayButton";
import GreenButton from "@/components/GreenButton";
import Slider from "@/components/Slider";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useRef } from "react";

const items = Array(9).fill(Array(2).fill((
    <img className="filter dark:invert" src="https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Fshotgun.png&w=640&q=75&dpl=dpl_3QCvmTh4DarNQnaCq1489SoCyBYm" alt="company" />
)));

export default function CustomerStories() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });

    return (
        <div className="flex flex-col text-white my-24 w-[80%] group">
            <div className="lg:flex lg:flex-row lg:items-end lg:justify-between">
                <div className="lg:max-w-[40%]" ref={ref}>
                    <p className="font-source uppercase">customer stories</p>
                    <p className="relative my-2 text-2xl lg:text-4xl tracking-tight group w-fit">
                        <b className={cn("font-normal smooth after:w-0 after:opacity-0", {
                            "text-emerald-400 text-shadow-[0_0_20px] text-3xl lg:text-[2.5rem] text-shadow-emerald-400 after:bg-gradient-to-r after:from-emerald-950/50 after:to-emerald-400 after:content-[''] after:absolute after:w-[55%] after:opacity-100 after:transition-all after:duration-200 after:h-1 after:rounded-lg after:left-0 after:bottom-[45%]" : isInView
                        })}>Infractrusture</b> to
                        innovate <br /> and scale with ease
                    </p>
                    <p className="lg:text-md tracking-wider">
                        See how Supabase empowers companies of all sizes to
                        accelerate their growth and streamline their work.
                    </p>
                </div>

                <div className="w-[100%] justify-items-end mt-5 inline-flex gap-2 text-sm font-medium text-white *:rounded-md *:py-1 *:px-2 lg:w-[40%] lg:h-[18%] lg:justify-end">
                    <GreenButton text={"View all stories"} />
                    <GrayButton text={"View Events"} />
                </div>
            </div>
            
            <Slider className="w-full h-[400px] mt-8" items={items} />
        </div>
    );
}
