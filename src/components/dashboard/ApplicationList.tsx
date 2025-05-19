import React from 'react';

interface Application {
  jobTitle: string;
  company: string;
  status: 'pending' | 'interviewed' | 'rejected' | 'accepted';
  appliedDate: string;
}

const ApplicationsList = () => {
  const applications: Application[] = [
    {
      jobTitle: "Product Designer",
      company: "Gojek",
      status: "pending",
      appliedDate: "2024-02-20"
    },
    // Add more applications as needed
  ];

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'interviewed': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">My Applications</h2>
      {applications.map((application, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{application.jobTitle}</h3>
              <p className="text-gray-600">{application.company}</p>
              <p className="text-sm text-gray-500">Applied on: {application.appliedDate}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(application.status)}`}>
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationsList;