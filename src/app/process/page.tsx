"use client";

import React, { useState } from "react";

function PeerReviewProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Submission",
      description: "Authors submit their work through our online portal, ensuring all guidelines are followed.",
      icon: "📝",
      details: "All submissions are initially checked for completeness, formatting, and scope appropriateness."
    },
    {
      title: "Editorial Assessment",
      description: "Our editors evaluate the manuscript's suitability for Jahab Journal.",
      icon: "🔍",
      details: "The editorial team assesses the paper's alignment with our journal's scope, originality, and overall quality."
    },
    {
      title: "Peer Review",
      description: "Experts in the field evaluate the manuscript for quality, accuracy, and significance.",
      icon: "👥",
      details: "Typically 2-3 reviewers with relevant expertise provide detailed feedback on methodology, results, and conclusions."
    },
    {
      title: "Decision",
      description: "The editor makes a decision based on reviewer recommendations.",
      icon: "✅",
      details: "Possible outcomes: Accept, Minor Revisions, Major Revisions, or Reject. Most papers require some revisions."
    },
    {
      title: "Revision",
      description: "Authors address reviewer comments and submit a revised manuscript.",
      icon: "✏️",
      details: "Authors provide a detailed response to all reviewer comments and highlight changes made."
    },
    {
      title: "Publication",
      description: "Accepted papers are copyedited, formatted, and published online.",
      icon: "🎉",
      details: "Final versions are professionally typeset, assigned DOIs, and promoted through our channels."
    }
  ];

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
              Peer Review Process at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Jahab Journal</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Our rigorous peer review process ensures the highest standards of academic excellence, 
            integrity, and innovation in all published research.
          </p>
        </section>

        {/* Process Overview */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </span>
              Our Review Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  At Jahab Journal, we believe that rigorous peer review is the cornerstone of academic publishing. 
                  Our process is designed to be:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span >
                    <span className="text-black"><strong className="text-black">Thorough</strong> - Each submission receives detailed evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-black"><strong>Fair</strong> - We evaluate based on merit alone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-black"><strong>Constructive</strong> - Reviews help authors improve their work</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-3">Review Timeline</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">First decision</span>
                    <span className="text-sm font-medium text-blue-700">4-6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Publication after acceptance</span>
                    <span className="text-sm font-medium text-blue-700">2-3 weeks</span>
                  </div>
                  <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600">Average acceptance rate: <strong className="text-gray-800">22%</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">The Review Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step indicator */}
                  <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 ${activeStep === index ? 'bg-blue-100 border-blue-500 scale-110' : 'bg-white border-blue-300'} transition-all duration-300 shadow-lg`}>
                        {step.icon}
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-blue-800">
                        Step {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="md:w-1/2">
                    <div className={`bg-white rounded-2xl shadow-lg p-6 border ${activeStep === index ? 'border-blue-300 shadow-xl' : 'border-gray-100'} transition-all duration-300`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      {activeStep === index && (
                        <p className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">{step.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethics Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </span>
              Ethical Guidelines
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-black">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Reviewers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Maintain confidentiality of the review process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Declare any conflicts of interest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Provide objective, constructive feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Complete reviews in a timely manner</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Authors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Ensure originality of submitted work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Disclose any potential conflicts of interest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Respond to reviewer comments thoroughly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Cite all relevant sources appropriately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10 bg-[size:40px_40px] -z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Submit Your Research?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of researchers and contribute to the advancement of knowledge in your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Submit Your Paper
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                Become a Reviewer
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-6">
              {[
                {
                  question: "How long does the review process take?",
                  answer: "The initial review typically takes 4-6 weeks. The complete process from submission to final decision usually takes 8-12 weeks, depending on the extent of revisions required."
                },
                {
                  question: "What is the acceptance rate at Jahab Journal?",
                  answer: "Our current acceptance rate is approximately 22%. We maintain high standards to ensure the quality and impact of published research."
                },
                {
                  question: "Can I suggest reviewers for my manuscript?",
                  answer: "Yes, authors may suggest potential reviewers during submission. However, the editorial team makes the final decision on reviewer selection."
                },
                {
                  question: "Is the peer review process double-blind?",
                  answer: "Yes, Jahab Journal uses a double-blind review process where both authors and reviewers remain anonymous to each other."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 pt-10 border-t border-gray-200/50">
          <p>© {new Date().getFullYear()} Jahab Journal. All rights reserved.</p>
          <p className="text-sm mt-2">For questions about the peer review process, contact: <a href="mailto:review@jahabjournal.com" className="text-blue-600 hover:underline">review@jahabjournal.com</a></p>
        </footer>
      </div>
    </div>
  );
}

export default PeerReviewProcess;