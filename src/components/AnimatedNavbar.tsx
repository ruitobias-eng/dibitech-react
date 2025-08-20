import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

const AnimatedNavbar = () => {
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

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-white/90 backdrop-blur-sm shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            variants={logoVariants}
            className="nm-flat py-2 px-4"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">dibi</span>
                <span className="text-gray-800">Tech</span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex space-x-2"
            variants={navVariants}
          >
            {['Início', 'Serviços', 'Sobre Nós', 'Portfólio', 'Contato'].map((item) => (
              <motion.a 
                key={item} 
                href={`/${item === 'Início' ? '' : item.toLowerCase().replace(' ', '-')}`}
                variants={itemVariants}
                className="nm-button px-4 py-2"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.9)"
                }}
                whileTap={{ scale: 0.95, y: 0 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              className="nm-button p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
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
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="nm-card">
              <div className="flex flex-col space-y-2 py-2">
                {['Início', 'Serviços', 'Sobre Nós', 'Portfólio', 'Contato'].map((item) => (
                  <motion.a 
                    key={item} 
                    href={`/${item === 'Início' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    variants={itemVariants}
                    className="nm-button text-center py-2"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default AnimatedNavbar;
