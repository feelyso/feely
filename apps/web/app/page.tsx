import Hero from "@components/homepage/hero";
import TrusteBy from "@components/homepage/trusted-by";
import Features from "@components/homepage/features";
import Banner from "@components/homepage/banner";
import Footer from "@components/homepage/footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TrusteBy />
      <Features />
      <Banner />
      <Footer />
    </main>
  );
}
