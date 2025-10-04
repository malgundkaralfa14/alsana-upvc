import { Wrench, Ruler, Settings, Headphones, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Comprehensive UPVC solutions from consultation to installation and beyond
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Ruler,
                title: 'Free Consultation',
                description: 'Expert advice to help you choose the right UPVC solutions for your needs',
              },
              {
                icon: Settings,
                title: 'Custom Design',
                description: 'Tailored designs that perfectly match your architectural requirements',
              },
              {
                icon: Wrench,
                title: 'Professional Installation',
                description: 'Skilled technicians ensure precise and efficient installation',
              },
              {
                icon: Headphones,
                title: 'After-Sales Support',
                description: 'Ongoing maintenance and support to keep your products in top condition',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-primary"
              >
                <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              What We Offer
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Consultation & Site Survey',
                  description:
                    'Our experts visit your location to understand your requirements, take accurate measurements, and assess site conditions. We provide detailed recommendations and transparent pricing with no hidden costs.',
                  features: [
                    'On-site measurements',
                    'Technical assessment',
                    'Design recommendations',
                    'Free quotation',
                  ],
                },
                {
                  title: 'Manufacturing & Customization',
                  description:
                    'Using state-of-the-art machinery and premium materials, we manufacture UPVC windows and doors to exact specifications. Every product undergoes rigorous quality checks before delivery.',
                  features: [
                    'Premium UPVC profiles',
                    'Custom colors & finishes',
                    'Energy-efficient glazing',
                    'Quality certification',
                  ],
                },
                {
                  title: 'Installation Services',
                  description:
                    'Our certified installation teams ensure your UPVC products are fitted perfectly. We handle everything from removing old fixtures to cleaning up after installation, minimizing disruption to your daily routine.',
                  features: [
                    'Expert installation team',
                    'Minimal disruption',
                    'Old fixture removal',
                    'Post-installation cleanup',
                  ],
                },
                {
                  title: 'Maintenance & Repair',
                  description:
                    'Keep your UPVC windows and doors performing optimally with our maintenance services. We also offer repair services for hardware, seals, and other components, extending the life of your investment.',
                  features: [
                    'Regular maintenance',
                    'Hardware replacement',
                    'Seal repair',
                    'Performance optimization',
                  ],
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-navy text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              Our Process
            </h2>

            <div className="space-y-6">
              {[
                { step: '1', title: 'Initial Contact', description: 'Reach out via phone, email, or our contact form' },
                { step: '2', title: 'Free Consultation', description: 'Schedule a visit from our expert team' },
                { step: '3', title: 'Custom Quote', description: 'Receive a detailed, transparent quotation' },
                { step: '4', title: 'Design Approval', description: 'Review and approve the final design' },
                { step: '5', title: 'Manufacturing', description: 'Your products are crafted to perfection' },
                { step: '6', title: 'Installation', description: 'Professional installation by certified technicians' },
                { step: '7', title: 'Final Inspection', description: 'Quality check and handover' },
                { step: '8', title: 'Ongoing Support', description: 'Maintenance and support whenever you need it' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary to-navy text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                    <h4 className="font-semibold text-navy text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Contact us today for a free consultation and discover how Alsana can transform your space with premium UPVC solutions.
            </p>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-opacity-90 text-navy px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
