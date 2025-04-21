import { Tornado } from "lucide-react";
import { motion } from "motion/react";

const content = Array(9).fill(null);
export default function InfiniteBar() {
    return (
        <div className="my-20 h-12 w-100% text-center">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", bounce: 0.4 }}
                className="h-full w-full bg-transparent [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.05)_10%,rgba(0,0,0,0.3)_30%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.05)_90%,transparent_100%)] *:text-white overflow-hidden"
            >
                <div className="w-full h-full inline-flex gap-9 animate-infinite-scroll">
                    {content.map((_, key) => (
                        <Tornado key={key} className="size-full" />
                    ))}
                </div>
            </motion.div>
            <p className="mt-8">Trusted by fast-growing companies worldwide</p>
        </div>
    );
}
