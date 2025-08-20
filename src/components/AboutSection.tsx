import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

interface AboutSectionProps {
  title: string;
  subtitle: string;
}

const AboutSection = ({ title, subtitle }: AboutSectionProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${visible ? 'nm-animate-down' : 'opacity-0'}`}>
            {title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${visible ? 'nm-animate-down nm-delay-100' : 'opacity-0'}`}>
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Imagem/Card à esquerda */}
          <div className={`w-full md:w-1/2 ${visible ? 'nm-animate-left' : 'opacity-0'}`}>
            <div className="nm-card p-6 relative">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-400">Imagem do Fundador</div>
              </div>
              
              {/* Elementos flutuantes */}
              <div className={`absolute -top-4 -right-4 nm-icon bg-yellow-500 ${visible ? 'nm-animate-scale nm-delay-300' : 'opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.352-.035-.696-.1-1.028A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Texto à direita */}
          <div className="w-full md:w-1/2">
            <div className={`mb-8 ${visible ? 'nm-animate-right nm-delay-200' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
              <p className="text-gray-600 mb-4">
                A dibiTech foi fundada pelo Engenheiro de Computação Rui Tobias Carvalho com o objetivo 
                de oferecer soluções tecnológicas inovadoras e personalizadas para empresas e indivíduos.
              </p>
              <p className="text-gray-600">
                Com vasta experiência no setor de tecnologia, Rui identificou a necessidade de uma 
                abordagem mais personalizada e integrada para resolver os desafios tecnológicos 
                enfrentados por empresas de diversos portes e segmentos.
              </p>
            </div>
            
            <div className={`${visible ? 'nm-animate-right nm-delay-300' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <div className="nm-inset p-6 mb-4">
                <p className="text-gray-600 italic">
                  "Transformar desafios em oportunidades através da tecnologia, combinando conhecimento 
                  técnico avançado com uma abordagem focada nas necessidades específicas de cada cliente."
                </p>
              </div>
              <a href="/sobre" className="nm-button inline-block">Conheça mais sobre nós</a>
            </div>
          </div>
        </div>
        
        {/* Valores em cards neumórficos */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold mb-8 text-center ${visible ? 'nm-animate-up nm-delay-400' : 'opacity-0'}`}>
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Excelência Técnica",
                description: "Buscamos sempre o mais alto padrão de qualidade em nossas soluções tecnológicas.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 500
              },
              {
                title: "Inovação Constante",
                description: "Estamos sempre atualizados com as mais recentes tecnologias e tendências do mercado.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                ),
                delay: 600
              },
              {
                title: "Foco no Cliente",
                description: "Colocamos as necessidades e objetivos dos nossos clientes no centro de tudo o que fazemos.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 700
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`nm-card p-6 text-center ${visible ? `nm-animate-up nm-delay-${value.delay}` : 'opacity-0'}`}
              >
                <div className="nm-icon mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
