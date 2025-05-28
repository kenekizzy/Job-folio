import React from 'react';
import { MdStar, MdEmail, MdPhone, MdMessage, MdCancel, MdCheckCircle, MdBookmarkAdd } from 'react-icons/md';

const CandidateCard = ({ candidate }: { candidate: {
  avatar: string;
  name: string;
  title: string;
  matchScore: number;
  appliedFor: string;
  experience: string;
  location: string;
  salary: string;
  status: string;
  skills: string[];
} }) => {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img src={candidate.avatar} alt={candidate.name} className="size-12 rounded-full bg-gray-200" />
            <div>
              <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
              <p className="text-sm text-gray-600">{candidate.title}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MdStar className="text-yellow-400" />
            <span className="text-sm font-medium">{candidate.matchScore}%</span>
          </div>
        </div>
  
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Applied for:</span>
            <span className="font-medium">{candidate.appliedFor}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Experience:</span>
            <span>{candidate.experience}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Location:</span>
            <span>{candidate.location}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Expected Salary:</span>
            <span>{candidate.salary}</span>
          </div>
        </div>
  
        <div className="mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            candidate.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
            candidate.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
            candidate.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {candidate.status}
          </span>
        </div>
  
        <div className="flex flex-wrap gap-1 mb-4">
          {candidate.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {skill}
            </span>
          ))}
          {candidate.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              +{candidate.skills.length - 3} more
            </span>
          )}
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <MdEmail />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <MdPhone />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <MdMessage />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-red-600">
              <MdCancel />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600">
              <MdCheckCircle />
            </button>
            <button className="p-2 text-gray-600 hover:text-yellow-600">
              <MdBookmarkAdd />
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default CandidateCard;