import React from 'react';
import { Coffee, MapPin, Phone, Clock } from 'lucide-react';

// Danh sách món đơn giản
const MENU_SAMPLES = [
  { name: "Cà phê Đen", price: "25.000đ", desc: "Đậm đà hương vị truyền thống" },
  { name: "Cà phê Sữa", price: "29.000đ", desc: "Sự kết hợp hoàn hảo với sữa đặc" },
  { name: "Bạc Xỉu", price: "32.000đ", desc: "Dành cho người thích sự ngọt ngào" },
  { name: "Trà Đào Cam Sả", price: "45.000đ", desc: "Thanh mát cho ngày nắng" },
];

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* 1. HEADER / NAVIGATION */}
      <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-xl text-orange-900">
          <Coffee size={28} />
          <span>MỘC CAFE</span>
        </div>
        <div className="space-x-6 hidden md:block font-medium">
          <a href="#menu" className="hover:text-orange-700">Thực đơn</a>
          <a href="#about" className="hover:text-orange-700">Về chúng tôi</a>
          <a href="#contact" className="hover:text-orange-700">Liên hệ</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative h-[70vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cà Phê Nguyên Bản</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">Nơi tìm lại sự thảnh thơi giữa lòng thành phố.</p>
          <a href="#menu" className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 rounded-md transition duration-300">
            Xem Menu Ngay
          </a>
        </div>
      </header>

      {/* 3. MENU SECTION */}
      <section id="menu" className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-orange-200 pb-4">Thực Đơn Tiêu Biểu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {MENU_SAMPLES.map((item, index) => (
            <div key={index} className="flex justify-between items-start border-b border-stone-200 pb-4">
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-stone-500 italic">{item.desc}</p>
              </div>
              <span className="font-bold text-orange-800">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INFO & CONTACT SECTION */}
      <section id="contact" className="bg-stone-900 text-stone-300 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <MapPin className="mb-4 text-orange-500" />
            <h4 className="font-bold text-white mb-2">Địa Chỉ</h4>
            <p>123 Đường Cà Phê, Quận 1, TP. Hồ Chí Minh</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="mb-4 text-orange-500" />
            <h4 className="font-bold text-white mb-2">Mở Cửa</h4>
            <p>07:00 - 22:00 hằng ngày</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="mb-4 text-orange-500" />
            <h4 className="font-bold text-white mb-2">Hotline</h4>
            <p>0123 456 789</p>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="text-center py-8 text-sm text-stone-500 bg-stone-950">
        <p>© 2024 Mộc Cafe - Thiết kế bằng ReactJS</p>
      </footer>

    </div>
  );
}

export default App;