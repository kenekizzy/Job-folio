'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { FiFilter, FiBookmark, FiUserCheck } from 'react-icons/fi';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  salary: string;
  skills: string[];
  type: string;
  postedDate: string;
}

const Recommendations = () => {
    const router = useRouter();
    const { user } = useAuth();
    const [isProfileComplete, setIsProfileComplete] = useState(true);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [jobs] = useState<Job[]>([
        {
          id: 1,
          title: 'Frontend Developer',
          company: 'TechCorp',
          location: 'Remote',
          matchScore: 95,
          salary: '80k - 120k',
          skills: ['React', 'TypeScript', 'Tailwind'],
          type: 'Full-time',
          postedDate: '2 days ago'
        },
        // Add more mock jobs here
      ]);

      useEffect(() => {
        // Check if user profile is complete (this is a mock check, adjust based on your actual profile requirements)
        const checkProfileCompletion = () => {
            // const profileData = localStorage.getItem('profileData');
            setIsProfileComplete(true);
        };

        checkProfileCompletion();
    }, []);
    
      const [filters, setFilters] = useState({
        location: '',
        jobType: '',
        skillLevel: ''
      });

      if (!isProfileComplete) {
        return (
            <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <FiUserCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Profile First</h2>
                        <p className="text-gray-600 mb-6">To provide you with the most relevant job recommendations, we need to know more about your skills and experience.</p>
                        <button
                            onClick={() => router.push('/dashboard/profile')}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                        >
                            Complete Profile
                        </button>
                    </div>
                </div>
            </div>
        );
    }
  return (
    <>
    {showRecommendations ? (
      <>
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Job Recommendations</h1>
          <p className="mt-2 text-gray-600">Personalized job matches based on your profile and preferences</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2">
              <FiFilter className="w-4 h-4" />
              Clear All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="block w-full rounded-lg border border-gray-300 text-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option value="">Location</option>
              <option value="remote">Remote</option>
              <option value="onsite">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select
              className="block w-full rounded-lg border border-gray-300 text-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={filters.jobType}
              onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
            >
              <option value="">Job Type</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="contract">Contract</option>
            </select>
            <select
              className="block w-full rounded-lg border border-gray-300 text-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={filters.skillLevel}
              onChange={(e) => setFilters({ ...filters, skillLevel: e.target.value })}
            >
              <option value="">Skill Level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {job.matchScore}% Match
                    </span>
                    <button className="text-gray-400 hover:text-green-600 transition-colors">
                      <FiBookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500 text-sm gap-4">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-gray-500">Posted {job.postedDate}</span>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </>
    ): (
      <>
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to See Your Recommendations?</h2>
                      <p className="text-gray-600 mb-6">We have analyzed your profile and found some great matches for you.</p>
                      <button
                          onClick={() => setShowRecommendations(true)}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                      >
                          View Recommendations
                      </button>
                  </div>
              </div>
          </div>
      </>
    )}

      
    </>
  )
}

export default Recommendations