import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Download, Send, CheckCircle, Loader2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'surajneralla2007@gmail.com',
    href: 'mailto:surajneralla2007@gmail.com',
    color: '#3B82F6',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/surajneralla',
    href: 'https://www.linkedin.com/in/surajneralla',
    color: '#0EA5E9',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/SurajNeralla',
    href: 'https://github.com/SurajNeralla',
    color: '#8B5CF6',
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async () => {
    setLoading(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#06B6D4' }}>
            {'// 06. contact'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Let's Connect
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            Have a project in mind? Want to collaborate on something amazing? Let's talk.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card-strong gradient-border p-8 mb-6">
              {/* Location */}
              <div className="flex items-center gap-2 mb-6 text-white/50 font-mono text-sm">
                <MapPin size={14} style={{ color: '#3B82F6' }} />
                Hyderabad, India
              </div>

              <h3 className="font-heading font-bold text-white text-2xl mb-2">
                Open to Opportunities
              </h3>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                I'm currently available for freelance projects, internships, and full-time roles.
                Whether it's a complex automation system, a web application, or an AI-powered product —
                I'd love to hear about your vision.
              </p>

              {/* Contact links */}
              <div className="space-y-4">
                {contactLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      whileHover={{ x: 6, scale: 1.01 }}
                      className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                        style={{
                          background: `${link.color}18`,
                          border: `1px solid ${link.color}30`,
                        }}
                      >
                        <Icon size={18} style={{ color: link.color }} />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-white/80 text-sm">{link.label}</p>
                        <p className="font-mono text-xs" style={{ color: link.color }}>{link.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Resume download */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(59,130,246,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-heading font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                boxShadow: '0 4px 20px rgba(59,130,246,0.25)',
              }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card-strong gradient-border p-8">
              <h3 className="font-heading font-bold text-white text-xl mb-6">Send a Message</h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-12 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <CheckCircle size={56} style={{ color: '#22C55E' }} />
                    </motion.div>
                    <p className="font-heading font-bold text-white text-xl">Message Sent!</p>
                    <p className="font-body text-white/50 text-center">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-heading font-medium text-white/70 mb-2">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          placeholder="Your name"
                          className="form-input"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 font-mono">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-heading font-medium text-white/70 mb-2">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                          })}
                          placeholder="your@email.com"
                          type="email"
                          className="form-input"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 font-mono">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-heading font-medium text-white/70 mb-2">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register('subject', { required: 'Subject is required' })}
                        placeholder="What's this about?"
                        className="form-input"
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1 font-mono">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-heading font-medium text-white/70 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                        placeholder="Tell me about your project, idea, or opportunity..."
                        rows={5}
                        className="form-input resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 font-mono">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 30px rgba(59,130,246,0.5)' } : {}}
                      whileTap={!loading ? { scale: 0.97 } : {}}
                      className="w-full py-4 rounded-xl font-heading font-semibold text-white flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                        boxShadow: '0 4px 20px rgba(59,130,246,0.25)',
                      }}
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
