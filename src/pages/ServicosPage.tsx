import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedNavbar from '../components/AnimatedNavbar';
import '../styles/neumorphism.css';

const ServicosPage = () => {
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

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
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

  const servicos = [
    {
      id: "desenvolvimento",
      title: "Desenvolvimento de Software e Aplicações",
      description: "Criamos softwares personalizados, aplicações web e mobile, APIs e jogos digitais para atender às necessidades específicas do seu negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      items: [
        "Software personalizado para empresas",
        "Aplicações web responsivas e modernas",
        "Aplicativos mobile para Android e iOS",
        "Desenvolvimento de APIs e integrações",
        "Jogos digitais para diversas plataformas"
      ]
    },
    {
      id: "infraestrutura",
      title: "Infraestrutura e Redes",
      description: "Oferecemos consultoria em infraestrutura de TI, implementação e gerenciamento de redes, segurança da informação e soluções em cloud computing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      items: [
        "Consultoria em infraestrutura de TI",
        "Implementação e gerenciamento de redes",
        "Soluções de segurança da informação",
        "Serviços de cloud computing",
        "Virtualização e containers"
      ]
    },
    {
      id: "dados",
      title: "Dados e Inteligência Artificial",
      description: "Desenvolvemos soluções de análise e visualização de dados, inteligência artificial, machine learning e engenharia de dados para impulsionar seu negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      items: [
        "Análise e visualização de dados",
        "Desenvolvimento de modelos de machine learning",
        "Sistemas de recomendação e previsão",
        "Processamento de linguagem natural",
        "Engenharia de dados e ETL"
      ]
    },
    {
      id: "consultoria",
      title: "Consultoria e Treinamento",
      description: "Oferecemos consultoria especializada em TI e treinamentos personalizados para capacitar sua equipe nas mais recentes tecnologias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      items: [
        "Consultoria em tecnologia da informação",
        "Treinamentos personalizados para equipes",
        "Workshops sobre novas tecnologias",
        "Mentoria para equipes de desenvolvimento",
        "Auditoria de processos e sistemas"
      ]
    },
    {
      id: "automacao",
      title: "Automação e IoT",
      description: "Automatize processos e conecte dispositivos com nossas soluções de automação e Internet das Coisas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      items: [
        "Automação de processos empresariais",
        "Desenvolvimento de soluções IoT",
        "Sistemas de monitoramento remoto",
        "Automação industrial e residencial",
        "Integração de dispositivos inteligentes"
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços de engenharia de computação para atender às necessidades específicas do seu negócio.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {servicos.map((servico) => (
              <motion.div 
                key={servico.id}
                id={servico.id}
                className="nm-card p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <motion.div 
                    className="nm-icon w-24 h-24 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {servico.icon}
                  </motion.div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{servico.title}</h2>
                    <p className="text-gray-600 mb-6 text-center md:text-left">{servico.description}</p>
                    
                    <div className="bg-gray-100 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">O que oferecemos:</h3>
                      <ul className="space-y-2">
                        {servico.items.map((item, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: 0.3 + (i * 0.1), duration: 0.5 }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 text-center md:text-left">
                      <motion.a 
                        href={`/servicos/${servico.id}`}
                        className="nm-button nm-button-primary inline-block"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Saiba mais sobre {servico.title}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.6, type: "spring" }
            }}
          >
            <div className="nm-card bg-yellow-50 p-8">
              <h2 className="text-2xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para discutir suas necessidades específicas e descobrir como podemos ajudar a transformar suas ideias em soluções tecnológicas de sucesso.
              </p>
              <motion.a 
                href="/contato"
                className="nm-button nm-button-primary inline-block"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicosPage;
