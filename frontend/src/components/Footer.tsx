import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-left">
          
          {/* Company Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">DreamMinder</h2>
            <p className="text-gray-400">
              Creating the future of dreams, today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

      {/* Copyright Notice */}
<div className="w-full mt-8 text-gray-400 text-sm mx-auto text-center md:text-center lg:text-center">
  &copy; {new Date().getFullYear()} DreamMinder. All Rights Reserved.
</div>

      </div>
    </footer>
  );
}

export default Footer;
