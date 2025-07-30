// app/layout.tsx or app/page.tsx
import Navbar from '../components/Navbar';
import OtherPage from './other';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mt-44">
        {/* Dummy content for scroll */}
        <div className="h-[2000px] bg-gradient-to-b from-gray-100 to-white p-6">
          <OtherPage />
        </div>
      </main>
    </>
  );
}

