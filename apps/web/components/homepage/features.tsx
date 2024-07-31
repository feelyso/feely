import React from "react";
import {
  FifthBlock,
  FirstBlock,
  FourthBlock,
  SecondBlock,
  SixthBlock,
  ThirdBlock,
} from "@components/homepage/features/blocks";

export default function Features() {
  return (
    <section id="features" className="w-screen">
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
    </section>
  );
}
