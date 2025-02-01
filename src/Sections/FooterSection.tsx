import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
              <p className="text-slate-400">Your trusted healthcare partner</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-slate-400">Siddharth Colony, Near Eastern Express Highway,<br />
                    Chembur, Mumbai - 400071</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-slate-400">+91 (22) 2222-3333</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-slate-400">contact@healthcare.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1097032398083!2d72.89931121744384!3d19.058361387097165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7d77d1%3A0x9ebbf0b7419fcc72!2sSiddharth%20Colony%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647850846174!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-16 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Healthcare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;