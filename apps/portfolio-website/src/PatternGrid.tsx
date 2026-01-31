"use client";
import React, { useLayoutEffect, useRef } from "react";

export default function PatternGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const update = () => {
      const gridRect = grid.getBoundingClientRect();
      const cards = grid.querySelectorAll<HTMLElement>("[data-pattern-card]");

      // set shared "sheet" size (grid size)
      grid.style.setProperty("--sheet-w", `${gridRect.width}px`);
      grid.style.setProperty("--sheet-h", `${gridRect.height}px`);

      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const x = r.left - gridRect.left;
        const y = r.top - gridRect.top;

        // each card offsets into the same sheet
        card.style.setProperty("--bg-x", `-${x}px`);
        card.style.setProperty("--bg-y", `-${y}px`);
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(grid);

    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="relative max-w-7xl mx-auto z-[2] px-4 py-8 grid grid-cols-4 auto-rows-[180px] gap-6"
    >
      {children}
    </div>
  );
}
