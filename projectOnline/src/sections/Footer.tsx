import { useEffect, useRef, useState } from 'react';
import { Linkedin, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/diego-barbosa-djb/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/5562992328762', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:diegodjb@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative py-12 overflow-hidden"
    >
      {/* Top Border Animation */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div
          className={`h-full bg-gradient-to-r from-transparent via-violet to-transparent transition-all duration-1000 ${
            isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>

      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a
            href="#"
            className={`font-display font-bold text-2xl text-white mb-2 transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Diego<span className="gradient-text">Barbosa</span>
          </a>

          {/* Tagline */}
          <p
            className={`text-white/60 mb-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Cloud Computing & Infraestrutura
          </p>

          {/* Social Links */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-violet/20 hover:border-violet/50 transition-all duration-300 hover:scale-110"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Copyright */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-2 text-sm text-white/40 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <span>© {currentYear} Diego Barbosa.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> em Goiânia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
