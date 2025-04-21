"use client"

import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { useRef, type ReactNode } from "react";

const items = [
    {
        title: "Authentication",
        description: (
            <p>
                <b>Add user sign ups and logins</b>, securing your data with Row
                Level Security
            </p>
        ),
        size: 55,
    },
    {
        title: "Edge Functions",
        description: (
            <p>
                Easily write custom code <br className="hidden md:block" />
                <b>without deploying or scaling servers.</b>
            </p>
        ),
        size: 55,
    },
    {
        title: "Storage",
        description: (
            <p>
                <b>Store, organize, and serve</b>
                <br className="hidden md:block" />
                large files from videos to images.
            </p>
        ),
        size: 55,
    },
    {
        title: "Realtime",
        description: (
            <p>
                <b>Build multiplayer experiences</b>
                <br className="hidden md:block" />
                with real-time data synchronizations.
            </p>
        ),
        size: 55,
    },
    {
        title: "Vector",
        description: (
            <p>
                Integrate your favorite ML-models to{" "}
                <b>store, index and search vector embeddings.</b>
            </p>
        ),
        size: 55,
    },
    {
        title: "Data APIs",
        description: (
            <p>
                Instant ready-to-use <b>Restful APIs.</b>
            </p>
        ),
        size: 55,
    },
];

const GenericContent = ({
    title,
    description,
    size,
}: {
    title: string;
    description: ReactNode;
    size: number;
}) => (
    <>
        <ArrowUpRight className="absolute top-5 right-5 transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 smooth" />
        <div className="xl:p-1.5">
            <h1 className="font-semibold">{title}</h1>
            {description}
        </div>
        <div
            className="hidden w-full justify-self-center rounded-md bg-bg-secondary ring-1 ring-zinc-500/80 md:flex"
            style={{
                height: `calc(${size}/100 * 100%`,
            }}
        ></div>
    </>
);

const ElephantContainer = () => (
    <>
        <div className="md:flex md:flex-col md:justify-between lg:m-5 xl:w-[40%]">
            <div>
                <h1 className="font-bold">Postgres Database</h1>
                <p className="mt-2">
                    Every project is <b>a full Postgress database</b>, the
                    world's most trusted relational database.
                </p>
            </div>
            <div className="hidden lg:block">
                <ul className="*:inline-flex *:items-center *:gap-1">
                    <li>
                        <Check className="size-3" />
                        100% portable
                    </li>
                    <li>
                        <Check className="size-3" />
                        Built-in Auth with RLS
                    </li>
                    <li>
                        <Check className="size-3" />
                        Easy to extend
                    </li>
                </ul>
            </div>
        </div>
        <div className="hidden md:block md:size-[60%] md:self-center lg:flex lg:items-center lg:size-[100%] xl:size-[60%]">
            <img
                className="contain-content pointer-events-none"
                src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=1920&q=100&dpl=dpl_BRTLWkgcyuhsSxpwgabrBcCZtg86"
                alt="elephant"
            />
        </div>
    </>
);

items.unshift({
    title: "",
    description: <></>,
    size: 55,
});

export default function Benefits() {
    const scrollRef = useRef(null);
    return (
        <div className="flex flex-col items-center text-left mx-10 mt-[12%] mb-16 w-[90%]">
            <motion.div
                ref={scrollRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-5 font-normal text-white md:w-[70%] md:grid-cols-4 lg:grid lg:grid-rows-2 xl:w-[80%] *:cursor-pointer *:rounded-lg *:border *:border-zinc-400/20 *:bg-zinc-800/30 *:p-5 *:md:min-h-[500px] *:xl:min-h-[400px] *:hover:shadow-[0_0_40px] *:shadow-emerald-500/15 *:hover:border-zinc-400/40 *:md:odd:-translate-x-20 *:md:even:translate-x-20 *:lg:odd:translate-x-0 *:lg:even:translate-x-0"
            >
                {items.map((item, index) => {
                    const { title, description, size } = item;
                    return (
                        <motion.div
                            key={index}
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            whileHover={{ y: -5, x: 5 }}
                            whileInView={{ scale: 1, opacity: 1, x: 0 }}
                            viewport={{ root: scrollRef, once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                type: "spring",
                                bounce: 0.45,
                            }}
                            className={cn({
                                "relative justify-between md:col-span-2 md:flex md:flex-col md:items-center md:text-center xl:col-span-1 xl:text-left group":
                                    index !== 0,
                                "md:itens-center md:col-span-4 md:flex md:flex-col md:text-center lg:justify-center lg:text-left xl:col-span-2 lg:flex-row":
                                    index === 0,
                            })}
                        >
                            {index !== 0 ? (
                                <GenericContent
                                    title={title}
                                    description={description}
                                    size={size}
                                />
                            ) : (
                                <ElephantContainer />
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
            <p className="text-left md:w-[80%] mt-4 text-xl md:text-2xl">
                <b>Use one or all.</b> Best of breed products. Integrated as a
                platform.
            </p>
        </div>
    );
}
