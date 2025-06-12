import React from 'react'

interface JobCardProps {
    title: string;
    company: string;
    location: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location }) => {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
          <p className="text-gray-600">{company}</p>
          <p className="text-gray-400 text-sm">{location}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            View Details
          </button>
        </div>
      );
}

export default JobCard