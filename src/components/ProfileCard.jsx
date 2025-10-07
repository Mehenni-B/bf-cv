import React, { useState } from "react";
import { Calendar, ChevronUp, ChevronDown } from "lucide-react";

const ProfileCard = ({
  logo,
  company,
  position,
  start,
  end,
  company_name,
  legal_from,
  manager,
  date_of_creation,
  headquarters,
  capital,
  main_buisness_sector,
  core_activities,
  secondary_activities,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      {/* Top Row: Logo + Basic Info + Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Section */}
        <div className="flex gap-4 items-start">
          <img
            src={logo}
            alt={company}
            className="w-16 h-16 object-contain rounded-lg border"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
            <p className="text-sm text-gray-600 mb-2">{position}</p>

            <div className="text-sm text-gray-700 leading-relaxed space-y-1">
              <p>
                <strong>Company Name:</strong> {company_name}
              </p>
              <p>
                <strong>Legal Form:</strong> {legal_from}
              </p>
              <p>
                <strong>Manager:</strong> {manager}
              </p>
              <p>
                <strong>Date of Creation:</strong> {date_of_creation}
              </p>
              <p>
                <strong>Headquarters:</strong> {headquarters}
              </p>
              <p>
                <strong>Capital:</strong> {capital}
              </p>
              <p>
                <strong>Main Business Sector:</strong> {main_buisness_sector}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-2 min-w-[120px]">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className=" text-gray-500 hover:underline text-sm font-medium flex items-center gap-1"
          >
            {showDetails ? "Hide Details" : "Show Details"}
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {start} – {end}
          </div>
        </div>
      </div>

      {/* Bottom Collapsible Section */}
      {showDetails && (
        <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-700 leading-relaxed space-y-2 transition-all duration-300 ease-in-out">
          <p className="font-semibold text-gray-900">Core Activities:</p>
          <ul className="list-disc ml-6 space-y-1">
            {core_activities?.map((activity, i) => (
              <li key={i}>{activity}</li>
            ))}
          </ul>

          <p className="font-semibold text-gray-900 mt-4">
            Secondary Activities:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            {secondary_activities?.map((activity, i) => (
              <li key={i}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
