/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import ToursDirectory from './pages/ToursDirectory';
import TourSingle from './pages/TourSingle';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<ToursDirectory />} />
            <Route path="/tours/:id" element={<TourSingle />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
