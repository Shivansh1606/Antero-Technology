import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Building2, PhoneCall } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9458861655", "+91 8755153225"],
      link: "tel:+919458861655",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["admin@antero.in"],
      link: "mailto:admin@antero.in",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "SA-9, Shastri Nagar, Beside Sona Mart",
        "Opp. Pahalwan Dhaba, Near Hapur Chungi",
        "Ghaziabad-201002"
      ],
      link: "https://maps.google.com/?q=SA-9,Shastri+Nagar,Ghaziabad+201002",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      link: "",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const courses = [
    "Cisco CCNA Certification",
    "Cisco CCNP Enterprise",
    "Microsoft MCSA",
    "Microsoft MCSE",
    "Red Hat RHCSA",
    "Red Hat RHCE",
    "CompTIA Network+",
    "CompTIA Security+",
    "Hardware & Networking",
    "Other - Please Specify"
  ];

  const whyContactUs = [
    "Get detailed course information & syllabus",
    "Schedule a free demo class",
    "Discuss career opportunities & placement",
    "Learn about batch timings & flexibility",
    "Understand fee structure & EMI options",
    "Visit our training facility & labs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION - BETTER IMAGE WITH LIGHT OVERLAY */}
      <section className="relative py-20 overflow-hidden">
        {/* Better background image */}
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&h=900&fit=crop&q=80"
          alt="Contact Antero Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-6"
            >
              <PhoneCall className="w-4 h-4" />
              We&apos;re Here to Help
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Have questions about our courses? Ready to start your networking career?
              <span className="block mt-2 text-yellow-300 font-semibold">
                We&apos;d love to hear from you!
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* CONTACT INFO CARDS - ICONS FIXED */}
      <section className="-mt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const isClickable = info.link && info.link !== "";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {isClickable ? (
                    <a
                      href={info.link}
                      target={info.link?.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block h-full group"
                    >
                      <div className="h-full bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                        <div className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                          <IconComponent className={`w-7 h-7 ${info.iconColor}`} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm leading-relaxed mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="h-full bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary group">
                      <div className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                        <IconComponent className={`w-7 h-7 ${info.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white p-6 md:p-10 rounded-3xl shadow-2xl"
            >
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form and our team will reach out to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-sm md:text-base"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Interested Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white text-sm md:text-base"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none text-sm md:text-base"
                    placeholder="Tell us about your requirements, preferred timings, or any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-700 text-white py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs md:text-sm text-gray-500">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </form>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Why Contact Us */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Why Contact Us?</h3>
                </div>
                <ul className="space-y-3">
                  {whyContactUs.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-primary to-blue-700 p-6 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Our admission counselors respond to all inquiries within 24 hours. 
                  For urgent queries, call us directly.
                </p>
                <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl border border-white/30">
                  <p className="font-semibold text-sm mb-1">Admission Helpline:</p>
                  <a
                    href="tel:+919458861655"
                    className="text-xl md:text-2xl font-bold hover:text-yellow-300 transition-colors block"
                  >
                    +91 9458861655
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visit Our Campus</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  SA-9, Shastri Nagar, Beside Sona Mart,<br />
                  Opp. Pahalwan Dhaba, Near Hapur Chungi,<br />
                  <strong>Ghaziabad-201002</strong>
                </p>
                <a
                  href="https://maps.google.com/?q=SA-9,Shastri+Nagar,Ghaziabad+201002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all text-sm md:text-base"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - NO GREEN OVERLAY, CLEAN BACKGROUND IMAGE */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background image - clean office/training environment */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop&q=80"
          alt="Join Antero Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light overlay only - NO GREEN */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/70 to-blue-900/75"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-2xl mb-6 md:mb-8">
            Don&apos;t wait! Enroll now and get <span className="font-bold text-yellow-300">20% discount</span> on early bird registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919458861655"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" />
              Call: +91 9458861655
            </a>
            <a
              href="mailto:admin@antero.in"
              className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-3 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-white hover:text-primary transition-all shadow-2xl transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
