import React from 'react'
import { MdNotifications, MdPerson } from 'react-icons/md'

const Topbar = () => {

    // const getPageTitle = (view: string) => {
    //     switch (view) {
    //       case 'overview': return 'Dashboard Overview';
    //       case 'jobs': return 'Job Postings';
    //       case 'candidates': return 'Candidates';
    //       case 'interviews': return 'Interviews';
    //       case 'analytics': return 'Analytics';
    //       default: return 'Dashboard';
    //     }
    //   };
    
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900 capitalize">
            Dashboard
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <MdNotifications className="text-xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <MdPerson className="text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar