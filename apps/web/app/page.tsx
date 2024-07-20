import Navbar from "@components/homepage/navbar";
import Hero from "@components/homepage/hero";
import TrustedBy from "@components/homepage/trusted-by";
import Features from "@components/homepage/features";
import Banner from "@components/homepage/banner";
import Footer from "@components/homepage/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <Hero />
        <TrustedBy />
      </div>
      <Features />
      <Banner />
      <Footer />
    </main>
  );
}
