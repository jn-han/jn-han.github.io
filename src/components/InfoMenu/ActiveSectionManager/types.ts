import { useState, useEffect } from "react";
import { useInView } from "framer-motion";

export function useActiveSection(
  expRef: React.RefObject<HTMLElement>,
  eduRef: React.RefObject<HTMLElement>,
  projRef: React.RefObject<HTMLElement>
) {
  const expInView = useInView(expRef, { amount: 0.4 });
  const eduInView = useInView(eduRef, { amount: 0.4 });
  const projInView = useInView(projRef, { amount: 0.4 });

  const [active, setActive] = useState<
    "Experience" | "Education" | "Projects" | null
  >(null);

  useEffect(() => {
    if (expInView) setActive("Experience");
    else if (eduInView) setActive("Education");
    else if (projInView) setActive("Projects");
    else setActive(null);
  }, [expInView, eduInView, projInView]);

  return active;
}
