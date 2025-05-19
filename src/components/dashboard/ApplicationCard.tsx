import React from 'react'

interface ApplicationCardProps {
  position: string;
  company: string;
  status: string;
  appliedDate: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({position, company, appliedDate, status}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{position}</h3>
          <p className="text-gray-500">{company}</p>
          <p className="text-sm text-gray-400">Applied on {appliedDate}</p>
        </div>
        <span className="self-start px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
          {status}
        </span>
      </div>
    </div>
  )
}

export default ApplicationCard