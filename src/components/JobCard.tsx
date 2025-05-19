import React from 'react'
import { FiMapPin, FiClock, FiBriefcase, FiDollarSign } from 'react-icons/fi';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    tags: string[];
    description: string;
    posted: string;
    salary?: string; // New optional field
    companyLogo?: string; // New optional field
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, tags, description, posted, salary = "$50k - $80k", }: JobCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 p-6">
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="w-16 h-16 rounded-lg bg-gray-50 flex-shrink-0 overflow-hidden">
          {/* <img 
            src={companyLogo} 
            alt={`${company} logo`}
            className="w-full h-full object-cover"
          /> */}
        </div>

        <div className="flex-1">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-700 font-medium">{company}</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Details */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center text-gray-600">
              <FiMapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FiBriefcase className="w-4 h-4 mr-2" />
              <span className="text-sm">{tags[0]}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FiDollarSign className="w-4 h-4 mr-2" />
              <span className="text-sm">{salary}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FiClock className="w-4 h-4 mr-2" />
              <span className="text-sm">{posted}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard