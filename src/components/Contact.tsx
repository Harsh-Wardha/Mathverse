import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Email Us</h4>
            <p className="text-gray-700">hello@mathverse.ai</p>
            <p className="text-gray-700">support@mathverse.ai</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Call Us</h4>
            <p className="text-gray-700">+1 (555) 123-4567</p>
            <p className="text-gray-700">Mon-Fri 9AM-6PM EST</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Visit Us</h4>
            <p className="text-gray-700">123 Innovation Drive</p>
            <p className="text-gray-700">San Francisco, CA 94105</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
