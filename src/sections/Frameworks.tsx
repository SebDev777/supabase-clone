import { useRef, useState } from "react";
import { ZapOff } from "lucide-react";
import { motion } from "motion/react";
import { useXlScreens } from "@/hooks/usePlatform";

const frameworks = [
    "React",
    "Next.js",
    "RedwoodJS",
    "Flutter",
    "Kotlin",
    "Svelte",
    "SolidJS",
    "Vue",
    "Nuxt",
    "Refine",
];
export default function Frameworks() {
    const scrollRef = useRef(null);
    const [framework, setFramework] = useState("any framework");
    return (
        <div
            ref={scrollRef}
            className="mt-12 flex flex-col items-center text-xl md:text-2xl w-full text-left xl:flex-row xl:w-[70%]"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0, x: -200 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ root: scrollRef, once: true }}
                className="xl:w-[40%]"
            >
                <p>Use Supabase with</p>
                <motion.p
                    key={framework}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <b>{framework}</b>
                </motion.p>
            </motion.div>
            <div
                onMouseLeave={() => setFramework("any framework")}
                className="relative mt-4 flex flex-row gap-1 flex-wrap w-xs md:w-[100%] items-center justify-center xl:justify-end group"
            >
                {frameworks.map((item, index) => (
                    <motion.button
                        whileHover={{ y: useXlScreens(-20) }}
                        key={index}
                        initial={{ scale: 0, opacity: 0, y: 10 }}
                        whileInView={{ scale: 1, opacity: 1, y: 0 }}
                        viewport={{ root: scrollRef, once: true }}
                        onMouseEnter={() => setFramework(item)}
                        className="text-white hover:border hover:b-white/20 cursor-pointer p-4 rounded-md group-hover:text-white/40 smooth hover:text-white hover:shadow-[0_0_20px] hover:shadow-emerald-400/40"
                    >
                        <ZapOff className="size-7" />
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
