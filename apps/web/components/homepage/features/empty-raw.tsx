import React from "react";

export default function EmptyRaw() {
  return (
    <div className="border-secondary h-20 w-full border-b">
      <div className="border-secondary mx-auto grid size-full max-w-screen-lg grid-cols-1 gap-4 border-x px-4 md:grid-cols-3">
        <div className="border-secondary size-full border-x"></div>
        <div className="border-secondary hidden size-full border-x md:flex"></div>
        <div className="border-secondary hidden size-full border-x md:flex"></div>
      </div>
    </div>
  );
}
