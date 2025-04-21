import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type options = string | number | (() => void)
export function ifEven(number: number, then: options, otherwise: options) : number | string | undefined {
    if (number % 2 === 0) {
        if (typeof(then) !== "function") {
            return then
        } else {
            then()
        }
    } else {
        if (typeof(otherwise) !== "function") {
            return otherwise
        } else {
            otherwise()
        }
    }
}