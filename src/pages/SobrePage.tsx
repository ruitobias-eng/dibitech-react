import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedNavbar from '../components/AnimatedNavbar';
import '../styles/neumorphism.css';

const SobrePage = () => {
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

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      y: -10,
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3 }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a dibiTech</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossa história, missão e valores que nos guiam na busca pela excelência em soluções tecnológicas.
            </p>
          </motion.div>
          
          {/* História da empresa */}
          <motion.section 
            className="mb-20"
            variants={sectionVariants}
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <motion.div 
                  className="nm-card p-6 relative"
                  whileHover={{ 
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
                  }}
                >
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400">Imagem do Fundador</div>
                  </div>
                  
                  {/* Elementos flutuantes */}
                  <motion.div 
                    className="absolute -top-4 -right-4 nm-icon bg-yellow-500"
                    animate={{ 
                      y: [0, -10, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.352-.035-.696-.1-1.028A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    A dibiTech foi fundada pelo Engenheiro de Computação Rui Tobias Carvalho com o objetivo 
                    de oferecer soluções tecnológicas inovadoras e personalizadas para empresas e indivíduos.
                  </p>
                  <p className="text-gray-600">
                    Com vasta experiência no setor de tecnologia, Rui identificou a necessidade de uma 
                    abordagem mais personalizada e integrada para resolver os desafios tecnológicos 
                    enfrentados por empresas de diversos portes e segmentos.
                  </p>
                  <p className="text-gray-600">
                    Desde sua fundação, a dibiTech tem se destacado pela excelência técnica e pelo 
                    compromisso com a satisfação dos clientes, construindo parcerias duradouras e 
                    entregando soluções que realmente fazem a diferença.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Missão, Visão e Valores */}
          <motion.section 
            className="mb-20"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Missão, Visão e Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Missão",
                  content: "Transformar desafios em oportunidades através da tecnologia, combinando conhecimento técnico avançado com uma abordagem focada nas necessidades específicas de cada cliente.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  title: "Visão",
                  content: "Ser reconhecida como referência em soluções tecnológicas inovadoras, contribuindo para o crescimento e sucesso de nossos clientes através da excelência técnica e do compromisso com resultados.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  title: "Valores",
                  content: "Excelência técnica, inovação constante, foco no cliente, ética e transparência, trabalho em equipe e compromisso com resultados sustentáveis.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="nm-card p-6 text-center"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="nm-icon mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Nossa Equipe */}
          <motion.section 
            className="mb-20"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Equipe Técnica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Profissionais com ampla experiência em engenharia, automação e tecnologia.
              Somos engenheiros apaixonados por tecnologia e inovação. Atuamos com desenvolvimento de sistemas, automação industrial, inteligência artificial e consultoria em TI. Com experiência em projetos públicos e privados, buscamos transformar processos através de soluções eficientes e inteligentes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Rodrigo",
                  position: "Engenharia | Inovação Tecnológica | BI",
                  bio: "Especialista em soluções tecnológicas para engenharia de computação, IoT e sistemas embarcados, com sólida experiência em integração de sistemas, engenharia de computação e análise de dados aplicada ao setor financeiro. Combinando expertise técnica e visão estratégica, atua na interseção entre tecnologia e finanças, entregando projetos com eficiência e inovação."
                },
                {
                  name: "Rui Tobias",
                  position: "Engenharia de Computação | Ciência de Dados | Indústria 4.0",
                  bio: "Expertise Multidisciplinar: Automação Industrial (CLPs, SCADA, Redes Industriais), Engenharia de Software (Java, .NET, Python, Delphi, Bancos de Dados), TI & Infraestrutura (Servidores, Cloud, Cibersegurança), Data Science (Análise de Dados, Machine Learning, IoT), Docência Técnica (Formação de profissionais em tecnologia)."
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  className="nm-card p-6"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-yellow-500 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Diferenciais */}
          <motion.section 
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Nossos Diferenciais</h2>
            
            <div className="nm-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Abordagem Personalizada",
                    description: "Cada projeto é único e recebe atenção personalizada, com soluções desenvolvidas especificamente para atender às necessidades de cada cliente.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    )
                  },
                  {
                    title: "Excelência Técnica",
                    description: "Nossa equipe é formada por profissionais altamente qualificados e em constante atualização com as mais recentes tecnologias do mercado.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Soluções Integradas",
                    description: "Oferecemos soluções completas que integram diferentes tecnologias e áreas de conhecimento, garantindo resultados abrangentes e eficientes.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Suporte Contínuo",
                    description: "Nosso compromisso não termina com a entrega do projeto. Oferecemos suporte contínuo para garantir o sucesso a longo prazo de nossas soluções.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.3 + (index * 0.1), duration: 0.5 }
                    }}
                  >
                    <motion.div 
                      className="nm-icon mr-4 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          
          {/* CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }}
          >
            <div className="nm-card bg-yellow-50 p-8">
              <h2 className="text-2xl font-bold mb-4">Vamos trabalhar juntos?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para discutir como podemos ajudar a transformar seus desafios tecnológicos em oportunidades de crescimento.
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

export default SobrePage;
