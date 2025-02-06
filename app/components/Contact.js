import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-6">

        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center text-black-800 mb-12">
          Contact Us !
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message ✉️</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Contact Information 📍</h3>
            <ul className="space-y-4 text-black-600">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-4 " /> 3/3, Om Enclave Part -2, Haryana, India
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-4 " /> +91 8368474782
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-4 " /> ubosachin@gmail.com
              </li>
            </ul>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                className="w-full h-52 rounded-md shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.96305791531686!3d-37.81627974202147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f9e4fb%3A0xc4c9dbb4b5f6f3f4!2sGoogle!5e0!3m2!1sen!2sus!4v1632759468093!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>

        

      </div>
    </section>
  );
}
