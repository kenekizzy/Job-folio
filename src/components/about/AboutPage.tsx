import React from 'react'

const AboutPage = () => {
    const features = [
        {
          title: "Personalized Job Matches",
          description: "Get job recommendations tailored to your course of study, skills, and interests to maximize your chances of finding the perfect opportunity.",
          icon: "🎯"
        },
        {
          title: "Verified Companies",
          description: "We work with trusted organizations and companies to ensure that the job opportunities you see are authentic and safe.",
          icon: "✅"
        },
        {
          title: "Career Resources",
          description: "Access resume templates, interview tips, and career guides designed specifically for students and recent graduates.",
          icon: "📚"
        },
        {
          title: "Internship & Entry-Level Roles",
          description: "Find internships, part-time jobs, and entry-level positions that fit around your academic schedule and build your career experience.",
          icon: "💼"
        },
        {
          title: "Real-time Notifications",
          description: "Receive instant alerts when new job opportunities that match your profile are posted — never miss a chance.",
          icon: "🔔"
        },
        {
          title: "Community & Support",
          description: "Join a supportive community of students and graduates. Get advice, share experiences, and learn from peers.",
          icon: "🤝"
        }
      ];

      const steps = [
        "Create your free account and complete your student profile.",
        "Receive personalized job recommendations.",
        "Apply to jobs and internships with ease.",
        "Access career resources and interview tips.",
        "Track your applications and get notified of updates."
      ]
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About SIPS
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering students and fresh graduates to discover the best opportunities. Whether you're seeking an internship, part-time work, or a first full-time role — we connect you with employers looking for young talent.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
            Our mission is to bridge the gap between education and employment. We believe that every student deserves a fair chance at building a successful career. By providing personalized job recommendations, career resources, and trusted connections to employers, we help students navigate the world of work with confidence.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold rounded-full">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-base">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Use SIPS?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Kickstart Your Career?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of students already finding opportunities on StudentJobsHub.
          </p>
          <a
            href="/signup"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Get Started for Free
          </a>
        </section>

      </div>
    </div>
  )
}

export default AboutPage