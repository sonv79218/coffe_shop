import { motion } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';

const menuCategories = [
  {
    id: 'tra-hoa-qua',
    name: 'Trà Hoa Quả',
    items: [
      { name: 'Trà Mãng Cầu Nhài', price: '32.000đ', desc: 'Vị chua ngọt thanh mát từ mãng cầu', best: true, new: false },
      { name: 'Trà Ổi Hồng', price: '28.000đ', desc: 'Thơm lừng, ngọt dịu, mát lạnh', best: false, new: false },
      { name: 'Trà Chanh Gừng', price: '28.000đ', desc: 'Chanh gừng ấm nóng, giải cảm', best: false, new: true },
      { name: 'Trà Vải', price: '30.000đ', desc: 'Hương vị đặc trưng từ vải thiều', best: false, new: false },
      { name: 'Trà Nho', price: '30.000đ', desc: 'Vị chua nhẹ, thanh mát', best: false, new: false },
    ],
  },
  {
    id: 'ca-phe',
    name: 'Cà Phê',
    items: [
      { name: 'Phin Di Kem Sữa', price: '35.000đ', desc: 'Cà phê phin đậm đà, kem sữa béo ngậy', best: true, new: false },
      { name: 'Cà Phê Sữa Đá', price: '25.000đ', desc: 'Công thức truyền thống Việt Nam', best: false, new: false },
      { name: 'Cà Phê Đen Đá', price: '22.000đ', desc: 'Đậm đà, đắng cất', best: false, new: false },
      { name: 'Bạc Xỉu', price: '25.000đ', desc: 'Sữa nhiều, cà phê nhẹ', best: false, new: false },
      { name: 'Cà Phê Trứng', price: '38.000đ', desc: 'Hương vị đặc biệt từ trứng gà', best: false, new: true },
    ],
  },
  {
    id: 'tra-sua',
    name: 'Trà Sữa',
    items: [
      { name: 'Trà Sữa Truyền Thống', price: '28.000đ', desc: 'Trà sữa nguyên chất, béo ngậy', best: false, new: false },
      { name: 'Trà Sữa Ô Long', price: '30.000đ', desc: 'Trà Ô Long hảo hạng', best: false, new: true },
      { name: 'Trà Sữa Matcha', price: '35.000đ', desc: 'Matcha Nhật Bản, kem cheese', best: false, new: false },
      { name: 'Trà Sữa Socola', price: '32.000đ', desc: 'Socola Bỉ nguyên chất', best: false, new: false },
      { name: 'Trà Sữa Khoai Môn', price: '32.000đ', desc: 'Khoai môn tươi, béo ngậy', best: false, new: false },
    ],
  },
  {
    id: 'do-nong',
    name: 'Đồ Nóng',
    items: [
      { name: 'Cà Phê Matcha Nóng', price: '35.000đ', desc: 'Cà phê kết hợp matcha Nhật', best: false, new: true },
      { name: 'Cacao Nóng', price: '30.000đ', desc: 'Cacao nguyên chất, ấm áp', best: false, new: false },
      { name: 'Trà Gừng Nóng', price: '25.000đ', desc: 'Gừng tươi, mật ong', best: false, new: false },
      { name: 'Sữa Tươi Trân Châu Đường Đen', price: '32.000đ', desc: 'Thức uống HOT nhất hiện nay', best: true, new: false },
    ],
  },
  {
    id: 'sua-chua',
    name: 'Sữa Chua',
    items: [
      { name: 'Sữa Chua Mít', price: '28.000đ', desc: 'Sữa chua homemade, mít tươi', best: false, new: false },
      { name: 'Sữa Chua Nha Đam', price: '28.000đ', desc: 'Thanh mát, mát lạnh', best: false, new: false },
      { name: 'Sữa Chua Việt Quất', price: '30.000đ', desc: 'Việt quất tươi, chua ngọt', best: false, new: true },
      { name: 'Sữa Chua Đào', price: '30.000đ', desc: 'Đào hộp, sữa chua béo', best: false, new: false },
    ],
  },
  {
    id: 'nuoc-ep',
    name: 'Nước Ép',
    items: [
      { name: 'Nước Ép Cam', price: '28.000đ', desc: 'Cam tươi vắt, không đường', best: false, new: false },
      { name: 'Nước Ép Cà Rốt', price: '25.000đ', desc: 'Cà rốt tươi, bổ dưỡng', best: false, new: false },
      { name: 'Nước Ép Dưa Hấu', price: '25.000đ', desc: 'Dưa hấu mát lạnh', best: false, new: false },
      { name: 'Sinh Tố Bơ', price: '32.000đ', desc: 'Bơ sáp, sữa tươi', best: false, new: true },
    ],
  },
  {
    id: 'do-an',
    name: 'Đồ Ăn',
    items: [
      { name: 'Bánh Mì Pate', price: '25.000đ', desc: 'Bánh mì giòn, pate béo ngậy', best: false, new: false },
      { name: 'Bánh Cuộn Teriyaki', price: '30.000đ', desc: 'Gà teriyaki, rau tươi', best: false, new: true },
      { name: 'Croissant Bơ Tỏi', price: '28.000đ', desc: 'Croissant giòn, bơ tỏi thơm', best: false, new: false },
      { name: 'Bánh Tiramisu', price: '35.000đ', desc: 'Cà phê, mascarpone', best: true, new: false },
    ],
  },
  {
    id: 'topping',
    name: 'Topping',
    items: [
      { name: 'Trân Châu Đen', price: '5.000đ', desc: 'Trân châu dai mềm', best: false, new: false },
      { name: 'Trân Châu Trắng', price: '5.000đ', desc: 'Trân châu sữa', best: false, new: false },
      { name: 'Thạch Cà Phê', price: '5.000đ', desc: 'Thạch cà phê đậm vị', best: false, new: false },
      { name: 'Pudding Caramel', price: '7.000đ', desc: 'Pudding mềm mịn', best: false, new: true },
      { name: 'Kem Cheese', price: '8.000đ', desc: 'Kem phô mai thơm ngậy', best: false, new: false },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" style={{
      padding: '80px 16px',
      backgroundColor: '#F5F5DC',
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
            color: '#3D4A3E',
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            Thực Đơn
          </h2>
          <p style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '1.125rem',
            color: '#4A5A4D',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Khám phá bộ sưu tập đồ uống và món ăn được chế biến tỉ mỉ từ nguyên liệu tươi ngon nhất
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
              }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(61, 74, 62, 0.2)' }} />
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#3D4A3E',
                  whiteSpace: 'nowrap',
                }}>
                  {category.name}
                </h3>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(61, 74, 62, 0.2)' }} />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    whileHover={{ y: -5 }}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(61, 74, 62, 0.1)',
                      transition: 'all 0.3s ease',
                    }}
                    className="menu-card"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h4 style={{
                          fontFamily: '"Playfair Display", Georgia, serif',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: '#3D4A3E',
                          margin: 0,
                          transition: 'color 0.3s',
                        }} className="item-name">
                          {item.name}
                        </h4>
                        {item.new && (
                          <span style={{
                            backgroundColor: '#D97706',
                            color: 'white',
                            fontSize: '0.625rem',
                            fontWeight: '700',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}>
                            NEW
                          </span>
                        )}
                      </div>
                      {item.best && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: '#D97706',
                          fontSize: '0.875rem',
                        }}>
                          <ThumbsUp size={16} />
                          <span style={{ fontWeight: '600', fontSize: '0.75rem' }}>Best</span>
                        </div>
                      )}
                    </div>
                    <p style={{
                      color: '#4A5A4D',
                      fontSize: '0.875rem',
                      marginBottom: '16px',
                    }}>
                      {item.desc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        color: '#D97706',
                        fontWeight: '700',
                        fontSize: '1.125rem',
                      }}>
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .menu-card:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
          transform: translateY(-5px);
        }
        .menu-card:hover .item-name {
          color: #D97706 !important;
        }
      `}</style>
    </section>
  );
}
