import React from "react";
import { GridBackground } from "@components/waitlist/grid-background";
import WaitlistForm from "@components/waitlist/waitlist-form";

const Waitlist = () => {
  return (
    <>
      <WaitlistForm />
      <GridBackground />
    </>
  );
};

export default Waitlist;
