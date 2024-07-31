import React from "react";

export default function GridBackground() {
  return (
    <div className="bg-grid-[#000000]/[.05] dark:bg-grid-[#ffffff]/[.05] absolute left-0 top-0 z-10 h-full w-screen">
      <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    </div>
  );
}
