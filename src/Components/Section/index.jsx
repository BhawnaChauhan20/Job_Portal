
function Section() {
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
            >
              <option value="" disabled selected hidden>Job Role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Android Developer">Android Developer</option>
              <option value="iOS Developer">iOS Developer</option>
             </select>
             <select
              className="border pl-6 pt-2 pb-2 pr-4 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto"
            >
              <option value="" disabled selected hidden>Job Type</option>
              <option value="Remote">Full-Time</option>
              <option value="In-Office">part-Time</option>
              <option value="hybrid">Contract</option>
              
              </select>
            <select
              className="border pl-6 pt-2 pb-2 pr-4 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto"
            >
              <option value="" disabled selected hidden>Location</option>
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="hybrid">Hybrid</option>
              
              </select>
              <select className="border pl-6 pt-2 pb-2 pr-4 text-gray-500 focus:ring-gray-600 focus:border-l-gray-600 rounded-md flex-grow md:w-auto "
            >
              <option value="" disabled selected hidden>Experience</option>
              <option value="Frontend Developer">Fresher</option>
              <option value="Full Stack Developer">Junior Level</option>
              <option value="Android Developer">Mid Level</option>
              <option value="iOS Developer">Senior Level</option>
             </select>
            <div>
              <button className="border bg-teal-300 pt-2 pb-2 pl-3 pr-3 rounded-md text-black font-medium hover:bg-teal-500 active:bg-teal-600 w-full sm:w-auto">
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
        </div>
      </div>
    );
  }
  
  export default Section;
  
=======

function Section() {
  return (
    <div>
        <div className="">
       <div id="Container" className="flex flex-col justify-center items-center pt-52 w-full h-full">
        <div className="text-center px-4">
            <h1 className="xl:text-3xl md:text-3xl sm:text-2xl font-bold mb-2">Your Path to Opportunity Begins Here – Find Your Dream Job Today</h1>
            <span className="ml-6 text-sm md:text-base xl:text-l text-gray-500 ">Empowering job seekers with personalized opportunities and seamless applications, connecting talent to their next career move.</span>
        </div>
        {/* Search Inputs Here */}
        <div className="mt-7 flex  flex-col space-y-4  xl:flex-row xl:space-x-6" >
    
          
                <input type="text" placeholder="Job title,Company..."className="border pl-4 pt-2 pb-2 pr-2 placeholder-gray-500 placeholder-opacity-35 focus:ring-gray-600 focus:border-l-gray-600 rounded-md w-full md:w-auto "/>
                <input type="select"placeholder="Select Region" className="border pl-4 pt-2 pb-2 pr-2 placeholder-gray-500 placeholder-opacity-35 focus:ring-gray-600 focus:border-l-gray-600 rounded-md w-full md:w-auto "/>
                <input type="text" placeholder="Select Job Type" className="border pl-4 pt-2 pb-2 pr-2  placeholder-gray-500 placeholder-opacity-35 focus:ring-gray-600 focus:border-l-gray-600 rounded-md w-full md:w-auto "/>
           
            <div>
            <button className="border bg-teal-300 pt-2 pb-2 pl-3 pr-3 rounded-md text-black font-medium hover:bg-teal-500 active:bg-teal-600 w-full sm:w-auto">Search Job</button>
            </div>
             
        </div>
       </div>
       {/* Trending Keywords Here */}  
        <div className=" mt-6 px-72">
                <span className=" ml-20 text-gray-700 font-medium"> 
                    Trending Keywords:
                     <span className="text-gray-500 border bg-gray-100 p-1 inline-block
                     "> Data Science </span>
                     <span className="text-gray-500 border bg-gray-100 p-1 inline-block
                     "> Software developer </span> 
                     <span className="text-gray-500 border bg-gray-100 p-1 inline-block
                     "> SalesForce </span>
                </span>
             </div>
             </div>
    </div>
  )
}

export default Section

