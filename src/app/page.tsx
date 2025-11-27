import DreamCollegeHero from "@/components/ui/DreamCollegeHero";
import JoinMentorshipHero from "@/components/ui/JoinMentorshipHero";
import ResourcesSection from "@/components/ui/resourcessection";
import SuccessStories from "@/components/ui/SuccessStories";
import TestSeriesHero from "@/components/ui/TestSeriesHero";
import WhyChoose from "@/components/ui/WhyChoose";

export default function Home() {
  return (
    <div>
      <DreamCollegeHero/>
      <WhyChoose/>
      <TestSeriesHero/>
      <SuccessStories/>
      <JoinMentorshipHero/>
      <ResourcesSection/>

    </div>
  );
}
