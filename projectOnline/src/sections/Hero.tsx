import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, ChevronDown, Cloud, Database } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '4+', label: 'Anos de Experiência' },
    { value: '3+', label: 'Certificações' },
    { value: 'Cloud', label: '& DevOps' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-azure/20 rounded-full blur-[100px] animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px] animate-pulse animation-delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Cloud className="w-4 h-4 text-violet-light" />
              <span className="text-sm font-medium text-white/80">
                Analista de Cloud Computing
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Diego
            </h1>
            <h1
              className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl gradient-text mb-6 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              Barbosa
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl sm:text-2xl text-white/90 font-medium mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Transformando desafios em soluções na nuvem
            </p>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              Especialista em AWS, Azure e Oracle Cloud. Mais de 4 anos de experiência 
              em infraestrutura, monitoramento e suporte técnico.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <button
                onClick={() => scrollToSection('#contato')}
                className="group relative px-8 py-4 text-base font-semibold text-white gradient-primary rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Entre em Contato</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#experiencia')}
                className="group px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl transition-all duration-300 hover:border-violet-light hover:bg-white/5 flex items-center justify-center gap-2"
              >
                <span>Ver Experiência</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left group cursor-default"
                >
                  <div className="font-display font-bold text-2xl sm:text-3xl gradient-text group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {/* Orbiting Elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] animate-orbit">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] animate-orbit-reverse">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 gradient-accent rounded-xl flex items-center justify-center shadow-glow-orange">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet via-azure to-orange opacity-30 blur-2xl animate-pulse" />
                
                {/* Image Border */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-violet via-azure to-orange p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                    <img
                      src="/profile.jpg"
                      alt="Diego Barbosa"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
