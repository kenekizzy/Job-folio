import Header from "@/components/Header";
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
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <SearchBar />
      <div className="p-6 max-w-6xl mx-auto">
        <p className="text-gray-700 mb-4">250 Job results</p>
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
    </main>
  );
}
