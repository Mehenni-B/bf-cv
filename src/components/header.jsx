import React from 'react'
import { ArrowUpRight } from "lucide-react";

const header = () => {
  return (
    <div>
      {/* Header */}
      <nav className="flex items-center justify-between py-6 px-8">
      <h1 className="font-prompt font-normal text-[24px] leading-[140%] tracking-[0]">
  Boufradji Mostafa
</h1>


      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-[#004AAD]">Home</a></li>
        <li><a href="#experience" className="hover:text-[#004AAD]">Experience</a></li>
        <li><a href="#contact" className="hover:text-[#004AAD]">Contact</a></li>
      </ul>

      <button   onClick={() =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }className="bg-[#004AAD] hover:bg-[#003C8A] text-white px-5 py-2 rounded-lg flex items-center space-x-1 text-sm font-medium transition-colors">
  <span>Let’s Connect</span>
  <ArrowUpRight size={16} />
</button>
    </nav>
    </div>
  )
}

export default header
