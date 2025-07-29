import React from 'react';
import { TrendingUp, Users, Award, Clock, BookOpen, Target } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "45%",
      label: "Average Test Score Improvement",
      description: "Students show significant improvement in math assessments",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      value: "3x",
      label: "Increased Study Time",
      description: "Students voluntarily spend more time learning mathematics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      value: "87%",
      label: "Confidence Boost",
      description: "Students report increased confidence in math abilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      value: "92%",
      label: "Learning Goal Achievement",
      description: "Students successfully complete their personalized learning paths",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      quote: "Mathverse completely changed how I see mathematics. The AR visualizations made complex concepts click instantly!",
      author: "Sarah Chen",
      role: "Grade 10 Student",
      school: "Lincoln High School"
    },
    {
      quote: "Our students' engagement levels have skyrocketed. The real-time analytics help us provide targeted support exactly when needed.",
      author: "Dr. Michael Rodriguez",
      role: "Mathematics Department Head",
      school: "Riverside College"
    },
    {
      quote: "The gamification aspect keeps my daughter motivated to practice math every day. Her grades have improved dramatically.",
      author: "Jennifer Walsh",
      role: "Parent",
      school: "Oakwood Elementary"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable Impact on
            <span className="block text-green-600">Student Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real data from schools and students using Mathverse shows significant improvements 
            in learning outcomes and student engagement.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group text-center bg-gray-50 rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">{metric.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100"
              >
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research backing */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h3 className="text-3xl font-bold mb-4">Backed by Educational Research</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Our approach is grounded in cognitive science research showing that immersive, 
            gamified learning experiences improve retention by up to 90% compared to traditional methods.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>5+ Research Universities</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>3 Educational Awards</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>12+ Published Papers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;