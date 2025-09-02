"use client";

import React, { useState } from "react";

function ReviewerTeam() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const reviewers = [
    {
      name: "Prof. Dr. Khushdil Maroof",
      department: "",
      faculty: " Faculty",
      university: "jahan University",
      country: "Afghanistan",
      email: "khmaroof@nu.edu.af",
      category: "BBA"
    },
    {
      name: "Assist. Prof. Masaoud Moahid",
      department: "   ",
      faculty: "BBA Faculty",
      university: "jahan University",
      country: "Afghanistan",
      email: "masoodnufa@gmail.com",
      category: "BBA"
    },
    {
      name: "Assist. Prof. Mabrouk Elsabagh",
      department: "",
      faculty: "",
      university: "jahan University",
      country: "Afghanistan",
      email: "elsabaghmr@gmail.com",
      category: "BBA"
    },
    {
      name: "Dr. Wahdatullah Khpalwak",
      department: "IT ",
      faculty: "BCS",
      university: "",
      country: "Afghanistan",
      email: "khpalwak.uasd@gmail.com",
      category: "BCS"
    },
    {
      name: "Dr. Ahmad Samir Azimi",
      department: "IS",
      faculty: "BCS",
      university: "University of jahan",
      country: "Afghanistan",
      email: "ahmadsamir.azimi@gmail.com",
      category: "BCS"
    },
    {
      name: "Dr. Sayed Jalal Moosavi",
      department: "IT",
      faculty: "BCS",
      university: "University of jahan",
      country: "Afghanistan",
      email: "sayed.gardizi@gmail.com",
      category: "BCS"
    },
    {
      name: "Dr. Shafiqullah Aryan",
      department: "IS",
      faculty: "BCS Faculty",
      university: "jahan University",
      country: "Afghanistan",
      email: "shafiqaryan@gmail.com",
      category: "BCS"
    },
    {
      name: "Mr. Mohammad Ismail Sadat",
      department: "IT",
      faculty: "BCS Faculty",
      university: "jahan University",
      country: "Afghanistan",
      email: "sadat.horts@gmail.com",
      category: "BCS"
    },
    {
      name: "Dr. Rahmatullah Hashimi",
      department: "IS",
      faculty: "",
      university: "jahan University ",
      country: "Afghanistan",
      email: "rhashimiszu@gmail.com",
      category: "BCS"
    }
  ];


  const filteredReviewers = reviewers.filter(reviewer => {
    const matchesDepartment = activeDepartment === "All" || reviewer.department.includes(activeDepartment);
    const matchesSearch = reviewer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         reviewer.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reviewer.university.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-500/10 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto text-center mb-16 mt-10">
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-green-100 rounded-lg blur opacity-30 animate-pulse"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">Reviewer Team</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Meet our distinguished panel of experts who ensure the quality and integrity of research published in Jahab Journal.
          </p>
        </section>

        {/* Filters and Search */}
        <section className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Reviewers</h2>
            
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Reviewers
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search by name, department, or university..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Department
              </label>
              <div className="flex flex-wrap gap-3">
              
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{reviewers.length}</div>
              <div className="text-sm text-gray-600">Total Reviewers</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{new Set(reviewers.map(r => r.country)).size}</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
            
              <div className="text-sm text-gray-600">Departments</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{new Set(reviewers.map(r => r.university)).size - 1}</div>
              <div className="text-sm text-gray-600">Universities</div>
            </div>
          </div>
        </section>

        {/* Reviewers Grid */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {activeDepartment === "All" ? "All Reviewers" : `${activeDepartment} Reviewers`} 
            <span className="text-green-600 ml-2">({filteredReviewers.length})</span>
          </h2>

          {filteredReviewers.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-gray-600">No reviewers found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviewers.map((reviewer, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">
                      {reviewer.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{reviewer.name}</h3>
                      <p className="text-sm text-green-600">{reviewer.department}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {reviewer.faculty && (
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <span className="text-sm text-gray-600">{reviewer.faculty}</span>
                      </div>
                    )}
                    
                    {reviewer.university && (
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                        </svg>
                        <span className="text-sm text-gray-600">{reviewer.university}</span>
                      </div>
                    )}
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm text-gray-600">{reviewer.country}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={`mailto:${reviewer.email}`} 
                      className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      Contact
                    </a>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {reviewer.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10 bg-[size:40px_40px] -z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Interested in Becoming a Reviewer?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our esteemed panel of experts and contribute to the advancement of knowledge in your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Apply to Review
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 pt-10 border-t border-gray-200/50">
          <p>© {new Date().getFullYear()} Jahab Journal. All rights reserved.</p>
          <p className="text-sm mt-2">For questions about our reviewer team, contact: <a href="mailto:editors@jahabjournal.com" className="text-green-600 hover:underline">editors@jahabjournal.com</a></p>
        </footer>
      </div>
    </div>
  );
}

export default ReviewerTeam;