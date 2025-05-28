import StatsCard from './shared/StatsCard';
import { MdStar } from 'react-icons/md';
import mockData from '@/data/mockData';


const Overview = () => {
    const { dashboardStats, candidates, jobs } = mockData;
    return (
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
  
        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {candidates.slice(0, 3).map((candidate) => (
                <div key={candidate.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={candidate.avatar} alt={candidate.name} className="size-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-medium text-gray-900">{candidate.name}</p>
                      <p className="text-sm text-gray-500">{candidate.appliedFor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <MdStar className="text-yellow-400" />
                      <span className="text-sm font-medium">{candidate.matchScore}%</span>
                    </div>
                    <p className="text-xs text-gray-500">{candidate.appliedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Jobs</h3>
            <div className="space-y-4">
              {jobs.slice(0, 3).map((job) => (
                <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{job.title}</p>
                    <p className="text-sm text-gray-500">{job.department} • {job.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{job.applications} apps</p>
                    <p className="text-xs text-gray-500">{job.posted}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Overview;