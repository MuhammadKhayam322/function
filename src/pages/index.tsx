// app/layout.tsx or app/page.tsx
import HeroSection from '@/components/HeroSection';
import Navbar from '../components/Navbar';
import OtherPage from './other';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mt-44">
        {/* Dummy content for scroll */}
        <div className=" rounded-lg">
          <OtherPage />
        </div>
       <HeroSection /> 
      </main>
    </>
  );
}

