import DreamCollegeHero from "@/components/ui/DreamCollegeHero";
import JoinMentorshipHero from "@/components/ui/JoinMentorshipHero";
import ResourcesSection from "@/components/ui/resourcessection";
import SuccessStories from "@/components/ui/SuccessStories";
import TestSeriesHero from "@/components/ui/TestSeriesHero";
import WhyChoose from "@/components/ui/WhyChoose";

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr Students",
            "url": "https://drstudents.com",
            "logo": "https://drstudents.com/drstudents.png",
            "sameAs": [
              "https://www.facebook.com/drstudents",
              "https://twitter.com/drstudents",
              "https://www.instagram.com/drstudents"
            ],
            "description": "Your trusted partner for Medical and Engineering college admissions, mentorship, and career guidance."
          }),
        }}
      />
      <DreamCollegeHero />
      <WhyChoose />
      <TestSeriesHero />
      <SuccessStories />
      <JoinMentorshipHero />
      <ResourcesSection />

    </div>
  );
}
