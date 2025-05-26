export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0f14] border-t border-[#10ff2b]/50">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#10ff2b]">Franklin Portfolio</h3>
            <p className="text-gray-400 text-sm">
              Professional portfolio platform showcasing creative work and projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10ff2b]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
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
                <a href="/privacy" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/licensing" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                  Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10ff2b]">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 11.08V14a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#10ff2b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
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
