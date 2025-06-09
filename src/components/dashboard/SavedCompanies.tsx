'use client';

import React, { useState } from 'react';
import { FiMapPin, FiUsers, FiGlobe, FiTrash2 } from 'react-icons/fi';
import  Image  from 'next/image';

interface SavedCompany {
  id: number;
  name: string;
  industry: string;
  location: string;
  size: string;
  website: string;
  logo?: string;
  description: string;
}

const SavedCompanies = () => {
    const [companies, setCompanies] = useState<SavedCompany[]>([
        {
          id: 1,
          name: 'TechCorp',
          industry: 'Technology',
          location: 'San Francisco, CA',
          size: '1000-5000 employees',
          website: 'www.techcorp.com',
          description: 'Leading technology solutions provider with a focus on innovation.'
        },
        // Add more mock companies here
      ]);
    
      const handleRemove = (id: number) => {
        setCompanies(companies.filter(company => company.id !== id));
      };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Saved Companies</h1>
          <p className="mt-2 text-gray-600">Track and manage your favorite companies</p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-500">
                      {company.logo ? (
                        <Image 
                          src={company.logo} 
                          alt={company.name} 
                          width={64}
                          height={64}
                          className="size-full object-cover rounded-lg" 
                        />
                      ) : (
                        company.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                      <p className="text-gray-600">{company.industry}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(company.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="Remove from saved"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-500 gap-2">
                    <FiMapPin className="w-4 h-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 gap-2">
                    <FiUsers className="w-4 h-4" />
                    <span>{company.size}</span>
                  </div>
                  <div className="flex items-center text-gray-500 gap-2">
                    <FiGlobe className="w-4 h-4" />
                    <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                      {company.website}
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4">{company.description}</p>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    View Jobs
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {companies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No saved companies</h3>
            <p className="mt-1 text-gray-500">Start saving companies you are interested in to track them here.</p>
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700">
                Explore Companies
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedCompanies