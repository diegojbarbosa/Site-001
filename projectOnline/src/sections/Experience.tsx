import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'LG Lugar de Gente',
      role: 'Analista de Informática Jr. - Operação Nuvem',
      period: '2022 - Atual',
      location: 'Goiânia, GO',
      description: 'Experiência no monitoramento de alarmes utilizando Kibana, Telegraf e Grafana. Atuação na atualização de sistemas, publicação de dashboards no Power BI e portais, além do monitoramento de tenants e revogação de acessos.',
      skills: ['Azure', 'PowerShell', 'SQL Server', 'Kibana', 'Grafana', 'Power BI'],
      color: 'violet',
    },
    {
      company: 'TOTVS Tecnologia',
      role: 'Analista de Suporte ERP',
      period: '2021',
      location: 'Goiânia, GO',
      description: 'Experiência na implantação, treinamento, atualização, configuração e suporte a clientes no sistema ERP 2075, incluindo integrações com ECF, TEF, NF-e, NFC-e, PIX e balanças.',
      skills: ['ERP 2075', 'PostgreSQL', 'Oracle', 'Certificados Digitais', 'Zendesk'],
      color: 'azure',
    },
    {
      company: 'LINX Sistemas',
      role: 'Analista de Suporte',
      period: '2019 - 2020',
      location: 'Goiânia, GO',
      description: 'Responsável pelo treinamento, atualização, configuração e suporte a clientes no sistema ERP Farma ITEC, incluindo ECF fiscal e não fiscal, TEF, NF-e e NFC-e.',
      skills: ['ERP Farma ITEC', 'SQL Server', 'PostgreSQL', 'Zendesk', 'Jira'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      violet: {
        bg: 'from-violet/20 to-violet/5',
        text: 'text-violet-light',
        border: 'border-violet/30',
        glow: 'shadow-violet/20',
      },
      azure: {
        bg: 'from-azure/20 to-azure/5',
        text: 'text-azure',
        border: 'border-azure/30',
        glow: 'shadow-azure/20',
      },
      orange: {
        bg: 'from-orange/20 to-orange/5',
        text: 'text-orange-light',
        border: 'border-orange/30',
        glow: 'shadow-orange/20',
      },
    };
    return colors[color] || colors.violet;
  };

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full glass-light text-sm font-medium text-violet-light mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Experiência Profissional
          </span>
          <h2
            className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Trajetória de <span className="gradient-text">Carreira</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-azure to-orange md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`relative flex items-start md:items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet to-azure border-4 border-dark md:-translate-x-1/2 z-10 animate-pulse" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`group relative glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${colors.glow} border border-transparent hover:${colors.border}`}
                    >
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display font-bold text-xl text-white group-hover:gradient-text transition-all duration-300">
                            {exp.company}
                          </h3>
                          <p className={`font-medium ${colors.text} mt-1`}>
                            {exp.role}
                          </p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                          <Briefcase className={`w-6 h-6 ${colors.text}`} />
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/60">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Hover Arrow */}
                      <div className={`absolute top-6 ${isLeft ? 'right-6' : 'left-6'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <ChevronRight className={`w-5 h-5 ${colors.text}`} />
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
