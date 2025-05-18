import React from 'react'

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    tags: string[];
    description: string;
    posted: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, tags, description, posted }: JobCardProps) => {
  return (
    <div className="bg-white p-5 rounded shadow mb-4 border">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-xs px-2 py-1 rounded text-gray-600">{tag}</span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3">{description}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-xs text-gray-400">Posted {posted}</p>
        </div>
      </div>
    </div>
  )
}

export default JobCard