'use client';

import React from 'react';
import { MdSearch, MdFilterList } from 'react-icons/md';

const SearchFilter = ({ 
  placeholder, 
  onSearch,
  showJobFilter = false, 
  showStatusFilter = false 
}: {
  placeholder: string;
  onSearch?: (value: string) => void;
  showJobFilter?: boolean;
  showStatusFilter?: boolean;
}) => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder={placeholder}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
          
          {showJobFilter && (
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Positions</option>
              <option>Senior Frontend Developer</option>
              <option>Product Manager</option>
              <option>UX Designer</option>
            </select>
          )}
          
          {showStatusFilter && (
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Under Review</option>
              <option>Interview Scheduled</option>
              <option>Shortlisted</option>
            </select>
          )}
          
          {!showJobFilter && !showStatusFilter && (
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
              <MdFilterList />
              <span>Filter</span>
            </button>
          )}
        </div>
      </div>
    );
  };

  export default SearchFilter;
  