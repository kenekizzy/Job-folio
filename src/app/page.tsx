import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";


export default function Home() {
  const jobs = [
    {
      state: "Lagos",
      city: ["Oshodi"],
      course: "Electrical/Electronics & Telecommunications Engineering",
      companyName: "Nigerian Electricity Management Services Agency",
      address: "Along Agege Motor Road, Alasia Bus Stop, Before Bolade Bus Stop",
      courseGroup: "Engineering"
    },
    {
      state: "Lagos",
      city: ["Marina"],
      course: "Electrical/Electronics & Telecommunications Engineering",
      companyName: "Nigerian Port Authority (NPA)",
      address: "26/28 Marina, Lagos, Nigeria",
      courseGroup: "Engineering"
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
