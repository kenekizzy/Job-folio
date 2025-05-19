import React from 'react'
import ApplicationCard from './ApplicationCard'
import JobCard from './JobCard'
import StatCard from './StatCard'

const DashboardLanding = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Welcome back, Jane 👋</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Jobs Applied" value="12" />
        <StatCard title="Saved Jobs" value="8" />
        <StatCard title="Recommendations" value="5" />
      </div>

      {/* Recommended Jobs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <JobCard title="Frontend Developer" company="Google" location="Remote" />
          <JobCard title="UI/UX Designer" company="Spotify" location="New York, NY" />
        </div>
      </section>

      {/* Recent Applications */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
        <ApplicationCard position="Backend Engineer" company="Amazon" appliedDate="May 10, 2025" status="Under Review" />
        <ApplicationCard position="Product Manager" company="Meta" appliedDate="May 5, 2025" status="Interview" />
      </section>
    </div>
  )
}

export default DashboardLanding