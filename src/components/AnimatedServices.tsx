import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const AnimatedServiceCard = ({ icon, title, description, link, index }: ServiceCardProps) => {
  const [hovered, setHovered] = useState(false);
  
  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 50
      }
    },
    hover: { 
      y: -10,
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3 }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { 
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 + 0.5, duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#FFD700",
      color: "#1A1A1A",
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <motion.div 
      className="nm-card relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-6">
        <motion.div 
          className="nm-icon mb-6 mx-auto bg-yellow-50"
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold mb-3 text-center"
          animate={{ 
            color: hovered ? "#FFD700" : "#1A1A1A",
            transition: { duration: 0.3 }
          }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 mb-6 text-center"
          animate={{ opacity: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        
        <div className="text-center">
          <motion.a 
            href={link} 
            className="nm-button inline-block"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Saiba mais
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

interface ServicesProps {
  title: string;
  subtitle: string;
}

const AnimatedServices = ({ title, subtitle }: ServicesProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
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

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      title: "Desenvolvimento de Software",
      description: "Criamos softwares personalizados, aplicações web e mobile, APIs e jogos digitais para atender às necessidades específicas do seu negócio.",
      link: "/servicos/desenvolvimento"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Infraestrutura e Redes",
      description: "Oferecemos consultoria em infraestrutura de TI, implementação e gerenciamento de redes, segurança da informação e soluções em cloud computing.",
      link: "/servicos/infraestrutura"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      title: "Dados e Inteligência Artificial",
      description: "Desenvolvemos soluções de análise e visualização de dados, inteligência artificial, machine learning e engenharia de dados para impulsionar seu negócio.",
      link: "/servicos/dados"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: "Consultoria e Treinamento",
      description: "Oferecemos consultoria especializada em TI e treinamentos personalizados para capacitar sua equipe nas mais recentes tecnologias.",
      link: "/servicos/consultoria"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      title: "Automação e IoT",
      description: "Desenvolvemos soluções de automação para otimizar processos e implementamos projetos de Internet das Coisas (IoT) para conectar seus dispositivos.",
      link: "/servicos/automacao"
    }
  ];

  const ctaButtonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.6, type: "spring" }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={titleVariants}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.a 
            href="/servicos" 
            className="nm-button nm-button-primary"
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Ver Todos os Serviços
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedServices;
