import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

interface ContactFormProps {
  title: string;
  subtitle: string;
}

const ContactForm = ({ title, subtitle }: ContactFormProps) => {
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

  return (
    <section id="contact-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${visible ? 'nm-animate-down' : 'opacity-0'}`}>
            {title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${visible ? 'nm-animate-down nm-delay-100' : 'opacity-0'}`}>
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Informações de contato */}
          <div className={`w-full lg:w-1/3 ${visible ? 'nm-animate-left' : 'opacity-0'}`}>
            <div className="nm-card p-6">
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="nm-icon mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-600">contato@dibitech.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="nm-icon mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefone</h4>
                    <p className="text-gray-600">(00) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="nm-icon mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Tecnologia, 1000<br />
                      Centro, Cidade - Estado<br />
                      CEP: 00000-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="nm-icon mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulário de contato */}
          <div className={`w-full lg:w-2/3 ${visible ? 'nm-animate-right' : 'opacity-0'}`}>
            <div className="nm-card p-6">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
              {formSubmitted ? (
                <div className="nm-card bg-green-50 p-6 text-center nm-animate-scale">
                  <div className="nm-icon mx-auto mb-4 bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-700 mb-2">Mensagem Enviada!</h4>
                  <p className="text-green-600">Agradecemos seu contato. Retornaremos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="nm-input"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="nm-input"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="nm-input"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="nm-input"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Serviço de Interesse</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="nm-input"
                    >
                      <option value="Informações Gerais">Informações Gerais</option>
                      <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                      <option value="Infraestrutura e Redes">Infraestrutura e Redes</option>
                      <option value="Dados e Inteligência Artificial">Dados e Inteligência Artificial</option>
                      <option value="Consultoria e Treinamento">Consultoria e Treinamento</option>
                      <option value="Automação e IoT">Automação e IoT</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="nm-input"
                      placeholder="Descreva seu projeto ou dúvida..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="nm-button nm-button-primary">
                      Enviar Mensagem
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Mapa */}
        <div className={`mt-16 ${visible ? 'nm-animate-up nm-delay-300' : 'opacity-0'}`}>
          <div className="nm-card p-2">
            <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa da Localização</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
