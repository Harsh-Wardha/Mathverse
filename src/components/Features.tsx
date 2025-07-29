import React from 'react';
import { 
  Gamepad2, 
  Brain, 
  Glasses, 
  BarChart3, 
  Users, 
  Zap,
  Target,
  BookOpen,
  Trophy
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Gamified Missions & Real-Life Challenges",
      description: "Complete exciting quests in virtual worlds where math solves real problems. Build bridges with geometry, manage shops with algebra, and earn rewards that boost motivation.",
      highlights: ["Points & Badge System", "Real-world Applications", "Progressive Difficulty"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Adaptive Tutor",
      description: "Personalized learning paths that adapt to your pace, learning style, and areas for improvement. Get instant feedback with step-by-step guidance in multiple languages.",
      highlights: ["Personalized Learning", "Multi-language Support", "Real-time Feedback"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Glasses,
      title: "AR/VR Math Labs",
      description: "Visualize complex concepts in 3D space. Walk around geometric figures, interact with probability simulations, and explore calculus in immersive virtual environments.",
      highlights: ["3D Visualization", "Interactive Models", "Immersive Experience"],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Smart Analytics Dashboard",
      description: "Track progress in real-time with detailed insights. Teachers and parents can detect learning gaps early and receive targeted intervention suggestions.",
      highlights: ["Real-time Tracking", "Performance Analytics", "Early Gap Detection"],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Users,
      title: "Multiplayer Collaborative Games",
      description: "Learn together through team-based challenges and time-limited puzzles. Build confidence through peer interaction and shared problem-solving experiences.",
      highlights: ["Team Challenges", "Peer Learning", "Social Interaction"],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Innovative Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Learning
            <span className="block text-purple-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Mathverse transforms traditional mathematics education through cutting-edge technology 
            and personalized learning approaches.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

              {/* Highlights */}
              <div className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="font-semibold">Ready to Transform Learning?</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Experience the Future of Math Education</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already experiencing breakthrough results with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;