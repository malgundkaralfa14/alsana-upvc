import { CheckCircle, Shield, Thermometer, Volume2, Lock, Sparkles } from 'lucide-react';

export default function Products() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-navy/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Discover our comprehensive range of premium UPVC windows and doors
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              UPVC Windows
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Energy-efficient, durable, and stylish windows for every space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Casement Windows',
                description: 'Classic hinged windows that open outward, perfect for ventilation and easy cleaning.',
                features: ['Single or double sash', 'Wide opening range', 'Excellent ventilation', 'Easy to operate'],
              },
              {
                title: 'Sliding Windows',
                description: 'Space-saving design with smooth horizontal sliding operation, ideal for modern homes.',
                features: ['Space-efficient', 'Smooth operation', 'Contemporary look', 'Low maintenance'],
              },
              {
                title: 'Tilt & Turn Windows',
                description: 'Versatile dual-operation windows offering both tilting and full opening functionality.',
                features: ['Dual functionality', 'Enhanced security', 'Easy cleaning', 'Superior ventilation'],
              },
              {
                title: 'Bay Windows',
                description: 'Elegant projecting windows that create additional interior space and panoramic views.',
                features: ['Increases space', 'Enhanced aesthetics', 'More natural light', 'Custom angles'],
              },
              {
                title: 'Fixed Windows',
                description: 'Non-opening windows designed to maximize natural light and provide unobstructed views.',
                features: ['Maximum light', 'Energy efficient', 'Clear views', 'Cost-effective'],
              },
              {
                title: 'Awning Windows',
                description: 'Top-hinged windows that open outward, allowing ventilation even during light rain.',
                features: ['Rain protection', 'Privacy control', 'Good ventilation', 'Modern design'],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border-t-4 border-primary"
              >
                <div className="bg-gradient-to-br from-light-teal to-white h-48 flex items-center justify-center text-6xl">
                  🪟
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="text-secondary flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              UPVC Doors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Secure, stylish, and weather-resistant doors for your home or business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Entrance Doors',
                description: 'Make a lasting first impression with our elegant and secure main entrance doors.',
                features: ['Multi-point locking', 'Thermal insulation', 'Customizable designs', 'Weather resistant'],
              },
              {
                title: 'French Doors',
                description: 'Classic double doors that create a seamless connection between indoor and outdoor spaces.',
                features: ['Double panel design', 'Wide opening', 'Elegant appearance', 'Natural light'],
              },
              {
                title: 'Sliding Patio Doors',
                description: 'Contemporary sliding doors perfect for balconies, patios, and gardens.',
                features: ['Space-saving', 'Smooth operation', 'Large glass area', 'Modern aesthetics'],
              },
              {
                title: 'Bi-Fold Doors',
                description: 'Innovative folding doors that maximize opening space and create stunning transitions.',
                features: ['Full opening capability', 'Compact folding', 'Premium hardware', 'Contemporary style'],
              },
              {
                title: 'Back Doors',
                description: 'Practical and secure doors for secondary entrances, kitchens, and utility areas.',
                features: ['Durable construction', 'Secure locking', 'Low maintenance', 'Various styles'],
              },
              {
                title: 'Composite Doors',
                description: 'High-performance doors combining UPVC frame with composite panel for extra security.',
                features: ['Maximum security', 'Superior insulation', 'Wide color range', 'Wood-like finish'],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border-t-4 border-secondary"
              >
                <div className="bg-gradient-to-br from-primary to-navy h-48 flex items-center justify-center text-6xl">
                  🚪
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-gray-600 text-lg">
              Why choose UPVC for your windows and doors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Thermometer,
                title: 'Energy Efficient',
                description: 'Superior thermal insulation reduces heating and cooling costs by up to 30%',
              },
              {
                icon: Lock,
                title: 'Enhanced Security',
                description: 'Multi-point locking systems and reinforced frames for maximum protection',
              },
              {
                icon: Volume2,
                title: 'Sound Insulation',
                description: 'Reduces external noise by up to 70% for peaceful living spaces',
              },
              {
                icon: Shield,
                title: 'Weather Resistant',
                description: 'Withstands extreme temperatures, UV rays, and harsh weather conditions',
              },
              {
                icon: Sparkles,
                title: 'Low Maintenance',
                description: 'No painting required, easy to clean, and resistant to rot and corrosion',
              },
              {
                icon: CheckCircle,
                title: 'Long Lasting',
                description: '40+ year lifespan with minimal maintenance, backed by our 10-year warranty',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="bg-gradient-to-br from-primary to-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customization Options
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Every project is unique. Choose from a wide range of colors, finishes, hardware, and glazing options to create the perfect solution for your space.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm">Color Options</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm">Glass Types</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <div className="text-sm">Handle Styles</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">∞</div>
                <div className="text-sm">Custom Sizes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}