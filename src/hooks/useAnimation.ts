import { useEffect } from "react";
import { gsap } from "gsap";

const useAnimation = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
        },
        opacity: 0.6,
        y: 80,
        duration: 1,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useAnimation;
