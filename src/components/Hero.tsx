import { useState, useEffect } from 'react';
import '../styles/neumorphism.css';
import heroImage from '../assets/images/hero_image.jpg';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-200 opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-green-200 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-yellow-300 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                loaded ? 'nm-animate-left' : 'opacity-0'
              }`}
            >
              <span className="text-yellow-500">dibi</span>
              <span className="text-gray-800">Tech</span>
              <br />
              <span className="text-gray-800">{title}</span>
            </h1>

            <p
              className={`text-xl text-gray-600 mb-8 max-w-lg ${
                loaded ? 'nm-animate-left nm-delay-200' : 'opacity-0'
              }`}
            >
              {subtitle}
            </p>

            <div className={loaded ? 'nm-animate-up nm-delay-300' : 'opacity-0'}>
              <a href={ctaLink} className="nm-button nm-button-primary inline-block">
                {ctaText}
              </a>
            </div>
          </div>

          {/* Hero image/graphic */}
          <div className="w-full md:w-1/2">
            <div className={`nm-card p-8 relative ${loaded ? 'nm-animate-right nm-delay-200' : 'opacity-0'}`}>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div
                  className="nm-icon w-32 h-32 overflow-hidden rounded-full flex items-center justify-center"
                  style={{ transform: 'scale(1.01139) rotate(1.13927deg)' }}
                >
                  <img src={heroImage} alt="Imagem principal" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating icons */}
              <div
                className={`absolute -top-4 -left-4 nm-icon bg-yellow-500 flex items-center justify-center ${
                  loaded ? 'nm-animate-scale nm-delay-400' : 'opacity-0'
                }`}
                style={{ width: '1.5rem', height: '1.5rem' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>

              <div
                className={`absolute -bottom-4 -right-4 nm-icon bg-green-500 flex items-center justify-center ${
                  loaded ? 'nm-animate-scale nm-delay-500' : 'opacity-0'
                }`}
                style={{ width: '1.5rem', height: '1.5rem' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
