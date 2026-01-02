import { motion } from 'framer-motion';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Antero Technology Group</h1>
          <p className="text-xl text-gray-600">Premier Technology Training Provider</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Antero Technology Group is registered under MSME Government of India. We specialize in 
            projects like Core Networking, VOIP Solutions, VPN, Wireless Technology, System Support, 
            and Security Systems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our latest surveys show that top-notch multinational companies in telecommunication and 
            networking require thousands of professionals annually for project maintenance and development. 
            In today's rapidly changing IT environment, obtaining proper training and certification is 
            essential for career growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer training on all latest industry-standard technologies including Cisco, Microsoft, 
            and Red Hat Technologies to help networking support companies and solution providers recruit 
            well-trained candidates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Target className="w-10 h-10" />, title: "Our Mission", desc: "Provide world-class IT training" },
            { icon: <Users className="w-10 h-10" />, title: "Expert Team", desc: "Industry professionals as trainers" },
            { icon: <Award className="w-10 h-10" />, title: "Certifications", desc: "Recognized industry certificates" },
            { icon: <Zap className="w-10 h-10" />, title: "Modern Tech", desc: "Latest technology stack" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
