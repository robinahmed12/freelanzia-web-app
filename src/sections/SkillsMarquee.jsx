import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillsMarquee = () => {
  // Skill data with icons (using Heroicons or similar)
  const skills = [
    { name: 'Web Development', icon: '💻', color: 'text-blue-500' },
    { name: 'Graphic Design', icon: '🎨', color: 'text-purple-500' },
    { name: 'SEO', icon: '🔍', color: 'text-green-500' },
    { name: 'Content Writing', icon: '✍️', color: 'text-yellow-500' },
    { name: 'Video Editing', icon: '🎬', color: 'text-red-500' },
    { name: 'Social Media', icon: '📱', color: 'text-pink-500' },
    { name: 'UI/UX Design', icon: '✨', color: 'text-indigo-500' },
    { name: 'Digital Marketing', icon: '📈', color: 'text-teal-500' }
  ];

  return (
    <section className="py-12 mt-24 bg-gradient-to-r from-orange-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-orange-300">
          Popular Skills on Our Platform
        </h2>
        
        <Marquee 
          speed={40} 
          gradient={false}
          pauseOnHover
          className="overflow-hidden py-4"
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`mx-8 flex flex-col items-center transition-all duration-300 hover:scale-110 hover:${skill.color}`}
            >
              <span className="text-5xl mb-2">{skill.icon}</span>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </Marquee>

        <div className="mt-8 text-center">
          <button className="btn-orange px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-orange-200 dark:hover:shadow-orange-900 transition-shadow">
            Browse All Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
