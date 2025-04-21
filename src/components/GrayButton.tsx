import { motion } from "motion/react";
import { type ReactNode } from "react";

export default function GrayButton({
    link,
    text,
    children,
}: {
    link?: string;
    text?: string;
    children?: ReactNode;
}) {
    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link || "#"}
            className="button-zinc cursor-pointer"
        >
            <button className="inline-flex gap-2 items-center justify-center cursor-pointer">
                {children}
                {text || ""}
            </button>
        </motion.a>
    );
}
