import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative section-padding overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-azure/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 to-azure/20 z-10" />
                <img
                  src="/about-image.jpg"
                  alt="Workspace"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>


              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-dashed border-white/10 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Section Title */}
            <div
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-light text-sm font-medium text-violet-light mb-4">
                Sobre Mim
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Especialista em{' '}
              <span className="gradient-text">Cloud Computing</span> & Infraestrutura
            </h2>

            {/* Description */}
            <div
              className={`space-y-4 text-white/70 leading-relaxed transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p>
                Profissional com sólida experiência em ambientes de cloud computing, 
                monitoramento de sistemas e suporte técnico. Atuo na{' '}
                <span className="text-white font-medium">LG Lugar de Gente</span>, onde 
                desenvolvo habilidades em Azure, PowerShell, SQL Server e ferramentas de 
                monitoramento como Kibana e Grafana.
              </p>
              <p>
                Minha trajetória inclui passagens por empresas de tecnologia renomadas como{' '}
                <span className="text-white font-medium">TOTVS</span> e{' '}
                <span className="text-white font-medium">LINX Sistemas</span>, onde 
                adquiri experiência em suporte a sistemas ERP, bancos de dados e 
                atendimento ao cliente.
              </p>
              <p>
                Sou apaixonado por tecnologia e estou sempre em busca de novos desafios 
                e oportunidades de aprendizado na área de Cloud Computing e DevOps.
              </p>
            </div>

            {/* Info Grid */}
            <div
              className={`grid grid-cols-2 gap-4 mt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="glass rounded-xl p-4 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-display font-bold gradient-text mb-1">2022</div>
                <div className="text-sm text-white/60">Início na LG</div>
              </div>
              <div className="glass rounded-xl p-4 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-display font-bold gradient-text mb-1">Goiânia</div>
                <div className="text-sm text-white/60">GO, Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
