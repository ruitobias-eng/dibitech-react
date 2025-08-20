import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const AnimatedHero = ({ title, subtitle, ctaText, ctaLink }: HeroProps) => {
  // Removida a variável não utilizada 'loaded'
  const [, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
  }, []);

  const containerVariants: Variants = {
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

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const titleVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 50
      }
    }
  };

  const floatingIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 1,
        type: "spring",
        stiffness: 200
      }
    },
    floating: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut" as const
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.1 }
    }
  };

  const backgroundCircleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: { duration: 1.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-200"
        variants={backgroundCircleVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-green-200"
        variants={backgroundCircleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-yellow-300"
        variants={backgroundCircleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        style={{ opacity: 0.1 }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={titleVariants}
            >
              <span className="text-yellow-500">dibi</span>
              <span className="text-gray-800">Tech</span>
              <br />
              <span className="text-gray-800">{title}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-lg"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
            >
              <motion.a 
                href={ctaLink} 
                className="nm-button nm-button-primary inline-block"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {ctaText}
              </motion.a>
            </motion.div>
          </div>
          
          {/* Hero image/graphic */}
          <div className="w-full md:w-1/2">
            <motion.div 
              className="nm-card p-8"
              variants={imageVariants}
            >
              <div className="relative">
                {/* Placeholder for hero image */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <motion.div 
                    className="nm-icon w-24 h-24 flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 0.95, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 nm-icon bg-yellow-500"
                  variants={floatingIconVariants}
                  initial="hidden"
                  animate={["visible", "floating"]}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 nm-icon bg-green-500"
                  variants={floatingIconVariants}
                  initial="hidden"
                  animate={["visible", "floating"]}
                  transition={{ delay: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
