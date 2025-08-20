import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/90 backdrop-blur-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`nm-flat py-2 px-4 ${scrolled ? 'nm-animate-left' : 'nm-animate-down'}`}>
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">dibi</span>
                <span className="text-gray-800">Tech</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {['Início', 'Serviços', 'Sobre Nós', 'Portfólio', 'Contato'].map((item, index) => (
              <a 
                key={item} 
                href={`/${item === 'Início' ? '' : item.toLowerCase().replace(' ', '-')}`}
                className={`nm-button px-4 py-2 nm-animate-down nm-delay-${index * 100}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="nm-button p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 nm-card nm-animate-scale">
            <div className="flex flex-col space-y-2 py-2">
              {['Início', 'Serviços', 'Sobre Nós', 'Portfólio', 'Contato'].map((item, index) => (
                <a 
                  key={item} 
                  href={`/${item === 'Início' ? '' : item.toLowerCase().replace(' ', '-')}`}
                  className={`nm-button text-center py-2 nm-animate-right nm-delay-${index * 100}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
