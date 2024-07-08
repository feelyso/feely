import Navbar from "@components/navbar";
import Hero from "@components/homepage/hero";
import TrusteBy from "@components/homepage/trusted-by";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <TrusteBy />
    </main>
  );
}
