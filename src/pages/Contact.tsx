import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Get in touch with our team for a free consultation and quote
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Get In Touch</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Have questions about our products or services? We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-light-teal rounded-lg">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                    <p className="text-gray-700">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-light-teal rounded-lg">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <p className="text-gray-700">info@alsana.com</p>
                    <p className="text-gray-700">sales@alsana.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-light-teal rounded-lg">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Address</h3>
                    <p className="text-gray-700">123 Business Avenue</p>
                    <p className="text-gray-700">Suite 100, City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-light-teal rounded-lg">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Business Hours</h3>
                    <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-700">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="consultation">Schedule Consultation</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-navy hover:from-navy hover:to-primary text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Visit Our Showroom
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Experience our products firsthand at our state-of-the-art showroom. See the quality, test the functionality, and speak with our experts in person.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary to-navy flex items-center justify-center text-white text-6xl">
                📍
              </div>
              <div className="p-6">
                <p className="text-gray-700 font-medium">
                  <strong className="text-navy">Address:</strong> 123 Business Avenue, Suite 100, City, State 12345
                </p>
                <p className="text-gray-700 mt-2">
                  Free parking available. Wheelchair accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
