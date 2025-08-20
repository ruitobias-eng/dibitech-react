import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"
import AnimatedNavbar from "./components/AnimatedNavbar"
import AnimatedHero from "./components/AnimatedHero"
import AnimatedServices from "./components/AnimatedServices"
import AnimatedContactForm from "./components/AnimatedContactForm"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Footer from "./components/Footer"
import "./styles/neumorphism.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento inicial para mostrar animação de entrada
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const loaderVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const,
      },
    },
  }

  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <motion.div
          className="nm-card p-8 flex flex-col items-center"
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="nm-icon w-16 h-16 mb-4 bg-yellow-500 flex items-center justify-center rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="text-white text-2xl font-bold">d</span>
          </motion.div>
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-500">dibi</span>
            <span className="text-gray-800">Tech</span>
          </h1>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedNavbar />

      <main className="flex-1">
        <AnimatedHero
          title="Soluções Tecnológicas Inovadoras"
          subtitle="Desenvolvemos soluções personalizadas em software, infraestrutura, dados e automação para impulsionar o crescimento do seu negócio."
          ctaText="Conheça Nossos Serviços"
          ctaLink="/servicos"
        />

        <AnimatedServices
          title="Nossos Serviços"
          subtitle="Oferecemos uma ampla gama de serviços de engenharia de computação para atender às necessidades específicas do seu negócio."
        />

        {/* 🔽 Fixed: Portfolio with required props */}
        <Portfolio 
          title="Nosso Portfólio" 
          subtitle="Conheça nossos projetos e cases de sucesso" 
        />

        {/* 🔽 Adicionado: Equipe */}
        <Team />

        <AnimatedContactForm
          title="Entre em Contato"
          subtitle="Estamos prontos para ajudar a transformar suas ideias em soluções tecnológicas de sucesso."
        />
      </main>

      <Footer />
    </motion.div>
  )
}

export default App