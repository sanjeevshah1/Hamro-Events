import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = ({ title, children }: {title: string, children: React.ReactNode}) => (
  <div className="space-y-4">
    <h2 className="text-white text-lg font-semibold">{title}</h2>
    {children}
  </div>
);

const Footer = () => {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Courses', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  const socials = [
    { Icon: Facebook, label: 'Facebook', href: '#' },
    { Icon: Twitter, label: 'Twitter', href: '#' },
    { Icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 w-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start justify-items-center" >
          <FooterSection title="About Us">
            <p className="leading-relaxed">
              Hamro Events is your trusted platform for connecting event planners with top-notch service providers. We aim to simplify event management by offering a seamless booking experience, fostering successful events, and bringing communities together through memorable occasions.
            </p>
          </FooterSection>

          <FooterSection title="Quick Links">
            <nav className="space-y-2">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </FooterSection>

          <FooterSection title="Follow Us">
            <div className="flex flex-col space-y-2">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </FooterSection>

          <FooterSection title="Contact Us">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <p>Pokhara, Nepal</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <p>hamroevents@pokhara.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <p>(+977) 981234567</p>
              </div>
            </div>
          </FooterSection>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Hamro Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;