import React from "react";

function Footer() {
  return (
    <footer className="bg-[#b13035] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Address */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p>
              Virtual Snipers Digital Marketing Services.
              <br />
              Mumbai, India
              <br />
              Email: personalbranding@virtualsnipers.com <br />
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">
                  Personal Branding Services
                </a>
              </li>
              <li>
                <a href="#wecater" className="hover:text-gray-400">
                  Who needs Personal Branding?
                </a>
              </li>
              <li>
                <a href="#getaquote" className="hover:text-gray-400">
                  Get a consultation & Quote
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-gray-400">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#branding" className="hover:text-gray-400">
                  Why choose us for Personal Branding?
                </a>
              </li>
              {/* <li><a href="#contactus" className="hover:text-gray-400">Contact</a></li> */}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <ul className="flex space-x-6">
              {/* <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82V14.708h-3.155v-3.633h3.155V8.413c0-3.111 1.894-4.806 4.659-4.806 1.325 0 2.464.098 2.796.143v3.24h-1.92c-1.506 0-1.797.717-1.797 1.766v2.312h3.594l-.469 3.633h-3.125V24h6.127C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195A4.917 4.917 0 0016.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.043.762.127 1.124C7.691 8.832 4.066 6.872 1.64 3.902a4.907 4.907 0 00-.664 2.475c0 1.707.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827a4.935 4.935 0 01-2.224.084c.627 1.956 2.445 3.379 4.6 3.42A9.872 9.872 0 010 21.542a13.938 13.938 0 007.548 2.212c9.058 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A10.026 10.026 0 0024 4.557z" />
                  </svg>
                </a>
              </li> */}
              <li>
                <a
                  href="https://linkedin.com"
                  target="https://in.linkedin.com/company/virtual-snipers-digital-marketing-services"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zm-13.8 20.45H4.34V9.04h4.09v11.41zM6.385 7.53c-1.3 0-2.15-.88-2.15-1.98-.01-1.12.86-1.99 2.17-1.99s2.15.87 2.17 1.99c0 1.1-.87 1.98-2.19 1.98zM20.43 20.45h-4.09v-5.72c0-1.36-.49-2.29-1.71-2.29-.93 0-1.49.63-1.73 1.24-.09.22-.12.52-.12.83v5.94h-4.1c.05-9.64 0-10.61 0-10.61h4.09v1.5c.55-.84 1.53-2.03 3.71-2.03 2.7 0 4.72 1.78 4.72 5.59v6.55h.01z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="https://www.instagram.com/virtualsnipersdigital"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <svg
                     className="h-9 w-9"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Virtual Snipers. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
