import React from 'react';
import { Cpu, Smartphone, Cloud, Shield, Zap, Globe } from 'lucide-react';

const Technology = () => {
  const techStack = [
    {
      category: "AR/VR Engine",
      technologies: ["Unity 3D", "WebXR", "ARCore", "ARKit"],
      icon: Smartphone,
      color: "from-purple-600 to-pink-600"
    },
    {
      category: "AI & Machine Learning",
      technologies: ["GPT-4 Models", "TensorFlow", "Reinforcement Learning", "NLP"],
      icon: Cpu,
      color: "from-blue-600 to-cyan-600"
    },
    {
      category: "Cloud Infrastructure",
      technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
      icon: Cloud,
      color: "from-green-600 to-emerald-600"
    },
    {
      category: "Security & Privacy",
      technologies: ["End-to-end Encryption", "COPPA Compliant", "GDPR Ready", "SOC 2"],
      icon: Shield,
      color: "from-orange-600 to-red-600"
    }
  ];

  const capabilities = [
    {
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly across smartphones, tablets, VR headsets, and web browsers",
      icon: Globe
    },
    {
      title: "Real-time Processing",
      description: "Instant AI feedback and response times under 100ms for smooth interactions",
      icon: Zap
    },
    {
      title: "Scalable Architecture",
      description: "Handles millions of concurrent users with auto-scaling cloud infrastructure",
      icon: Cloud
    },
    {
      title: "Offline Capability",
      description: "Core learning features work offline, syncing when connection is restored",
      icon: Smartphone
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            <span>Advanced Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built with Cutting-Edge
            <span className="block text-blue-400">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mathverse leverages the latest in AI, AR/VR, and cloud technologies to deliver 
            an unparalleled learning experience that scales globally.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.technologies.map((technology, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                    <span className="text-gray-300 text-sm">{technology}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Platform Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">{capability.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-purple-500/20">
          <h3 className="text-3xl font-bold mb-6">Seamless Integration</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mathverse integrates effortlessly with existing Learning Management Systems and educational workflows.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="bg-gray-800 px-6 py-3 rounded-xl">Google Classroom</div>
            <div className="bg-gray-800 px-6 py-3 rounded-xl">Canvas LMS</div>
            <div className="bg-gray-800 px-6 py-3 rounded-xl">Moodle</div>
            <div className="bg-gray-800 px-6 py-3 rounded-xl">Blackboard</div>
            <div className="bg-gray-800 px-6 py-3 rounded-xl">Microsoft Teams</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;