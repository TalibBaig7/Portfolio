import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Talib Baig - Full Stack Developer',
  description: 'Portfolio of Talib Baig, a Full Stack Developer specializing in MERN stack.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="b4e28d7a-6783-41a4-9d7a-03ac5ba3494f"
        />

        <div className="min-h-screen w-full bg-[#020617] relative flex flex-col">
          {/* Dark Sphere Grid Background */}
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              background: "#020617",
              backgroundImage: `
                linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
              `,
              backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            }}
          />

          <Navbar />
          <main className="relative z-10 flex-grow pt-20 pb-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
