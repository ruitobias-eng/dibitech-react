import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedNavbar from '../components/AnimatedNavbar';
import '../styles/neumorphism.css';

const PortfolioPage = () => {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
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

  const filterVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Empresarial",
      description: "Desenvolvimento de um sistema completo de gestão empresarial para uma empresa de médio porte.",
      image: "sistema-gestao.jpg",
      category: "software",
      technologies: ["React", "Node.js", "PostgreSQL"],
      client: "Empresa ABC",
      year: 2024
    },
    {
      id: 2,
      title: "Aplicativo de Delivery",
      description: "Criação de um aplicativo mobile para serviço de delivery de uma rede de restaurantes.",
      image: "app-delivery.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      client: "Restaurantes XYZ",
      year: 2023
    },
    {
      id: 3,
      title: "Infraestrutura em Nuvem",
      description: "Migração da infraestrutura de TI de uma empresa de serviços financeiros para a nuvem.",
      image: "infra-nuvem.jpg",
      category: "infra",
      technologies: ["AWS", "Terraform", "Docker"],
      client: "Financeira DEF",
      year: 2024
    },
    {
      id: 4,
      title: "Sistema de Análise de Dados",
      description: "Desenvolvimento de uma plataforma de análise de dados para uma empresa de varejo.",
      image: "analise-dados.jpg",
      category: "data",
      technologies: ["Python", "Power BI", "SQL Server"],
      client: "Varejo GHI",
      year: 2023
    },
    {
      id: 5,
      title: "Automação Residencial",
      description: "Implementação de um sistema de automação residencial completo para um condomínio de luxo.",
      image: "automacao-residencial.jpg",
      category: "iot",
      technologies: ["IoT", "Raspberry Pi", "MQTT"],
      client: "Condomínio JKL",
      year: 2024
    },
    {
      id: 6,
      title: "Chatbot com IA",
      description: "Desenvolvimento de um chatbot inteligente para atendimento ao cliente de uma empresa de telecomunicações.",
      image: "chatbot-ia.jpg",
      category: "ai",
      technologies: ["NLP", "Python", "TensorFlow"],
      client: "Telecom MNO",
      year: 2023
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'software', label: 'Software' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'infra', label: 'Infraestrutura' },
    { id: 'data', label: 'Dados' },
    { id: 'iot', label: 'IoT' },
    { id: 'ai', label: 'IA' }
  ];

  const testimonials = [
    {
      name: "João Silva",
      position: "Diretor de TI, Empresa ABC",
      testimonial: "A dibiTech superou todas as nossas expectativas. O sistema de gestão que desenvolveram transformou completamente nossos processos internos, aumentando a produtividade em mais de 30%.",
      image: "joao-silva.jpg"
    },
    {
      name: "Maria Oliveira",
      position: "CEO, Startup XYZ",
      testimonial: "Contratar a dibiTech foi a melhor decisão que tomamos. Eles não apenas desenvolveram nosso aplicativo, mas também nos ajudaram a refinar nossa visão de produto.",
      image: "maria-oliveira.jpg"
    },
    {
      name: "Pedro Santos",
      position: "Gerente de Operações, Indústria DEF",
      testimonial: "A solução de automação industrial implementada pela dibiTech reduziu nossos custos operacionais em 25% e praticamente eliminou as paradas não programadas.",
      image: "pedro-santos.jpg"
    },
    {
      name: "Ana Costa",
      position: "Diretora de Marketing, Empresa GHI",
      testimonial: "O sistema de análise de dados desenvolvido pela dibiTech nos permitiu entender melhor nosso público e otimizar nossas campanhas, aumentando o ROI em mais de 40%.",
      image: "ana-costa.jpg"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Portfólio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos e as histórias de sucesso dos nossos clientes.
            </p>
          </motion.div>
          
          {/* Filtros */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={filterVariants}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`nm-button px-4 py-2 ${
                  activeFilter === filter.id ? 'nm-button-primary' : ''
                }`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="nm-card overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative">
                  {/* Imagem do projeto */}
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Imagem: {project.image}</p>
                  </div>
                  
                  {/* Overlay com detalhes */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a 
                      href={`/portfolio/${project.id}`} 
                      className="nm-button nm-button-primary text-center"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver detalhes
                    </motion.a>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Cliente: {project.client}</span>
                    <span>Ano: {project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Depoimentos */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5, duration: 0.6 }
            }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">O que nossos clientes dizem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="nm-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.7 + (index * 0.1), duration: 0.5 }
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }}
          >
            <div className="nm-card bg-yellow-50 p-8">
              <h2 className="text-2xl font-bold mb-4">Vamos trabalhar juntos no seu próximo projeto?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para discutir suas necessidades e descobrir como podemos 
                ajudar a transformar suas ideias em soluções tecnológicas de sucesso.
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
                Iniciar um Projeto
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
