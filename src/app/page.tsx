import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  const jobs = [
    {
      title: "Product Designer",
      company: "Gojek",
      location: "Marina East, Singapore",
      tags: ["Full-time", "Urgently hiring"],
      description: "You will be creating content for a wide range of local and international clients.",
      posted: "5 mins ago"
    },
    {
      title: "Copywriting Specialist",
      company: "Odama Studio",
      location: "Paris, France",
      tags: ["Freelance"],
      description: "Collaborate with the marketing team to optimize conversion.",
      posted: "3 days ago"
    },
    {
      title: "Full Stack Developer",
      company: "Twitter",
      location: "Malaga, Spain",
      tags: ["Full-time"],
      description: "Responsible for designing and testing projects/products.",
      posted: "1 week ago"
    }
  ];
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
    <Header />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-gray-600">
          Discover opportunities that match your skills and aspirations
        </p>
      </div>
      
      <div className="mb-12">
        <SearchBar />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-medium">250 Job results</p>
          <div className="flex gap-2">
            <select className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Highest Paid</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </main>
  );
}
