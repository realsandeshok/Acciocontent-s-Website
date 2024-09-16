import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#b13035] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Address */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Address</h3>
            <p>
              AccioContent Inc.<br />
              1234 Magic Avenue<br />
              Enchanted City, EC 56789<br />
              Email: info@acciocontent.com<br />
              Phone: +1 (234) 567-890
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#services" className="hover:text-gray-400">Services</a></li>
              <li><a href="#team" className="hover:text-gray-400">Our Team</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <ul className="flex space-x-6">
              <li>
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
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
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
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} AccioContent Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
