"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@feely/lib/twMerge";

export default function HeroImg() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/images/hero-light.png";
      break;
    case "dark":
      src = "/images/hero-dark.png";
      break;
    default:
      src = "/images/hero-light.png";
      break;
  }
  return (
    <ContainerTest>
      <Image
        src={src}
        alt="Picture of the product"
        height={720}
        width={1400}
        className="border-default mx-auto h-full rounded-lg border object-cover object-left-top"
        draggable={false}
      />
    </ContainerTest>
  );
}

export function ContainerTest({
  borderRadius = "0.75rem",
  children,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <>
      <div
        className="box relative mt-20 overflow-hidden bg-transparent p-px text-xl"
        style={{
          borderRadius: borderRadius,
        }}
        {...otherProps}>
        <div className="absolute inset-1" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
          <MovingBorder duration={duration} rx="5%" ry="5%">
            <div className="size-24 bg-gradient-to-r from-amber-500 from-0% via-orange-600 via-60% to-amber-400 to-100% opacity-80 sm:size-32" />
          </MovingBorder>
        </div>
        <div
          className="bg-subtle border-default relative flex border p-2"
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
          }}>
          {children}
        </div>
      </div>
    </>
  );
}

export const MovingBorder = ({
  children,
  duration = 12000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute size-full"
        width="100%"
        height="100%"
        {...otherProps}>
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}>
        {children}
      </motion.div>
    </>
  );
};
