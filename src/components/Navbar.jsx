import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Không gian' },
  { href: '#contact', label: 'Liên hệ' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(245, 245, 220, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <Coffee 
              size={32} 
              color="#D97706" 
              style={{ transition: 'transform 0.3s' }} 
            />
            <span style={{ 
              fontFamily: '"Playfair Display", Georgia, serif', 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#3D4A3E' 
            }}>
              Mê Coffee
            </span>
          </a>

          <div style={{ display: 'flex', gap: '32px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#3D4A3E',
                  fontWeight: '500',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: '8px',
              color: '#3D4A3E'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        style={{ 
          overflow: 'hidden',
          backgroundColor: 'rgba(245, 245, 220, 0.95)',
          backdropFilter: 'blur(8px)',
        }}
        className="mobile-menu"
      >
        <div style={{ padding: '16px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                color: '#3D4A3E',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '12px 0',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: #D97706 !important; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #D97706;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </motion.nav>
  );
}
