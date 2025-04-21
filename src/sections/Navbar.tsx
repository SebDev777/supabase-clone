"use client"

import { motion, useAnimate, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const list = ["Product", "Developers", "Enterprise", "Pricing", "Docs", "Blog"];

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
    const [scope, animate] = useAnimate();

    const { scrollY } = useScroll()
    const [ hidden, setHidden ] = useState<boolean>(false)

    useMotionValueEvent(scrollY, "change", (latestValue) => {
        const previousValue = scrollY.getPrevious()
        if (!previousValue) return;
        if (latestValue > previousValue && latestValue > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const toggle = async () => {
        setOpen(!open);
        await animate("li", {
            y: open ? 10 : -10,
            color: open ? "var(--color-emerald-300)" : "var(--color-white)",
        });
    };

    return (
        <motion.div
            variants={{
                visible: { y: 0},
                hidden: { y: "-100%"}
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "inline-flex fixed top-0 left-0 w-screen justify-between text-white p-5 ring-1 bg-bg-primary ring-white/20 z-99 lg:pl-40 lg:pr-20",
                {
                    "bg-[rgb(36,36,36)]": open,
                }
            )}
        >
            <a className="inline-flex gap-2" href="/">
                <svg
                    className="size-8"
                    width="109"
                    height="113"
                    viewBox="0 0 109 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                        fill="url(#paint0_linear)"
                    />
                    <path
                        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                        fill="url(#paint1_linear)"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                        fill="#3ECF8E"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="53.9738"
                            y1="54.974"
                            x2="94.1635"
                            y2="71.8295"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#249361" />
                            <stop offset="1" stopColor="#3ECF8E" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear"
                            x1="36.1558"
                            y1="30.578"
                            x2="54.4844"
                            y2="65.0806"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop />
                            <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className="font-semibold text-xl">supabase</h1>
            </a>
            <motion.div
                whileHover={{
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.9,
                    rotate: 15
                }}
                transition={{
                    type: "spring",
                    bounce: 0.5
                }}
                className="cursor-pointer"
                onClick={toggle}
            >
                {open ? <X /> : <Menu />}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: open ? 1 : 0 }}
                className={cn(
                    "absolute top-[100%] left-0 w-full h-screen p-9 bg-[rgb(36,36,36)] flex justify-center",
                    {
                        "pointer-events-none": !open,
                    }
                )}
            >
                <ul className="w-screen text-left" ref={scope} key={String(open)}>
                    {list.map((item, key) => (
                        <motion.li
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: -20, opacity: 1 }}
                            transition={{
                                type: "spring",
                                duration: 0.4,
                                delay: key/15
                            }}
                            className="font-medium border-b border-white/20 p-3 flex justify-between hover:bg-[rgb(28,28,28)] cursor-pointer group hover:*:text-shadow-[0_0_40px] hover:*:text-shadow-emerald-500"
                            key={key}
                        >
                            <h1 className="group-hover:translate-x-2 smooth">{item}</h1>
                            <button className="cursor-pointer group-hover:translate-y-2 smooth">
                                <ChevronDown />
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}
