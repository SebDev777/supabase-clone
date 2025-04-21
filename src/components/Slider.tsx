"use client"

import { isBigViewport, isMidViewport, isSmallViewport, usePlatform, useXlScreens } from "@/hooks/usePlatform";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
export default function Slider({
    items,
    className,
}: {
    items: Array<Array<any>>;
    className?: string;
}) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const itemWidthRef = useRef<number>(0);
    const inView = useRef(null)
    const isInView = useInView(inView, { once: true, amount: 0.65 });

    const platform = usePlatform()
    useEffect(() => {
        console.log("Device changed", platform)
    }, [platform])

    useEffect(() => {
        if (isSmallViewport(platform)) return console.log("is small viewport");
        if (!isInView) return;
        const scrollContainer = scrollRef.current;
        const interval = 3000; // milisegundos

        if (!scrollContainer) return;

        const firstItem =
            scrollContainer.querySelector<HTMLElement>(".carousel-item");
        if (firstItem) {
            const style = window.getComputedStyle(firstItem);
            const marginRight = parseInt(style.marginRight || "0", 10);
            itemWidthRef.current = firstItem.offsetWidth + marginRight;
        }

        const autoScroll = () => {
            if (!scrollContainer) return;

            const maxScroll =
                scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const nextScrollLeft =
                scrollContainer.scrollLeft + itemWidthRef.current;

            if (nextScrollLeft >= maxScroll) {
                scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                scrollContainer.scrollBy({
                    left: itemWidthRef.current,
                    behavior: "smooth",
                });
            }
        };

        const scrollInterval = setInterval(autoScroll, interval);
        return () => clearInterval(scrollInterval);
    }, [isInView, platform]);

    return (
        <div className={cn(className)} ref={inView}>
            <div
                ref={scrollRef}
                className={cn("w-full h-full overflow-x-auto snap-x snap-mandatory [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]", {
                    "overflow-x-hidden ": isMidViewport(platform) || isBigViewport(platform)                    
                })}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="w-fit h-full flex flex-row gap-4"
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item flex flex-col items-center justify-center gap-4 snap-center text-zinc-500 *:hover:shadow-[0_0_20px] *:hover:shadow-emerald-400/20 *:rounded-md *:border *:border-zinc-400/20 *:bg-zinc-800 *:hover:border-zinc-400/50 *:hover:text-white *:hover:text-shadow-white/40 *:hover:text-shadow-[0_0_20px] *:p-5 *:h-[30%] *:w-3xs *:md:w-sm *:md:h-[40%]"
                        >
                            {item.map((content, index) => (
                                <motion.div
                                    key={index}
                                    className="smooth"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {content}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
