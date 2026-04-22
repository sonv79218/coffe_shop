import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to bottom, rgba(61, 74, 62, 0.7), rgba(61, 74, 62, 0.85)),
            url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 16px',
        maxWidth: '896px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            style={{ marginBottom: '32px' }}
          >
            <svg style={{ width: '80px', height: '80px', margin: '0 auto', color: '#D97706' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 21V19H20V21H2ZM20 8V5H22V8C22 9.1 21.1 10 20 10V8ZM18 10H4V17H6V14H8V17H10V14H12V17H14V14H16V17H18V10ZM20 4H4V9H20V4Z" />
            </svg>
          </motion.div>
          
          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '3rem',
            fontWeight: '700',
            color: '#F5F5DC',
            marginBottom: '16px',
          }}>
            Mê Coffee
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.875rem',
              color: 'rgba(245, 245, 220, 0.9)',
              fontStyle: 'italic',
              marginBottom: '8px',
            }}
          >
            Hương Vị Từ Tâm
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontSize: '1.125rem',
              color: 'rgba(245, 245, 220, 0.8)',
              marginBottom: '40px',
              maxWidth: '576px',
              margin: '0 auto 40px',
            }}
          >
            Nơi mỗi tách cà phê là một câu chuyện, mỗi hương vị là một kỷ niệm đáng trân quý
          </motion.p>
          
          <motion.a
            href="#menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#D97706',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)',
              transition: 'all 0.3s ease',
            }}
            className="hero-btn"
          >
            Xem Menu
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <a href="#menu" style={{ color: 'rgba(245, 245, 220, 0.6)', display: 'block' }}>
          <ChevronDown size={32} style={{ animation: 'bounce 2s infinite' }} />
        </a>
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '128px',
        background: 'linear-gradient(to top, #F5F5DC, transparent)',
      }} />

      <style>{`
        .hero-btn:hover {
          background-color: #F59E0B !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 25px rgba(217, 119, 6, 0.4) !important;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
