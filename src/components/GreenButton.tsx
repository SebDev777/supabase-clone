import { motion } from "motion/react";
import { type ReactNode } from "react";

export default function GreenButton({
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
            className="button-green cursor-pointer"
        >
            <button className="inline-flex gap-2 items-center justify-center cursor-pointer">
                {children}
                {text || ""}
            </button>
        </motion.a>
    );
}
