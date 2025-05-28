import React from 'react';
import { MdLocationOn, MdSchedule, MdAttachMoney, MdVisibility, MdEdit, MdShare, MdDelete } from 'react-icons/md';

const JobCard = ({ job }: { job: {
  title: string;
  priority: string;
  status: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  description: string;
  applications: number;
  posted: string;
} }) => {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                job.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {job.priority} Priority
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {job.status}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <span className="flex items-center space-x-1">
                <MdLocationOn />
                <span>{job.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MdSchedule />
                <span>{job.type}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MdAttachMoney />
                <span>{job.salary}</span>
              </span>
            </div>
  
            <div className="flex items-center space-x-2 mb-3">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
  
            <p className="text-gray-600 text-sm">{job.description}</p>
          </div>
  
          <div className="ml-6 text-right">
            <div className="flex items-center space-x-2 mb-4">
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <MdVisibility />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <MdEdit />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <MdShare />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600">
                <MdDelete />
              </button>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{job.applications}</p>
              <p className="text-xs text-gray-500">Applications</p>
              <p className="text-xs text-gray-500 mt-1">Posted {job.posted}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default JobCard;