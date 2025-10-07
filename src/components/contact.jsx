import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";

const contact = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-16 px-4 bg-white">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Get In Touch</h2>
      <p className="text-gray-500 text-center max-w-md mb-10">
        Let’s discuss how we can work together to drive strategic growth and operational excellence.
      </p>

      {/* Card */}
      <div className="bg-gray-50 shadow-sm rounded-xl w-full max-w-md p-6">
        {/* Email */}
        <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 mb-3 bg-white">
           <Mail className="text-[#004AAD] w-5 h-5 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-800">boufradj.mostafa@email.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 mb-3 bg-white">
          <Phone className="text-[#004AAD] w-5 h-5 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-gray-800">+213 6 00 00 00 00</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 mb-5 bg-white">
           <MapPin className="text-[#004AAD] w-5 h-5 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-gray-800">Algiers, Algeria</p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-[#004AAD] hover:bg-blue-700 text-white font-medium rounded-lg py-3 transition">
          Send a Message
        </button>
      </div>
    </section>
    </div>
  )
}

export default contact
