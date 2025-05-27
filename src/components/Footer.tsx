import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0f14] border-t border-[#10ff2b]/50">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#10ff2b]">
              Franklin Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Professional portfolio platform showcasing creative work and
              projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10ff2b]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-[#10ff2b] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-[#10ff2b] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-[#10ff2b] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10ff2b]">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-[#10ff2b] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-[#10ff2b] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/licensing"
                  className="text-gray-400 hover:text-[#10ff2b] transition-colors"
                >
                  Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10ff2b]">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ibanespm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#10ff2b] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              {/* lin kedin */}
              <a
                href="https://www.linkedin.com/in/ibanespm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#10ff2b] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/51926689920"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#10ff2b] transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#10ff2b]/50 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Franklin Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
