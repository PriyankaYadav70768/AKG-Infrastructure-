import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Expertise } from './pages/Expertise';
import { Projects } from './pages/Projects';
import { Industries } from './pages/Industries';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper displaying standard header, and conditional footer
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] dark:bg-[#0A121E] text-[#1F242A] dark:text-[#E6EAF0] transition-colors duration-200">
      <Header />
      <main className="flex-grow flex flex-col">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

