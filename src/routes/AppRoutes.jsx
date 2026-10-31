import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { ServiceDetail } from '../pages/ServiceDetail';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="servicios/:slug" element={<ServiceDetail />} />
        <Route path="proyectos" element={<Portfolio />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};