import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type FloatingAccentProps = {
  className: string;
  rangeXVw?: number;
  rangeYVh?: number;
  minScale?: number;
  maxScale?: number;
  minDelayMs?: number;
  maxDelayMs?: number;
};

type AccentTarget = {
  x: string;
  y: string;
  scale: number;
};

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const getRandomTarget = (
  rangeXVw: number,
  rangeYVh: number,
  minScale: number,
  maxScale: number,
): AccentTarget => ({
  x: `${randomBetween(-rangeXVw, rangeXVw)}vw`,
  y: `${randomBetween(-rangeYVh, rangeYVh)}vh`,
  scale: randomBetween(minScale, maxScale),
});

export function FloatingAccent({
  className,
  rangeXVw = 42,
  rangeYVh = 30,
  minScale = 0.92,
  maxScale = 1.08,
  minDelayMs = 2800,
  maxDelayMs = 3400,
}: FloatingAccentProps) {
  const reduceMotion = useReducedMotion();
  const [target, setTarget] = useState<AccentTarget>({
    x: "0vw",
    y: "0vh",
    scale: 1,
  });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const move = () => {
      setTarget(getRandomTarget(rangeXVw, rangeYVh, minScale, maxScale));
      timeoutId = setTimeout(move, randomBetween(minDelayMs, maxDelayMs));
    };

    move();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [
    maxDelayMs,
    maxScale,
    minDelayMs,
    minScale,
    rangeXVw,
    rangeYVh,
    reduceMotion,
  ]);

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none rounded-full blur-3xl opacity-50 ${className}`}
      animate={reduceMotion ? undefined : target}
      transition={
        reduceMotion
          ? undefined
          : { type: "spring", stiffness: 24, damping: 16, mass: 1.8 }
      }
    />
  );
}
