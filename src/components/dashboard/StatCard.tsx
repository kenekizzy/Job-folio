import React from 'react'

interface StatCardProps {
    title: string;
    value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      )
}

export default StatCard