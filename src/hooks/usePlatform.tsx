"use client"

import { useEffect, useState } from "react";

const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

const getPlatform = (width: number) : keyof typeof breakpoints => {
    if (width < breakpoints.sm) return "xs";
    if (width < breakpoints.md) return "sm";
    if (width < breakpoints.lg) return "md";
    if (width < breakpoints.xl) return "lg";
    if (width < breakpoints["2xl"]) return "xl";
    return "2xl";
};

export function isSmallViewport(platform: keyof typeof breakpoints) {
    return !(isBigViewport(platform) || isMidViewport(platform))
}

export function isBigViewport(platform: keyof typeof breakpoints) {
    return platform === "lg" || platform === "xl" || platform === "2xl"
}

export function isMidViewport(platform: keyof typeof breakpoints) {
    return platform === "md"
}

export function usePlatform() {
    const [platform, setPlatform] = useState(() =>
        typeof window !== "undefined" ? getPlatform(window.innerWidth) : "md"
    );

    useEffect(() => {
        const handleResize = () => {
            const newPlatform = getPlatform(window.innerWidth);
            setPlatform(newPlatform);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // call it initially

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return platform;
}

export function useXlScreens(
    value: string | number | boolean | undefined
): any | undefined {
    const platform = usePlatform();
    const [val, setVal] = useState(value);

    useEffect(() => {
        if (platform === "xl" || platform === "2xl") {
            return setVal(value);
        }

        setVal(undefined);
    }, [platform]);

    return val;
}