"use client";

import React, { useState, useRef, useEffect } from "react";

interface Location {
  state: string;
  city: string;
  nearestBusStop: string;
  streetName: string;
}

interface ProfileFormData {
  fullName: string;
  email: string;
  phone: string;
  schoolType: string;
  schoolName: string;
  schoolAddress: string;
  department: string;
  courseOfStudy: string;
  skills: string;
  bio: string;
  cv: File | null;
  recommendationLetter: File | null;
  profilePicture: File | null;
  profilePictureUrl: string;
  location: Location;
}

const departments = {
  Engineering: [
    "Computer Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
  Sciences: ["Computer Science", "Physics", "Chemistry", "Mathematics"],
  Arts: ["English", "History", "Philosophy"],
  Business: ["Accounting", "Business Administration", "Economics"],
};

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const ProfileForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profilePictureRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: "",
    email: "",
    phone: "",
    schoolType: "",
    schoolName: "",
    schoolAddress: "",
    department: "",
    courseOfStudy: "",
    skills: "",
    bio: "",
    cv: null,
    recommendationLetter: null,
    profilePicture: null,
    profilePictureUrl: "",
    location: {
      state: "",
      city: "",
      nearestBusStop: "",
      streetName: "",
    },
  });
  const [availableCourses, setAvailableCourses] = useState<string[]>([]);

  useEffect(() => {
    if (formData.department) {
      setAvailableCourses(
        departments[formData.department as keyof typeof departments] || []
      );
    }
  }, [formData.department]);

  useEffect(() => {
    return () => {
      if (formData.profilePictureUrl) {
        URL.revokeObjectURL(formData.profilePictureUrl);
      }
    };
  }, [formData.profilePictureUrl]);

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        profilePicture: file,
        profilePictureUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log("Profile data:", {
      ...formData,
      cv: formData.cv
        ? {
            name: formData.cv.name,
            size: formData.cv.size,
            type: formData.cv.type,
          }
        : null,
      recommendationLetter: formData.recommendationLetter
        ? {
            name: formData.recommendationLetter.name,
            size: formData.recommendationLetter.size,
            type: formData.recommendationLetter.type,
          }
        : null,
        profilePicture: formData.profilePicture ? {
          name: formData.profilePicture.name,
          size: formData.profilePicture.size,
          type: formData.profilePicture.type
        } : null,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("location.")) {
      const locationField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "cv" | "recommendationLetter"
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [fileType]: e.target.files![0],
      }));
    }
  };

  // const handleFileClick = () => {
  //   fileInputRef.current?.click();
  // };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6 bg-green-600">
          <h2 className="text-2xl font-bold text-white">Profile Information</h2>
          <p className="mt-1 text-green-100">
            Update your professional profile
          </p>
        </div>

        {/* <form onSubmit={handleSubmit} className="px-8 py-6 space-y-8">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Education</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Separate skills with commas"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CV Upload</label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <div className="mt-1 flex items-center">
              <button
                type="button"
                onClick={handleFileClick}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
              >
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {formData.cv ? 'Change CV' : 'Upload CV'}
              </button>
              {formData.cv && (
                <span className="ml-3 text-sm text-gray-500">
                  {formData.cv.name}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              PDF, DOC, or DOCX up to 10MB
            </p>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
              >
                Save Profile
              </button>
            </div>
          </div>
        </form> */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm"
        >
          {/* Add profile picture section at the top */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                {formData.profilePictureUrl ? (
                  <img
                    src={formData.profilePictureUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <svg
                      className="w-16 h-16 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => profilePictureRef.current?.click()}
                className="absolute bottom-0 right-0 bg-green-600 rounded-full p-2 text-white hover:bg-green-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
            <input
              ref={profilePictureRef}
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
            <p className="text-sm text-gray-500">
              Click to upload profile picture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Personal Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Educational Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Educational Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School Type
                </label>
                <select
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Select School Type</option>
                  <option value="university">University</option>
                  <option value="polytechnic">Polytechnic</option>
                  <option value="college">College of Education</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School Address
                </label>
                <input
                  type="text"
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Course Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Course Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Select Department</option>
                  {Object.keys(departments).map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course of Study
                </label>
                <select
                  name="courseOfStudy"
                  value={formData.courseOfStudy}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                  disabled={!formData.department}
                >
                  <option value="">Select Course</option>
                  {availableCourses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Location Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  name="location.state"
                  value={formData.location.state}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Select State</option>
                  {nigerianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="location.city"
                  value={formData.location.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nearest Bus Stop
                </label>
                <input
                  type="text"
                  name="location.nearestBusStop"
                  value={formData.location.nearestBusStop}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Name
                </label>
                <input
                  type="text"
                  name="location.streetName"
                  value={formData.location.streetName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Additional Information
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Separate skills with commas"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          {/* File Uploads */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CV
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e, "cv")}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {formData.cv ? "Change CV" : "Upload CV"}
                  </button>
                  {formData.cv && (
                    <span className="ml-3 text-sm text-gray-500">
                      {formData.cv.name}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Recommendation Letter
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) =>
                      handleFileChange(e, "recommendationLetter")
                    }
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {formData.recommendationLetter
                      ? "Change Letter"
                      : "Upload Letter"}
                  </button>
                  {formData.recommendationLetter && (
                    <span className="ml-3 text-sm text-gray-500">
                      {formData.recommendationLetter.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
