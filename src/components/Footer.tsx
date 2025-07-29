import React from 'react';
import { Brain, Gamepad2, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Technology", href: "#technology" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#demo" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "COPPA Compliance", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-3 h-3 text-white" />
                </div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Mathverse
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming mathematics education through immersive AR/VR experiences 
              and AI-powered personalized learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">hello@mathverse.ai</p>
              <p className="text-gray-300">support@mathverse.ai</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">123 Innovation Drive</p>
              <p className="text-gray-300">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Mathverse. All rights reserved. Building the future of education.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>🌍 Available in 15+ languages</span>
            <span>🔒 SOC 2 Certified</span>
            <span>✅ COPPA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;