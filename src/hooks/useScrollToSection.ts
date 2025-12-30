// hooks/useScrollToSection.ts
import { useLenis } from "lenis/react";

export function useScrollToSection(
  closeMenu?: () => void,
  setActive?: (id: string) => void
) {
  const lenis = useLenis();

  return (id: string) =>
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (!el) return;

      lenis?.scrollTo(el, {
        offset: -100,
        duration: 1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });

      closeMenu?.();
      setActive?.(id);
    };
}
