import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Alsana" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of premium UPVC windows and doors. Quality craftsmanship and exceptional service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@alsana.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Business Ave, Suite 100, City, State 12345</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary hover:bg-secondary p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-secondary p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-secondary p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-secondary">Business Hours</h4>
              <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm">Sat: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-300 text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alsana UPVC Windows and Doors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
