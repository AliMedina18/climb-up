import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { StatsSection } from '@/app/components/StatsSection';
import { DashboardPreview } from '@/app/components/DashboardPreview';
import { CaseStudiesSection } from '@/app/components/CaseStudiesSection';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <DashboardPreview />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
}
