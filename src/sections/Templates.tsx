"use client"

import GrayButton from "@/components/GrayButton";
import Slider from "@/components/Slider";
import { Github } from "lucide-react";

const items = Array(9).fill(Array(2).fill((
    <img className="filter dark:invert" src="https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2F1password.png&w=640&q=75&dpl=dpl_3QCvmTh4DarNQnaCq1489SoCyBYm" alt="company" />
)));

export default function Templates() {
    return (
        <div className="relative w-full h-[20%] my-24 md:my-[15%] lg:my-[8%]">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 text-cente z-20">
                <p className="text-white text-2xl text-center mb-4">Start building in seconds</p>
                <p className="font-semibold text-center">Kickstart your next project with templates built by us and our community</p>

                <div className="w-screen md:w-[100%] justify-center mt-5 inline-flex gap-2 text-xs md:text-sm font-medium *:rounded-md *:py-1 *:px-2 text-white">
                    <GrayButton text={"View all examples"} />
                    <GrayButton text={"View all examples"}>
                        <Github className="size-3" />  
                    </GrayButton>
                </div>
            </div>
            
            <Slider className="w-full h-[400px] z-10" items={items} />
        </div>
    )
}
