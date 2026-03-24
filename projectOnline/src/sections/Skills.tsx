import { useEffect, useRef, useState } from 'react';
import { 
  Cloud, 
  Database, 
  Server, 
  Terminal, 
  BarChart3, 
  Monitor,
  Layout,
  Settings,
  MessageSquare,
  Award,
  CheckCircle2
} from 'lucide-react';

const Skills = () => {
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

  const skills = [
    { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-orange-600' },
    { name: 'Azure', icon: Cloud, color: 'from-azure to-cyan-400' },
    { name: 'Oracle Cloud', icon: Cloud, color: 'from-red-500 to-orange-500' },
    { name: 'PowerShell', icon: Terminal, color: 'from-blue-500 to-cyan-500' },
    { name: 'SQL Server', icon: Database, color: 'from-red-600 to-red-400' },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-600 to-blue-400' },
    { name: 'Kibana', icon: BarChart3, color: 'from-pink-500 to-rose-500' },
    { name: 'Grafana', icon: Monitor, color: 'from-orange-500 to-yellow-500' },
    { name: 'Power BI', icon: Layout, color: 'from-yellow-500 to-orange-500' },
    { name: 'Linux', icon: Server, color: 'from-yellow-600 to-orange-600' },
    { name: 'Windows Server', icon: Settings, color: 'from-blue-600 to-indigo-600' },
    { name: 'Zendesk', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
  ];

  const certifications = [
    {
      name: 'Microsoft AZ-900',
      issuer: 'Microsoft',
      icon: Award,
      color: 'from-violet to-violet-light',
    },
    {
      name: 'Oracle Cloud Infrastructure',
      issuer: 'Oracle',
      icon: Cloud,
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'AWS Fundamentals',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative section-padding overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[200px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-azure/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full glass-light text-sm font-medium text-violet-light mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Habilidades & Certificações
          </span>
          <h2
            className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Tecnologias que <span className="gradient-text">Domino</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="relative glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group-hover:border-violet/30 border border-transparent">
                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Name */}
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
            Certificações
          </h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group relative glass rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-violet/30 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                {/* Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h4 className="font-display font-bold text-lg text-white mb-1 group-hover:gradient-text transition-all duration-300">
                  {cert.name}
                </h4>
                <p className="text-sm text-white/60">{cert.issuer}</p>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <p className="text-white/60 max-w-2xl mx-auto">
            Sempre em busca de novas certificações e conhecimentos para me manter 
            atualizado com as últimas tecnologias e melhores práticas do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
