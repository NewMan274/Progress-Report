import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="grid sm:grid-rows-3 md:grid-rows-4 gap-3 bg-gray-100  text-gray-700">
        <section className="row-span-1 text-center px-20 py-5">
          <h1 className="text-2xl font-bold mb-3 text-gray-900">Daily Progress Report</h1>
          <h3 className="text-lg font-semibold mb-2">
            CONSTRUCTION OF DEEP-SEA PORT ACCESS ROAD IN LAGOS STATE THROUGH EPE TO SHAGAMU-BENIN EXPRESSWAY (54.2KM) IN LAGOS AND OGUN STATES, CONTRACT NO: 6993C SECTION 3 EPE TO OMU IJEBU-IJEBU ODE.
            (27.51KM), OGUN STATE.
          </h3>
          <p className="text-lg">Client: <span className="font-semibold">FEDERAL MINISTRY OF WORKS</span></p>
          <p className="text-lg">Contractor: <span className="font-semibold">Dangote Industries Limited (DIL)</span></p>
        </section>

        <section className="md:row-span-2 mx-10 md:mx-40 h-96 shadow-2xl rounded-lg bg-white px-2 items-center mt-0">
          <h2 className="mb-2 font-semibold text-lg">Project Route</h2>
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96586.55554260759!2d3.860951656616234!3d6.705548528344323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x103968a66d1a278b%3A0xbc9c567eae180351!2sIjebu%20Ode%2C%20Ogun%20State!3m2!1d6.8248815!2d3.9191404!4m5!1s0x103945de81c3d5c1%3A0x53ad7cfc19cae1be!2sEpe%2C%20Lagos!3m2!1d6.586663199999999!2d3.9699874!5e1!3m2!1sen!2sng!4v1754670883125!5m2!1sen!2sng"
              referrerPolicy="no-referrer-when-downgrade" 
              className="w-full h-80 overflow-hidden rounded-lg shadow-lg"></iframe>
          </div>
          <p className="pt-0 font-extralight">Route from Google Map</p>
        </section>

        <section className="grid sm:grid-row-2 sm:pt-7 sm:items-center gap-y-16 md:grid-cols-2 px-20 mt-4 md:mt-1 mb-3 md:h-52 pb-20 justify-items-center">
          <div className="bg-gray-100 p-4 shadow-lg rounded-lg justify-items-center w-56 md:w-80 hover:shadow-2xl transition-shadow duration-300">
            <Link to="/new-report">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-6 justify-self-center mb-2 shadow-lg bg-gray-300 rounded-full w-10 h-10 p-2 transform transition-transform duration-300 hover:scale-125 hover:bg-gray-200 hover:shadow-2xl">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </Link>
            <h4 className="font-semibold text-center">Create New Report</h4>
            <p className="text-xs">Document today's progress</p>
          </div>
          <div className="bg-gray-100 p-4 shadow-lg rounded-lg justify-items-center w-56 md:w-80 hover:shadow-2xl transition-shadow duration-300">
            <Link to="/archive">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5}     
                stroke="currentColor" 
                className="size-6 justify-self-center mb-2 shadow-lg bg-gray-300 rounded-full w-10 h-10 p-2 transform transition-transform duration-300 hover:scale-125 hover:bg-gray-200 hover:shadow-2xl">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </Link>
            <h4 className="font-semibold text-center">View Archive</h4>
            <p className="text-xs">Browse past daily reports</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage; 