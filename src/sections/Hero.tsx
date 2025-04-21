"use client"

import GrayButton from "@/components/GrayButton";
import GreenButton from "@/components/GreenButton";
import { motion } from "motion/react";

import { MoveRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="flex flex-col items-center mt-20">
            <motion.a
                initial={{ scale: 0, opacity: 0, y: -40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    delay: 0.8,
                    visualDuration: 0.5,
                    type: "spring",
                    bounce: 0.35,
                }}
                href="#"
                className="mt-10 flex w-fit gap-4 cursor-pointer items-center justify-between rounded-full bg-zinc-800/50 p-2 hover:bg-zinc-800/60 font-source group"
            >
                <span className="rounded-full border border-emerald-200 bg-emerald-900/50 px-3 py-1 text-sm text-emerald-200">
                    Launch Week 14
                </span>
                <span className="p-1 text-sm text-white inline-flex items-center gap-4">
                    Top 10 Launches
                    <MoveRight className="size-4 font-bo group-hover:translate-x-1 smooth" />
                </span>
            </motion.a>

            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="mt-5 text-center font-medium text-white text-4xl md:text-6xl"
            >
                Build in a weekend
                <br />
                <span className="text-emerald-400/90">Scale to millions</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -20 }}
                className="mt-8 w-2/3 text-center text-white text-sm md:text-base lg:text-lg xl:text-xl"
            >
                Supabase is an open source Firebase alternative.
                <br />
                Start your project with a Postgres database, Authentication,
                instant APIs, Edge Functions, Realtime subscriptions, Storage,
                and Vector embeddings.
            </motion.p>

            <div className="w-[100%] justify-center mt-5 inline-flex gap-2 text-sm font-medium text-white hover:gap-4 *:rounded-md *:p-2.5">
                <GreenButton text={"Start your project"} />
                <GrayButton text={"Request a demo"} />
            </div>
        </div>
    );
}