import React from 'react'
import { FiMapPin, FiBriefcase } from 'react-icons/fi';

interface JobCardProps {
    address: string;
    companyName: string;
    course: string;
    city?: string[];
    state: string;
    courseGroup: string;
    salary?: string; // New optional field
    companyLogo?: string; // New optional field
}

const JobCard: React.FC<JobCardProps> = ({ companyName, course, city, state, courseGroup, address }: JobCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 p-6">
  <div className="flex items-start gap-4">
    <div className="w-16 h-16 rounded-lg bg-gray-50 flex-shrink-0 overflow-hidden flex items-center justify-center text-blue-600 font-bold text-xl">
      {/* Placeholder for company initials */}
      {companyName.split(" ").slice(0,2).map(word => word[0]).join("")}
    </div>

    <div className="flex-1">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            {companyName}
          </h3>
          <p className="text-gray-700 font-medium">{course}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          View Company
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center text-gray-600">
          <FiMapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{city}, {state}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiBriefcase className="w-4 h-4 mr-2" />
          <span className="text-sm">{courseGroup}</span>
        </div>
        <div className="flex items-center text-gray-600 col-span-2">
          <FiMapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{address}</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default JobCard