const Mission = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To ensure every child receives their essential vaccinations through intelligent, data-driven healthcare solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mission Statement</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              "At ArogyaAI, we are committed to eliminating vaccine-preventable diseases by leveraging artificial intelligence 
              to predict, prevent, and address gaps in vaccination coverage. Our mission is to empower healthcare providers 
              with intelligent tools that ensure no child is left behind in the journey towards universal immunization."
            </p>
            <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                We envision a world where every child, regardless of their location or socioeconomic status, 
                has access to complete and timely vaccinations. A world where preventable diseases are truly prevented.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through our AI-powered platform, we aim to create a healthcare ecosystem that is proactive rather than reactive, 
                predictive rather than responsive, and inclusive rather than exclusive.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Vaccination Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-600">Preventable Deaths</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clear Vision</h3>
                <p className="text-gray-600">
                  A future where technology and compassion work together to protect every child's health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The specific objectives that drive our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Impact</h3>
              <p className="text-gray-600">
                Reduce vaccine dropout rates by 50% within the first year of implementation in partner healthcare facilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Geographic Reach</h3>
              <p className="text-gray-600">
                Expand our platform to serve 1000+ healthcare facilities across 50+ districts within three years.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Vision</h3>
              <p className="text-gray-600">
                Achieve 95% vaccination coverage in all served areas and contribute to global immunization goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mission 