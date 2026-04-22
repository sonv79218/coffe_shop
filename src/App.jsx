import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <MenuSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
