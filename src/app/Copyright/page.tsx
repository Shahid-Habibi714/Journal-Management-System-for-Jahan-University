"use client";

import React, { useState } from "react";

function CopyrightPolicy() {
  const [activeSection, setActiveSection] = useState("copyright");
  const [openItems, setOpenItems] = useState({
    copyright: true,
    licensing: false,
    repositories: false,
    authorRights: false,
    permissions: false
  });

  const toggleSection = (section: string) => {
    setOpenItems({
      ...openItems,
      [section]: !openItems[section as keyof typeof openItems]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto text-center mb-16 mt-10">
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-blue-100 rounded-lg blur opacity-30 animate-pulse"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Copyright Policy</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Jahab Journal follows an open access policy to maximize the visibility and impact of research.
          </p>
        </section>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Policy Sections</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection("copyright")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === "copyright" ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Copyright Retention
                </button>
                <button
                  onClick={() => setActiveSection("licensing")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === "licensing" ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Licensing Terms
                </button>
                <button
                  onClick={() => setActiveSection("repositories")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === "repositories" ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Repository Policy
                </button>
                <button
                  onClick={() => setActiveSection("authorRights")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === "authorRights" ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Author Rights
                </button>
                <button
                  onClick={() => setActiveSection("permissions")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === "permissions" ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Permissions & Reuse
                </button>
              </nav>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Authors retain copyright</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>CC BY-NC license</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>No publication fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Copyright Retention Section */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 mb-8 transition-all duration-300 ${activeSection === "copyright" ? 'opacity-100' : 'opacity-70'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Copyright Retention</h2>
                <button 
                  onClick={() => toggleSection("copyright")}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openItems.copyright ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                  </svg>
                </button>
              </div>
              
              {openItems.copyright && (
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-600 text-xl">
                        ©
                      </div>
                      <p className="text-lg font-medium text-blue-800">
                        The author(s) retains all copyrights and publishing rights.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    At Jahab Journal, we believe that authors should maintain ownership of their intellectual property. 
                    Unlike many traditional publishers, we do not require authors to transfer their copyright to the journal.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3">Author Rights</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Retain full copyright ownership</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Reuse content in future works</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Distribute copies to colleagues</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3">Journal Rights</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Non-exclusive publishing rights</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Right to be cited as original publisher</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Right to disseminate in any form</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Licensing Terms Section */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 mb-8 transition-all duration-300 ${activeSection === "licensing" ? 'opacity-100' : 'opacity-70'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Licensing Terms</h2>
                <button 
                  onClick={() => toggleSection("licensing")}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openItems.licensing ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                  </svg>
                </button>
              </div>
              
              {openItems.licensing && (
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4 text-green-600 text-2xl font-bold">
                      CC BY-NC
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-800 mb-2">Creative Commons Attribution-NonCommercial 4.0</h3>
                      <p className="text-green-700">All articles published in Jahab Journal are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">You are free to:</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-green-600 flex-shrink-0">✓</span>
                          <span><strong>Share</strong> — copy and redistribute the material in any medium or format</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-green-600 flex-shrink-0">✓</span>
                          <span><strong>Adapt</strong> — remix, transform, and build upon the material</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Under the following terms:</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-blue-600 flex-shrink-0">①</span>
                          <span><strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5 text-yellow-600 flex-shrink-0">💼</span>
                          <span><strong>NonCommercial</strong> — You may not use the material for commercial purposes.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">How to attribute content from Jahab Journal:</h3>
                    <div className="p-4 bg-white rounded-lg border border-gray-200 font-mono text-sm">
                      [Author Name], "[Article Title]", Jahab Journal, Vol [Volume], Issue [Issue], [Year], pp [Pages], DOI: [DOI Number]. Licensed under CC BY-NC 4.0.
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Repository Policy Section */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 mb-8 transition-all duration-300 ${activeSection === "repositories" ? 'opacity-100' : 'opacity-70'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Repository Policy</h2>
                <button 
                  onClick={() => toggleSection("repositories")}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openItems.repositories ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                  </svg>
                </button>
              </div>
              
              {openItems.repositories && (
                <div className="space-y-6">
                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 text-purple-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <p className="text-lg font-medium text-purple-800">
                        Authors are encouraged to deposit all versions of their work in institutional or subject repositories.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 bg-white rounded-lg border border-gray-200 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Preprint</h3>
                      <p className="text-sm text-gray-600">The initial version before peer review</p>
                    </div>
                    
                    <div className="p-5 bg-white rounded-lg border border-gray-200 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Author's Accepted Manuscript</h3>
                      <p className="text-sm text-gray-600">The peer-reviewed version before copyediting</p>
                    </div>
                    
                    <div className="p-5 bg-white rounded-lg border border-gray-200 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Published Article</h3>
                      <p className="text-sm text-gray-600">The final version of record</p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Permitted Repositories:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <div className="text-blue-600 font-semibold">PubMed Central</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <div className="text-blue-600 font-semibold">Europe PMC</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <div className="text-blue-600 font-semibold">arXiv</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <div className="text-blue-600 font-semibold">Institutional</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Also permitted on:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 flex-shrink-0">✓</span>
                        <span>Author's personal website</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 flex-shrink-0">✓</span>
                        <span>Departmental website</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 flex-shrink-0">✓</span>
                        <span>ResearchGate</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 flex-shrink-0">✓</span>
                        <span>Academia.edu</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 flex-shrink-0">✓</span>
                        <span>Other academic networking sites</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-yellow-50 rounded-lg border border-yellow-100">
                    <h3 className="font-semibold text-yellow-800 mb-2">Requirements for repository deposits:</h3>
                    <ul className="space-y-2 text-yellow-700">
                      <li className="flex items-start">
                        <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 mt-0.5 text-yellow-600 flex-shrink-0">!</span>
                        <span>Copyright and source must be acknowledged</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 mt-0.5 text-yellow-600 flex-shrink-0">!</span>
                        <span>A link to the article's DOI must be included</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 mt-0.5 text-yellow-600 flex-shrink-0">!</span>
                        <span>For preprints, clearly state that the paper is not peer-reviewed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Additional sections for Author Rights and Permissions would follow similar structure */}
            
            <div className="text-center py-8">
              <p className="text-gray-600">For specific questions about our copyright policy, contact: <a href="mailto:copyright@jahabjournal.com" className="text-blue-600 hover:underline">copyright@jahabjournal.com</a></p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-500 pt-10 border-t border-gray-200/50 mt-12">
          <p>© {new Date().getFullYear()} Jahab Journal. All rights reserved.</p>
          <p className="text-sm mt-2">This copyright policy was last updated on March 15, 2023.</p>
        </footer>
      </div>
    </div>
  );
}

export default CopyrightPolicy;