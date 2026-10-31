import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollToTop } from '../components/utils/ScrollToTop';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-yellow-400 selection:text-zinc-950 font-sans flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};