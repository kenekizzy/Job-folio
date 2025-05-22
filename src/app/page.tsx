import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  const jobs = [
    {
      title: "Software Engineering Intern",
      company: "Andela",
      location: "Lagos, Nigeria",
      tags: ["Internship", "Remote-friendly"],
      description: "Assist in building scalable web applications with mentorship from senior engineers.",
      posted: "10 mins ago",
      logo: "/logos/andela.png"
    },
    {
      title: "Product Design Intern",
      company: "Paystack",
      location: "Lagos, Nigeria",
      tags: ["Internship"],
      description: "Support the design team in creating seamless user experiences for merchants.",
      posted: "30 mins ago",
      logo: "/logos/paystack.png"
    },
    {
      title: "Marketing Intern",
      company: "Flutterwave",
      location: "Lekki, Nigeria",
      tags: ["Internship"],
      description: "Work with the growth team to execute brand campaigns and outreach programs.",
      posted: "1 hour ago",
      logo: "/logos/flutterwave.png"
    },
    {
      title: "Data Analyst Intern",
      company: "Carbon",
      location: "Remote - Nigeria",
      tags: ["Internship", "Remote"],
      description: "Assist in preparing business insights and dashboards for decision-making.",
      posted: "Today",
      logo: "/logos/carbon.png"
    },
    {
      title: "UI/UX Intern",
      company: "Kuda Bank",
      location: "Yaba, Lagos",
      tags: ["Internship"],
      description: "Contribute to UI designs and usability testing for mobile banking products.",
      posted: "2 hours ago",
      logo: "/logos/kuda.png"
    },
    {
      title: "Customer Success Intern",
      company: "Mono",
      location: "Ikeja, Lagos",
      tags: ["Internship"],
      description: "Support customers by resolving product queries and documenting feedback.",
      posted: "Yesterday",
      logo: "/logos/mono.png"
    },
    {
      title: "Frontend Developer Intern",
      company: "TeamApt",
      location: "Victoria Island, Lagos",
      tags: ["Internship"],
      description: "Assist with the development of web user interfaces using React and Tailwind.",
      posted: "2 days ago",
      logo: "/logos/teamapt.png"
    },
    {
      title: "Cybersecurity Intern",
      company: "Interswitch",
      location: "Lagos, Nigeria",
      tags: ["Internship"],
      description: "Learn to monitor and assess system security across platforms.",
      posted: "3 days ago",
      logo: "/logos/interswitch.png"
    },
    {
      title: "Operations Intern",
      company: "Trove Finance",
      location: "Remote - Nigeria",
      tags: ["Internship", "Remote"],
      description: "Support daily operations and documentation of the investment platform.",
      posted: "4 days ago",
      logo: "/logos/trove.png"
    },
    {
      title: "QA Intern",
      company: "BuyCoins",
      location: "Lagos, Nigeria",
      tags: ["Internship"],
      description: "Test application flows, write bug reports and assist in automating test cases.",
      posted: "5 days ago",
      logo: "/logos/buycoins.png"
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
