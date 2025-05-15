import { useState, useEffect } from "react";
import { useInView } from "framer-motion";

export function useActiveSection<T extends string>(
  refs: Record<T, React.RefObject<HTMLElement>>
) {
  const [active, setActive] = useState<T | null>(null);

  const inViews = (
    Object.entries(refs) as [T, React.RefObject<HTMLElement>][]
  ).map(([key, ref]) => ({ key, inView: useInView(ref, { amount: 0.4 }) }));

  useEffect(
    () => {
      for (let { key, inView } of inViews) {
        if (inView) {
          setActive(key);
          return;
        }
      }
      setActive(null);
    },
    inViews.map((v) => v.inView)
  );

  return active;
}
