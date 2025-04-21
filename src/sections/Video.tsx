"use client";

import { useEffect, useRef, useState } from "react";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "motion/react";

interface SectionData {
    sectionName: string;
    src: string;
    poster: string;
    descriptions: string[];
}

const videos: SectionData[] = [
    {
        sectionName: "Table Editor",
        src: "https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-table-editor.webm",
        poster: "https://supabase.com/images/index/dashboard/supabase-table-editor.png",
        descriptions: [
            "Full CRUD",
            "Materialized Views",
            "Foreign Tables",
            "Partitioned Tables",
            "Easy as a spreadsheet",
        ],
    },
    {
        sectionName: "SQL Editor",
        src: "https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-sql-editor.webm",
        poster: "https://supabase.com/images/index/dashboard/supabase-sql-editor.png",
        descriptions: [
            "AI SQL Editor",
            "Row Level Security",
            "Save time using Templates",
            "Save and reuse Queries",
        ],
    },
    {
        sectionName: "RLS Policies",
        src: "https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-rls.webm",
        poster: "https://supabase.com/images/index/dashboard/supabase-rls.png",
        descriptions: [
            "Email Logins",
            "Magic Links",
            "20+ Third-party Logins",
            "Custom Access Policies via RLS",
            "Password Recovery",
        ],
    },
];

type SectionName = (typeof videos)[number]["sectionName"];

export default function Video() {
    const [section, setSection] = useState<SectionName>();
    const [data, setData] = useState<SectionData>(videos[0]);

    const intervalRef = useRef(null);
    const [lastInteraction, setLastInteraction] = useState<number>(Date.now());

    const { src, poster, descriptions } = data;

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const secondsSinceLast = (now - lastInteraction) / 1000;

            if (secondsSinceLast > 20) {
                console.log("Auto changing")
                setSection((prev) => {
                    const currentIndex = videos.findIndex((v) => v.sectionName === prev);
                    const nextIndex = (currentIndex + 1) % videos.length;
                    return videos[nextIndex].sectionName;
                });
            }
        }, 5000); // Every 5 seconds

        return () => clearInterval(interval); // Cleanup
    }, [lastInteraction]);

    useEffect(() => {
        const selectedSection = videos.find((v) => v.sectionName === section);
        if (!selectedSection) return;
        setData(selectedSection);
    }, [section]);

    return (
        <div className="my-20 lg:my-[15%] w-[80%] text-2xl text-center relative flex flex-col gap-5 lg:gap-8 items-center">
            <p className="w-[95%] md:w-[60%] xl:w-[40%]">
                <b className="text-white text-center mb-4">
                    Stay productive and manage your app
                </b>{" "}
                without leaving the dashboard
            </p>

            <div className="inline-flex items-center gap-2 relative">
                {videos.map((item, key) => (
                    <button
                        onClick={() => {
                            setSection(item.sectionName)
                            setLastInteraction(Date.now())
                        }}
                        className={cn(
                            "bg-bg-primary rounded-full px-3 py-1.5 lg:py-2 lg:px-8 text-zinc-400 border text-xs border-zinc-400/20 smooth",
                            {
                                "-translate-y-2 text-zinc-300/90 border-zinc shadow-[0_0_20px] shadow-emerald-400/20 text-base":
                                    item.sectionName === section,
                                "hover:border-zinc-400 hover:text-zinc-300/90":
                                    item.sectionName !== section,
                            }
                        )}
                        key={key}
                    >
                        {item.sectionName}
                    </button>
                ))}
            </div>

            <div className="relative rounded-2xl shadow-lg p-2 h-full border border-zinc-400/40 flex flex-col overflow-hidden lg:order-last bg-bg-primary w-full max-w-6xl mx-auto">
                <div className="w-full px-2 pt-1 pb-3 relative flex items-center gap-1.5 lg:gap-2">
                    <div className="w-2 h-2 bg-bg-secondary rounded-full"></div>
                    <div className="w-2 h-2 bg-bg-secondary rounded-full"></div>
                    <div className="w-2 h-2 bg-bg-secondary rounded-full"></div>
                </div>
                <motion.div
                    key={section}
                    animate={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative h-full w-full aspect-video border border-zinc-400/40 overflow-hidden rounded-lg"
                >
                    <video
                        className="relative z-10 block w-full h-full motion-reduce:hidden"
                        src={src}
                        poster={poster}
                        playsInline
                        loop
                        autoPlay
                    ></video>
                </motion.div>
            </div>

            <motion.ul
                key={section}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex flex-wrap gap-4 w-[90%] justify-center"
            >
                {descriptions.map((description, index) => (
                    <li
                        key={index}
                        className="text-zinc-400 text-sm inline-flex items-center gap-2"
                    >
                        <Check className="size-3" />
                        <p
                            className={cn("smooth", {
                                "text-emerald-400/50 text-shadow-[0_0_10px] text-shadow-emerald-400/40":
                                    description.length >= 22,
                            })}
                        >
                            {description}
                        </p>
                    </li>
                ))}
            </motion.ul>

            <ul>{}</ul>
        </div>
    );
}
