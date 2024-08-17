import Banner from "@/components/common/Banner/Banner";
import DemoDrive from "@/components/common/DemoDrive/DemoDrive";
import Features from "@/components/common/Features/Features";
import Fleet from "@/components/common/Fleet/Fleet";
import { Navbar } from "@/components/common/Navbar/Navbar";
import Slider from "@/components/common/Slider/Slider";
import { currentUser } from "@clerk/nextjs/server";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner
        title="Premium Rental Cars"
        description="Experience the Pinnacle of Elegance: Rent Luxury 
          Cars That Define Prestige and Performance. Indulge in Unmatched 
          Comfort and Style with Our Exclusive Fleet. Discover Your Perfect Drive Today."
        img="/images/legacyx-1.png"
      />
      <Slider />
      <Features />
      <Fleet />
      <DemoDrive />
    </div>
  );
}
