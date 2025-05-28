const mockData = {
    dashboardStats: [
      { title: 'Active Jobs', value: '12', change: '+3 this week', icon: "", color: 'blue' },
      { title: 'Total Applications', value: '284', change: '+24 today', icon: "", color: 'green' },
      { title: 'Interviews Scheduled', value: '18', change: '+5 this week', icon: "", color: 'purple' },
      { title: 'Offers Extended', value: '6', change: '+2 this week', icon: "", color: 'orange' }
    ],
    jobs: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$120k - $160k',
        posted: '2 days ago',
        applications: 24,
        status: 'Active',
        priority: 'High',
        skills: ['React', 'TypeScript', 'Next.js'],
        description: 'We are looking for a talented Senior Frontend Developer to join our growing team...'
      },
      {
        id: 2,
        title: 'Product Manager',
        department: 'Product',
        location: 'Remote',
        type: 'Full-time',
        salary: '$130k - $180k',
        posted: '5 days ago',
        applications: 42,
        status: 'Active',
        priority: 'High',
        skills: ['Product Strategy', 'Analytics', 'Leadership'],
        description: 'Join our product team to drive innovation and growth...'
      },
      {
        id: 3,
        title: 'UX Designer',
        department: 'Design',
        location: 'New York, NY',
        type: 'Contract',
        salary: '$80k - $100k',
        posted: '1 week ago',
        applications: 18,
        status: 'Paused',
        priority: 'Medium',
        skills: ['Figma', 'User Research', 'Prototyping'],
        description: 'Create exceptional user experiences for our platform...'
      }
    ],
    candidates: [
      {
        id: 1,
        name: 'Alex Johnson',
        title: 'Frontend Developer',
        experience: '5 years',
        location: 'San Francisco, CA',
        salary: '$140k',
        email: 'alex@example.com',
        phone: '+1 555-0123',
        appliedFor: 'Senior Frontend Developer',
        status: 'Interview Scheduled',
        matchScore: 92,
        skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
        avatar: '/api/placeholder/40/40',
        appliedDate: '2024-05-20'
      },
      {
        id: 2,
        name: 'Sarah Chen',
        title: 'Product Manager',
        experience: '7 years',
        location: 'Remote',
        salary: '$160k',
        email: 'sarah@example.com',
        phone: '+1 555-0124',
        appliedFor: 'Product Manager',
        status: 'Under Review',
        matchScore: 88,
        skills: ['Product Strategy', 'Analytics', 'Agile', 'Leadership'],
        avatar: '/api/placeholder/40/40',
        appliedDate: '2024-05-18'
      },
      {
        id: 3,
        name: 'Mike Rodriguez',
        title: 'Senior UX Designer',
        experience: '6 years',
        location: 'Austin, TX',
        salary: '$120k',
        email: 'mike@example.com',
        phone: '+1 555-0125',
        appliedFor: 'UX Designer',
        status: 'Shortlisted',
        matchScore: 85,
        skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping'],
        avatar: '/api/placeholder/40/40',
        appliedDate: '2024-05-22'
      }
    ]
  };
  

  export default mockData