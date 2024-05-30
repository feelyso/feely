// Import core
// Import custom

export function GridBackground() {
  return (
    <div className="bg-grid-[#000000]/[.08] dark:bg-grid-[#ffffff]/[.08] absolute left-0 top-0 z-0 h-screen w-screen">
      {/* Radial gradient for the container to give a faded look */}
      <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    </div>
  );
}
