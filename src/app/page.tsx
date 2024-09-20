import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import BeReadyComponent from "@/components/ReadySection/BeReadyComponent";
import ReadySection from "@/components/ReadySection/ReadySection";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <ReadySection></ReadySection>
      <BeReadyComponent></BeReadyComponent>
    </div>
  );
}
