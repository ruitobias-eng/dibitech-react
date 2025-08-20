import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const footer = document.getElementById('footer-section');
    if (footer) {
      observer.observe(footer);
    }
    
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer id="footer-section" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Logo e informações da empresa */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">dibi</span>
                <span className="text-white">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              DiBi Tech - Especialista em engenharia de automação e Indústria 4.0, transformando desafios
              em soluções inteligentes.
            </p>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <motion.a 
                  key={social} 
                  href={`#${social}`} 
                  className="nm-icon bg-gray-800 hover:bg-yellow-500 transition-colors duration-300 w-10 h-10"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-xs">{social.charAt(0).toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Empresa */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Empresa</h3>
            <ul className="space-y-2">
              {[
                { name: 'Equipe', href: '/sobre' },
                { name: 'Contato', href: '/contato' }
              ].map((item) => (
                <motion.li 
                  key={item.name}
                  variants={itemVariants}
                >
                  <motion.a 
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>         
          {/* Serviços */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Nossos Serviços</h3>
            <ul className="space-y-2">
              {[
                'Automação de Processos',
                'Desenvolvimento de Sistemas',
                'Infraestrutura de TI',
                'Ciência de Dados e ML',
                'Educação e Treinamento'
              ].map((service) => (
                <motion.li 
                  key={service}
                  variants={itemVariants}
                >
                  <motion.a 
                    href={`/servicos/${service.toLowerCase().replace(/ e /g, '-').replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contato */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">Contato</h3>
            <ul className="space-y-2">
              <motion.li variants={itemVariants}>
                <p className="text-gray-400">(15) 98100-9064</p>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="text-gray-400">engenharia@dibitech.com.br</p>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="text-gray-400">Apiaí, SP</p>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#linkedin" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  LinkedIn
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.hr 
          className="border-gray-800 my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: visible ? 1 : 0, 
            scaleX: visible ? 1 : 0,
            transition: { delay: 0.5, duration: 0.8 }
          }}
        />
        
        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p 
            className="text-gray-400 mb-4 md:mb-0"
            variants={itemVariants}
          >
            &copy; 2025 Rui & Rodrigo Carvalho. Todos os direitos reservados. Design: HTML5 UP
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#termos" 
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Termos de Uso
            </motion.a>
            <motion.a 
              href="#privacidade" 
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Política de Privacidade
            </motion.a>
            <motion.a 
              href="#cookies" 
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
