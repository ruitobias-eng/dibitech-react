import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

interface ContactFormProps {
  title: string;
  subtitle: string;
}

const AnimatedContactForm = ({ title, subtitle }: ContactFormProps) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Informações Gerais',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('contact-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio do formulário
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset após 3 segundos
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Informações Gerais',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

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
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 100
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
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const leftSideVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 50
      }
    }
  };

  const rightSideVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 50
      }
    }
  };

  const inputVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    focus: { 
      boxShadow: "inset 3px 3px 6px rgba(0, 0, 0, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.7)",
      scale: 0.99,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const successVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-gray-50">
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
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Informações de contato */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={leftSideVariants}
          >
            <motion.div 
              className="nm-card p-6"
              variants={cardVariants}
              whileHover={{ 
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    ),
                    title: "Email",
                    content: "contato@dibitech.com.br",
                    delay: 0.1
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    ),
                    title: "Telefone",
                    content: "(00) 1234-5678",
                    delay: 0.2
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Endereço",
                    content: "Av. Tecnologia, 1000\nCentro, Cidade - Estado\nCEP: 00000-000",
                    delay: 0.3
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Horário de Atendimento",
                    content: "Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h",
                    delay: 0.4
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: item.delay, duration: 0.5 }
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
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Formulário de contato */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={rightSideVariants}
          >
            <motion.div 
              className="nm-card p-6"
              variants={cardVariants}
              whileHover={{ 
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8)"
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
              {formSubmitted ? (
                <motion.div 
                  className="nm-card bg-green-50 p-6 text-center"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="nm-icon mx-auto mb-4 bg-green-500"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 0.8,
                      repeat: 1,
                      repeatType: "reverse"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <motion.h4 
                    className="text-xl font-bold text-green-700 mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Mensagem Enviada!
                  </motion.h4>
                  <motion.p 
                    className="text-green-600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Agradecemos seu contato. Retornaremos em breve.
                  </motion.p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        label: "Nome Completo *",
                        type: "text",
                        name: "name",
                        value: formData.name,
                        placeholder: "Seu nome",
                        required: true,
                        index: 0
                      },
                      {
                        label: "Email *",
                        type: "email",
                        name: "email",
                        value: formData.email,
                        placeholder: "seu.email@exemplo.com",
                        required: true,
                        index: 1
                      },
                      {
                        label: "Telefone",
                        type: "tel",
                        name: "phone",
                        value: formData.phone,
                        placeholder: "(00) 00000-0000",
                        required: false,
                        index: 2
                      },
                      {
                        label: "Empresa",
                        type: "text",
                        name: "company",
                        value: formData.company,
                        placeholder: "Nome da sua empresa",
                        required: false,
                        index: 3
                      }
                    ].map((field, idx) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-gray-700 font-medium mb-2">{field.label}</label>
                        <motion.input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={field.value}
                          onChange={handleChange}
                          required={field.required}
                          className="nm-input"
                          placeholder={field.placeholder}
                          variants={inputVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: idx * 0.1 }}
                          whileFocus="focus"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Serviço de Interesse</label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="nm-input"
                      whileFocus="focus"
                    >
                      <option value="Informações Gerais">Informações Gerais</option>
                      <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                      <option value="Infraestrutura e Redes">Infraestrutura e Redes</option>
                      <option value="Dados e Inteligência Artificial">Dados e Inteligência Artificial</option>
                      <option value="Consultoria e Treinamento">Consultoria e Treinamento</option>
                      <option value="Automação e IoT">Automação e IoT</option>
                    </motion.select>
                  </motion.div>
                  
                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="nm-input"
                      placeholder="Descreva seu projeto ou dúvida..."
                      whileFocus="focus"
                    ></motion.textarea>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.button 
                      type="submit"
                      className="nm-button nm-button-primary px-8 py-3"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Enviar Mensagem
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedContactForm;
