import React from 'react'
import {Mail , ArrowRight } from "lucide-react";

const hero = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:py-24 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h1 className="font-poppins font-medium text-[48px] leading-[120%] tracking-[0] text[#000000] mb-8">
          Global Manager helping businesses grow worldwide.
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Driving international growth through strategic leadership, innovation, and
          cross-cultural collaboration.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
             onClick={() =>
             document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                     }
            className="bg-[#004AAD] hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2 font-medium"
          >
            <span>View Experience</span>
            {<ArrowRight size={18} />}
          </button>

          <button
             onClick={() =>
             document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                     }
            className="border border-[#004AAD] text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center space-x-2 font-medium"
          >
            <span>Contact Me</span>
            <Mail size={18} />
          </button>
        </div>
      </div>

      {/* Image Placeholder */}
     
        <img className="mt-12 md:mt-0 md:w-[420px] h-[420px] rounded-md"  src="/image/WhatsApp Image 2025-10-09 à 15.02.58_8e4dd775.jpg" alt="" />
    </section>
    </div>
  )
}

export default hero
