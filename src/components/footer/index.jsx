
export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full border-t-4 border-outline bg-gray-100 py-6">
      {/* Conteúdo do footer */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row mb-4 gap-6">
        {/* Links divididos por categorias */}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">License</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Services</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:underline">Job Placement</a></li>
              <li><a href="#" className="hover:underline">Career Counseling</a></li>
              <li><a href="#" className="hover:underline">Talent Acquisition</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clients</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:underline">Success Stories</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
        </div>

        {/* Localização com iframe */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.95565131592557!3d-37.817313979751654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d896cd63fd2b!2sWorldWorkHub%20Office!5e0!3m2!1sen!2sus!4v1696350289938!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Redes sociais */}
      <div className="w-full max-w-6xl flex justify-center md:justify-between items-center mt-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} WorldWorkHub. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-75">
            <img src="/images/facebook-logo.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/images/twitter-logo.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/images/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/images/instagram-logo.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

