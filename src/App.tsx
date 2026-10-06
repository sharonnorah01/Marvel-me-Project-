/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ShopView } from './components/ShopView';
import { AboutView } from './components/AboutView';
import { ProductDetailView } from './components/ProductDetailView';
import { GiftRecommendationQuizModal } from './components/GiftRecommendationQuiz';
import { ConsultationModal } from './components/ConsultationModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

const MainLayout: React.FC = () => {
  const { currentView, activeProductDetail, setActiveProductDetail } = useCart();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2A26] flex flex-col font-sans selection:bg-[#E8DFC8] selection:text-[#1A1A1A]">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar />

      {/* Primary Page Views */}
      <main className="flex-1">
        {currentView === 'home' && <HomeView />}
        {currentView === 'shop' && <ShopView />}
        {currentView === 'about' && <AboutView />}
      </main>

      {/* Global Modals & Drawers */}
      {activeProductDetail && (
        <ProductDetailView
          product={activeProductDetail}
          onClose={() => setActiveProductDetail(null)}
        />
      )}

      {/* Interactive Gift Recommendation Quiz */}
      <GiftRecommendationQuizModal />

      {/* 1-on-1 Bespoke Stylist Consultation */}
      <ConsultationModal />

      {/* Shopping Bag Slide-Over Drawer */}
      <CartDrawer />

      {/* Seamless Luxury Checkout Process */}
      <CheckoutModal />

      {/* Luxury Brand Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
