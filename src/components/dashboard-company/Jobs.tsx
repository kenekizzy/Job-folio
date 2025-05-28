import JobCard from "./shared/JobCard";
import SearchFilter from "./shared/SearchFilter";
import { MdAdd } from "react-icons/md";
import mockData from "@/data/mockData";


const Jobs = () => {
    const { jobs } = mockData;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <MdAdd className="text-xl" />
            <span>Post New Job</span>
          </button>
        </div>
  
        <SearchFilter placeholder="Search jobs..." />
  
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    );
  };

  export default Jobs;