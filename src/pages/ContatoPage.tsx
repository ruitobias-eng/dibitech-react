import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedNavbar from '../components/AnimatedNavbar';
import AnimatedContactForm from '../components/AnimatedContactForm';
import '../styles/neumorphism.css';

const ContatoPage = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      variants={pageVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <AnimatedNavbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={titleVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para ajudar a transformar suas ideias em soluções tecnológicas de sucesso.
              Entre em contato conosco para discutir seu próximo projeto.
            </p>
          </motion.div>
          
          <AnimatedContactForm 
            title="Fale Conosco" 
            subtitle="Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContatoPage;
