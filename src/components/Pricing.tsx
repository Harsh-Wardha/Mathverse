import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Explorer",
      price: "Free",
      description: "Perfect for individual students getting started",
      icon: Star,
      color: "from-gray-600 to-gray-700",
      features: [
        "Access to 3 core math topics",
        "Basic AR visualizations",
        "5 gamified missions per month",
        "Community support",
        "Progress tracking"
      ],
      popular: false
    },
    {
      name: "Student Pro",
      price: "$9.99",
      period: "/month",
      description: "Complete access for serious learners",
      icon: Zap,
      color: "from-blue-600 to-purple-600",
      features: [
        "All math topics & levels",
        "Full AR/VR experience",
        "Unlimited missions & challenges",
        "AI personal tutor",
        "Advanced analytics",
        "Offline learning mode",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Classroom",
      price: "$299",
      period: "/month",
      description: "For schools and educational institutions",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      features: [
        "Up to 30 student accounts",
        "Teacher dashboard & analytics",
        "Curriculum alignment tools",
        "Parent progress reports",
        "Custom learning paths",
        "Integration with LMS",
        "Dedicated support manager",
        "Professional development training"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Flexible Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Learning
            <span className="block text-purple-600">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your mathematical journey with our free plan, or unlock the full potential 
            with our comprehensive learning solutions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 transform scale-105 shadow-2xl' 
                  : 'border-gray-200 hover:border-purple-300 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Free' ? 'Get Started' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For large institutions, districts, or organizations with specific requirements, 
            we offer tailored enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Contact Sales
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;