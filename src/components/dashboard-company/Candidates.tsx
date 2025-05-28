import {MdDownload, MdSend} from 'react-icons/md';
import CandidateCard from './shared/CandidateCard';
import SearchFilter from './shared/SearchFilter';
import mockData from '@/data/mockData';

const Candidates = () => {
    const candidates = mockData.candidates;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Candidates</h2>
          <div className="flex items-center space-x-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <MdDownload />
              <span>Export</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <MdSend />
              <span>Invite Candidates</span>
            </button>
          </div>
        </div>
  
        <SearchFilter 
          placeholder="Search candidates..." 
          showJobFilter={true} 
          showStatusFilter={true} 
        />
  
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    );
  };

  export default Candidates;