import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Unsplash background and SVG overlay */}
      <section className="relative pt-16 min-h-[70vh] flex items-center justify-center">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1622227922682-56c92e523e58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Healthcare background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.7)' }}
        />
        {/* SVG wave overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-40 absolute bottom-0 left-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        {/* Content */}
        <div className="relative z-20 max-w-3xl mx-auto text-center text-white px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              ArogyaAI
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
            Revolutionizing healthcare through intelligent vaccine management and predictive analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Features
            </Link>
            <Link
              to="/about"
              className="border-2 border-blue-200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how ArogyaAI is transforming vaccine management with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Demand Forecasting</h3>
              <p className="text-gray-600 mb-4">
                Predict vaccine demand with advanced AI models for optimal inventory management
              </p>
              <Link to="/features" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dropout Prediction</h3>
              <p className="text-gray-600 mb-4">
                Identify children at risk of missing vaccinations with intelligent prediction models
              </p>
              <Link to="/features" className="text-purple-600 font-semibold hover:text-purple-700">
                Learn More →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cluster Detection</h3>
              <p className="text-gray-600 mb-4">
                Detect zero-dose clusters and prioritize intervention areas for maximum impact
              </p>
              <Link to="/features" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Predictions Made</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Areas Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Vaccine Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join healthcare providers worldwide who are already using ArogyaAI to improve vaccination coverage
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 