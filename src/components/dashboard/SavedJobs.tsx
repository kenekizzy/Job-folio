import React from 'react'
import JobCard from './JobCard'

const SavedJobs = () => {
    return (
        <div>
          <h1 className="text-2xl font-semibold mb-6">Saved Jobs</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <JobCard title="Frontend Developer" company="Google" location="Remote" />
            <JobCard title="UX Designer" company="Figma" location="San Francisco, CA" />
          </div>
        </div>
      )
}

export default SavedJobs