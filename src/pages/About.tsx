import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-navy/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Alsana</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Your trusted partner in premium UPVC windows and doors for over 15 years
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, Alsana has grown from a small local business to a leading provider of premium UPVC windows and doors. Our journey began with a simple mission: to offer homeowners and businesses superior quality products that enhance comfort, security, and energy efficiency.
                </p>
                <p>
                  Over the years, we've installed thousands of windows and doors across the region, earning a reputation for excellence in both product quality and customer service. Our commitment to innovation and sustainability has kept us at the forefront of the industry.
                </p>
                <p>
                  Today, Alsana is proud to be a trusted name in UPVC solutions, backed by a team of skilled professionals dedicated to transforming spaces with products that combine functionality, durability, and aesthetic appeal.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-light-teal to-white p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Expert Team Members</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-teal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide exceptional UPVC window and door solutions that enhance the comfort, security, and energy efficiency of every space we serve. We strive to exceed customer expectations through innovative products, expert craftsmanship, and unparalleled service.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the most trusted and respected name in UPVC solutions, recognized for our commitment to quality, sustainability, and customer satisfaction. We envision a future where every home and business benefits from our innovative and eco-friendly products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality Excellence',
                description: 'We never compromise on the quality of our products and services',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your satisfaction and trust are our top priorities',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Continuously improving and adopting new technologies',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'Honest, transparent, and ethical in all our dealings',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="bg-gradient-to-br from-primary to-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Customers Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-gray-200">Quality Guaranteed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">10 Years</div>
                <div className="text-gray-200">Product Warranty</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-gray-200">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}