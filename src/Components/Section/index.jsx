import { useState } from "react";
function Section() {
  const [jobRole, setJobRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobs, setJobs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

   const fetchJobs = async () => {
    try {
      const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${jobRole}&location=${location}&job_type=${jobType}&experience_level=${experience}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0b742b8a56mshebcebc6cfce7fb7p15fa71jsnd276ad9f368e', // Replace with your RapidAPI key
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      setJobs(data.data); // Assuming the job listings are in the 'data' field
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleSearch = () => {
    setHasSearched(true);
    fetchJobs(); // Trigger the job search when the user clicks the "Search Job" button
  };



    return (
      <div>
        <div id="Container" className="flex flex-col justify-center items-center pt-52 w-full h-full">
          {/* Title and Description */}
          <div className="text-center px-4">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-2">
              Your Path to Opportunity Begins Here – Find Your Dream Job Today
            </h1>
            <span className="ml-6 text-sm md:text-base lg:text-l text-gray-500">
              Empowering job seekers with personalized opportunities and seamless applications, connecting talent to their next career move.
            </span>
          </div>
  
          {/* Search Inputs */}
          <div className="mt-7 flex flex-col gap-y-4 lg:flex-row lg:space-x-8  ">
            
            <select className="border pl-4 pt-2 pb-2 pr-2 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto "
             value={jobRole}
             onChange={(e) => setJobRole(e.target.value)}
            >
              <option value="" disabled selected hidden>Job Role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Android Developer">Android Developer</option>
              <option value="iOS Developer">iOS Developer</option>
             </select>
             <select
            className="border pl-6 pt-2 pb-2 pr-4 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            >
              <option value="" disabled selected hidden>Job Type</option>
              <option value="Remote">Full-Time</option>
              <option value="In-Office">part-Time</option>
              <option value="hybrid">Contract</option>
              
              </select>
            <select
              className="border pl-6 pt-2 pb-2 pr-4 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled selected hidden>Location</option>
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="hybrid">Hybrid</option>
              
              </select>
              <select className="border pl-6 pt-2 pb-2 pr-4 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto "
             value={experience}
             onChange={(e) => setExperience(e.target.value)}
            >
              <option value="" disabled selected hidden>Experience</option>
              <option value="Frontend Developer">Fresher</option>
              <option value="Full Stack Developer">Junior Level</option>
              <option value="Android Developer">Mid Level</option>
              <option value="iOS Developer">Senior Level</option>
             </select>
            <div>
              <button className="border bg-teal-300 pt-2 pb-2 pl-3 pr-3 rounded-md text-black font-medium hover:bg-teal-500 active:bg-teal-600 w-full sm:w-auto" onClick={handleSearch} >
                Search Job
              </button>
            </div>
          </div>
  
          {/* Trending Keywords */}
          <div className="mt-6 w-full px-4 lg:px-72">
            <span className="text-gray-700 font-medium">
              Trending Keywords:
              <span className="text-gray-500 border bg-gray-100 p-1 ml-2 inline-block">Data Science</span>
              <span className="text-gray-500 border bg-gray-100 p-1 ml-2 inline-block">Software Developer</span>
              <span className="text-gray-500 border bg-gray-100 p-1 ml-2 inline-block">SalesForce</span>
            </span>
          </div>
           {/* Display Job Listings */}
           <div className="mt-8 w-full px-4 lg:px-72">
  {hasSearched && jobs.length === 0 ? (
    <p>No jobs found. Try adjusting your search criteria.</p>
  ) : (
    <ul>
      {jobs.map((job, index) => (
        <li key={index} className="border p-4 mb-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold">{job.job_title}</h2>
          <p>{job.company_name}</p>
          <p className="text-gray-600">{job.location}</p> {/* Displaying the job location */}
          <p>{job.job_type}</p>
          <a href={job.url} className="text-blue-500 underline">View Job</a>
        </li>
      ))}
    </ul>
  )}
</div>

        </div>
      </div>
    );
  }
  
  export default Section;
  