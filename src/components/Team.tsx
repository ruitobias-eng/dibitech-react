"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TeamMember {
  initials: string;
  name: string;
  roles: string;
  description: string;
  delay: number;
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const Team = ({
  title = "Nossa Equipe",
  subtitle = "Profissionais especializados em diversas áreas da tecnologia",
  description = "Nossa equipe multidisciplinar combina expertise técnica com visão estratégica para entregar soluções inovadoras e de alta qualidade."
}: TeamProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('team-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const teamMembers: TeamMember[] = [
    {
      initials: "RC",
      name: "Rodrigo Costa",
      roles: "Engenharia | Inovação Tecnológica | BI",
      description: "Especialista em soluções tecnológicas para engenharia de computação, IoT e sistemas embarcados, com sólida experiência em integração de sistemas, engenharia de computação e análise de dados aplicada ao setor financeiro.",
      delay: 100
    },
    {
      initials: "RT",
      name: "Rui Tobias",
      roles: "Engenharia de Computação | Ciência de Dados | Indústria 4.0",
      description: "Expertise Multidisciplinar: Automação Industrial (CLPs, SCADA, Redes Industriais), Engenharia de Software (Java, .NET, Python, Delphi, Bancos de Dados), TI & Infraestrutura (Servidores, Cloud, Cibersegurança).",
      delay: 200
    },
    {
      initials: "MS",
      name: "Mariana Silva",
      roles: "UX/UI Design | Frontend Development",
      description: "Especialista em criar experiências de usuário intuitivas e interfaces modernas, com foco em usabilidade e acessibilidade para aplicações web e mobile.",
      delay: 300
    },
    {
      initials: "PL",
      name: "Pedro Lima",
      roles: "DevOps | Cloud Infrastructure | Security",
      description: "Arquiteto de soluções em nuvem com expertise em implementação de pipelines CI/CD, automação de infraestrutura e implementação de medidas de segurança em ambientes cloud.",
      delay: 400
    }
  ];

  return (
    <section id="team-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${visible ? 'nm-animate-down' : 'opacity-0'}`}>
            {title}
          </h2>
          <p className={`text-xl text-gray-600 mb-4 ${visible ? 'nm-animate-down nm-delay-100' : 'opacity-0'}`}>
            {subtitle}
          </p>
          <p className={`text-gray-600 max-w-2xl mx-auto ${visible ? 'nm-animate-down nm-delay-200' : 'opacity-0'}`}>
            {description}
          </p>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className={`nm-card p-6 text-center ${visible ? `nm-animate-up nm-delay-${member.delay}` : 'opacity-0'}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 nm-inset rounded-full flex items-center justify-center bg-blue-100">
                <span className="text-blue-800 text-xl font-bold">{member.initials}</span>
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              
              {/* Roles */}
              <p className="text-blue-600 text-sm font-medium mb-4">{member.roles}</p>
              
              {/* Description */}
              <p className="text-gray-600 text-sm">{member.description}</p>
              
              {/* Social Links */}
              <div className="flex justify-center mt-6 space-x-3">
                <a href="#" className="nm-button-small nm-button-primary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="nm-button-small nm-button-primary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="nm-button-small nm-button-primary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className={`mt-16 text-center ${visible ? 'nm-animate-up nm-delay-500' : 'opacity-0'}`}>
          <div className="nm-card bg-blue-50 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Quer fazer parte do nosso time?</h3>
            <p className="text-gray-600 mb-6">
              Estamos sempre em busca de talentos excepcionais. Se você é apaixonado por tecnologia
              e inovação, envie seu currículo e venha crescer conosco.
            </p>
            <a href="/carreiras" className="nm-button nm-button-primary">
              Enviar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;