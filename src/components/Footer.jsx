import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{
      backgroundColor: '#4A5A4D',
      padding: '64px 16px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <svg style={{ width: '40px', height: '40px', color: '#D97706' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21V19H20V21H2ZM20 8V5H22V8C22 9.1 21.1 10 20 10V8ZM18 10H4V17H6V14H8V17H10V14H12V17H14V14H16V17H18V10ZM20 4H4V9H20V4Z" />
              </svg>
              <span style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#F5F5DC',
              }}>
                Mê Coffee
              </span>
            </div>
            <p style={{
              color: 'rgba(245, 245, 220, 0.8)',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              Mỗi tách cà phê tại Mê Coffee là một trải nghiệm đầy cảm xúc, 
              được pha chế tỉ mỉ từ những hạt cà phê chất lượng nhất.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'Youtube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 245, 220, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F5F5DC',
                    transition: 'all 0.3s ease',
                  }}
                  className="social-icon"
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#F5F5DC',
              marginBottom: '24px',
            }}>
              Liên Kết Nhanh
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Menu', 'Không gian', 'Về Chúng Tôi', 'Tuyển Dụng'].map((item) => (
                <li key={item}>
                  <a href="#" style={{
                    color: 'rgba(245, 245, 220, 0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#F5F5DC',
              marginBottom: '24px',
            }}>
              Thông Tin Liên Hệ
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(245, 245, 220, 0.8)' }}>
                  123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="#D97706" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(245, 245, 220, 0.8)' }}>0901 234 567</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={20} color="#D97706" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(245, 245, 220, 0.8)' }}>7:00 - 22:00 Mỗi ngày</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            borderTop: '1px solid rgba(245, 245, 220, 0.2)',
            paddingTop: '32px',
            textAlign: 'center',
          }}
        >
          <p style={{
            color: 'rgba(245, 245, 220, 0.6)',
            fontSize: '0.875rem',
          }}>
            © 2026 Mê Coffee. Tất cả quyền được bảo lưu. | Made with ☕ in Vietnam
          </p>
        </motion.div>
      </div>

      <style>{`
        .social-icon:hover {
          background-color: #D97706 !important;
        }
        .footer-link:hover {
          color: #D97706 !important;
        }
      `}</style>
    </footer>
  );
}
