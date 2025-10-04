import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-navy/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium UPVC Windows & Doors
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Transform your space with energy-efficient, durable, and stylish UPVC solutions. Experience quality craftsmanship that stands the test of time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-secondary hover:bg-opacity-90 text-navy px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all transform hover:scale-105"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-gray-200 mt-2">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">5000+</div>
                    <div className="text-sm text-gray-200 mt-2">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">100%</div>
                    <div className="text-sm text-gray-200 mt-2">Quality Assured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">24/7</div>
                    <div className="text-sm text-gray-200 mt-2">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-teal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Weather Resistant',
                description: 'Superior protection against all weather conditions',
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Certified materials and expert craftsmanship',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Skilled professionals with years of experience',
              },
              {
                icon: Clock,
                title: 'Long Lasting',
                description: 'Durable products with extended warranties',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Alsana?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                'Energy-efficient designs that reduce utility costs',
                'Low maintenance and easy to clean',
                'Enhanced security with multi-point locking systems',
                'Sound insulation for peaceful living',
                'Customizable designs to match your style',
                '10-year comprehensive warranty',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary to-navy text-white p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Upgrade Your Space?
              </h3>
              <p className="text-gray-100 mb-8 leading-relaxed">
                Get a free consultation and quote from our experts. We'll help you choose the perfect UPVC solutions for your home or business.
              </p>
              <Link
                to="/contact"
                className="bg-secondary hover:bg-opacity-90 text-navy px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive collection of UPVC solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Windows',
                description: 'Casement, sliding, and tilt & turn windows in various styles',
                image: '🪟',
              },
              {
                title: 'Doors',
                description: 'Entrance doors, French doors, and patio doors',
                image: '🚪',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored designs for unique architectural requirements',
                image: '⚙️',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary to-navy h-48 flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-primary hover:text-secondary font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
