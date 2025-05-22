import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-600">SIPS</h3>
            <p className="text-gray-600 text-sm">
              Connecting talented professionals with their dream careers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Create Resume</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Job Alerts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Career Advice</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Post a Job</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Browse Candidates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Recruitment Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Bube Jobs. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;