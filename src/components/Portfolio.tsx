import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

interface PortfolioProps {
  title: string;
  subtitle: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

const ProjectCard = ({ image, title, description, technologies, delay }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className={`nm-card overflow-hidden nm-animate-up nm-delay-${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        {/* Imagem do projeto */}
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">{image}</p>
        </div>
        
        {/* Overlay com detalhes */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href="#" className="nm-button nm-button-primary text-center">
            Ver detalhes
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ title, subtitle }: PortfolioProps) => {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('portfolio-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      image: "Imagem do Projeto",
      title: "Sistema de Gestão Empresarial",
      description: "Desenvolvimento de um sistema completo de gestão empresarial para uma empresa de médio porte.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      category: "software",
      delay: 100
    },
    {
      image: "Imagem do Projeto",
      title: "Aplicativo de Delivery",
      description: "Criação de um aplicativo mobile para serviço de delivery de uma rede de restaurantes.",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      category: "mobile",
      delay: 200
    },
    {
      image: "Imagem do Projeto",
      title: "Infraestrutura em Nuvem",
      description: "Migração da infraestrutura de TI de uma empresa de serviços financeiros para a nuvem.",
      technologies: ["AWS", "Terraform", "Docker"],
      category: "infra",
      delay: 300
    },
    {
      image: "Imagem do Projeto",
      title: "Sistema de Análise de Dados",
      description: "Desenvolvimento de uma plataforma de análise de dados para uma empresa de varejo.",
      technologies: ["Python", "Power BI", "SQL Server"],
      category: "data",
      delay: 400
    },
    {
      image: "Imagem do Projeto",
      title: "Automação Residencial",
      description: "Implementação de um sistema de automação residencial completo para um condomínio de luxo.",
      technologies: ["IoT", "Raspberry Pi", "MQTT"],
      category: "iot",
      delay: 500
    },
    {
      image: "Imagem do Projeto",
      title: "Chatbot com IA",
      description: "Desenvolvimento de um chatbot inteligente para atendimento ao cliente de uma empresa de telecomunicações.",
      technologies: ["NLP", "Python", "TensorFlow"],
      category: "ai",
      delay: 600
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

  return (
    <section id="portfolio-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${visible ? 'nm-animate-down' : 'opacity-0'}`}>
            {title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${visible ? 'nm-animate-down nm-delay-100' : 'opacity-0'}`}>
            {subtitle}
          </p>
        </div>
        
        {/* Filtros */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${visible ? 'nm-animate-up nm-delay-200' : 'opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`nm-button px-4 py-2 ${
                activeFilter === filter.id ? 'nm-button-primary' : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              delay={project.delay}
            />
          ))}
        </div>
        
        {/* Depoimentos */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold mb-8 text-center ${visible ? 'nm-animate-up nm-delay-300' : 'opacity-0'}`}>
            O que nossos clientes dizem
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "João Silva",
                position: "Diretor de TI, Empresa ABC",
                testimonial: "A dibiTech superou todas as nossas expectativas. O sistema de gestão que desenvolveram transformou completamente nossos processos internos, aumentando a produtividade em mais de 30%.",
                delay: 400
              },
              {
                name: "Maria Oliveira",
                position: "CEO, Startup XYZ",
                testimonial: "Contratar a dibiTech foi a melhor decisão que tomamos. Eles não apenas desenvolveram nosso aplicativo, mas também nos ajudaram a refinar nossa visão de produto.",
                delay: 500
              },
              {
                name: "Pedro Santos",
                position: "Gerente de Operações, Indústria DEF",
                testimonial: "A solução de automação industrial implementada pela dibiTech reduziu nossos custos operacionais em 25% e praticamente eliminou as paradas não programadas.",
                delay: 600
              },
              {
                name: "Ana Costa",
                position: "Diretora de Marketing, Empresa GHI",
                testimonial: "O sistema de análise de dados desenvolvido pela dibiTech nos permitiu entender melhor nosso público e otimizar nossas campanhas, aumentando o ROI em mais de 40%.",
                delay: 700
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`nm-card p-6 ${visible ? `nm-animate-up nm-delay-${testimonial.delay}` : 'opacity-0'}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className={`mt-16 text-center ${visible ? 'nm-animate-up nm-delay-800' : 'opacity-0'}`}>
          <div className="nm-card bg-yellow-50 p-8">
            <h3 className="text-2xl font-bold mb-4">Vamos trabalhar juntos no seu próximo projeto?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para discutir suas necessidades e descobrir como podemos 
              ajudar a transformar suas ideias em soluções tecnológicas de sucesso.
            </p>
            <a href="/contato" className="nm-button nm-button-primary">
              Iniciar um Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
