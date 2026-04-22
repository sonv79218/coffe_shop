import { motion } from 'framer-motion';

const signatureItems = [
  {
    name: 'Trà Mãng Cầu Nhài',
    desc: 'Best seller với vị chua ngọt đặc trưng',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
  },
  {
    name: 'Phin Di Kem Sữa',
    desc: 'Cà phê phin truyền thống kết hợp kem sữa',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    name: 'Matcha Coconut',
    desc: 'Matcha Nhật Bản với nước dừa tươi',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{
      padding: '80px 16px',
      backgroundColor: '#3D4A3E',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#F5F5DC',
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            Signature Drinks
          </h2>
          <p style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '1.125rem',
            color: 'rgba(245, 245, 220, 0.8)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Những thức uống đặc trưng làm nên thương hiệu Mê Coffee
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              style={{ cursor: 'pointer' }}
              className="gallery-item"
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                aspectRatio: '4/5',
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="gallery-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(61, 74, 62, 0.9) 0%, rgba(61, 74, 62, 0.2) 50%, transparent 100%)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                }}>
                  <h3 style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#F5F5DC',
                    marginBottom: '8px',
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    color: 'rgba(245, 245, 220, 0.8)',
                    fontSize: '0.875rem',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '64px', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(245, 245, 220, 0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            padding: '16px 32px',
          }}>
            <p style={{
              color: '#F5F5DC',
              fontWeight: '500',
            }}>
              <span style={{ color: '#D97706', fontWeight: '700' }}>100%</span> nguyên liệu tươi ngon | Không chất bảo quản | Phục vụ từ tâm
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
