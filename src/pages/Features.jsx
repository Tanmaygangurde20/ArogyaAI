import { Link } from 'react-router-dom'

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Demand Forecasting",
      description: "Leverage LSTM-based AI models to predict vaccine demand with 95% accuracy, optimizing inventory and reducing waste.",
      icon: (
        // Bar Chart SVG from healthicons.org (CC0)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
          <rect x="8" y="28" width="6" height="12" rx="2"/>
          <rect x="20" y="20" width="6" height="20" rx="2"/>
          <rect x="32" y="12" width="6" height="28" rx="2"/>
        </svg>
      ),
      color: "blue",
      path: "/forecasting",
      benefits: [
        "95% prediction accuracy",
        "Real-time demand updates",
        "Seasonal trend analysis",
        "Multi-vaccine support"
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Dropout Prediction",
      description: "Using Random Forest, XGBoost, and Logistic Regression, identify at-risk children to ensure timely vaccination interventions.",
      icon: (
        // Alert Circle SVG from healthicons.org (CC0)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
          <circle cx="24" cy="24" r="20"/>
          <rect x="22" y="14" width="4" height="14" rx="2" fill="#fff"/>
          <rect x="22" y="32" width="4" height="4" rx="2" fill="#fff"/>
        </svg>
      ),
      color: "purple",
      path: "/dropout",
      benefits: [
        "Early risk identification",
        "Personalized interventions",
        "Family engagement strategies",
        "Success rate tracking"
      ],
      image: "https://images.unsplash.com/photo-1631507623095-c710d184498f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Cluster Detection",
      description: "KMeans clustering identifies zero-dose areas, enabling targeted interventions to maximize vaccination coverage.",
      icon: (
        // Map Marker SVG from healthicons.org (CC0)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
          <path d="M24 4C15.163 4 8 11.163 8 20c0 8.837 16 24 16 24s16-15.163 16-24c0-8.837-7.163-16-16-16zm0 22a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
        </svg>
      ),
      color: "green",
      path: "/clustering",
      benefits: [
        "Geographic clustering",
        "Priority scoring",
        "Resource optimization",
        "Impact assessment"
      ],
      image: "https://images.unsplash.com/photo-1620989983305-be972a0e290e?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-600 text-blue-600",
      purple: "bg-purple-600 text-purple-600",
      green: "bg-green-600 text-green-600"
    }
    return colors[color] || colors.blue
  }

  const getBgColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200",
      purple: "bg-purple-50 border-purple-200",
      green: "bg-green-50 border-green-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173fdabea2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Healthcare technology"
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ArogyaAI <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by FastAPI and React, ArogyaAI's AI-driven features revolutionize vaccine management with real-time analytics and predictive insights.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${getBgColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                    <div className={getColorClasses(feature.color)}>
                      {feature.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`w-3 h-3 ${getColorClasses(feature.color)} rounded-full mr-3`}></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Link
                      to={feature.path}
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${getColorClasses(feature.color)} hover:opacity-80 transition-all duration-300 transform hover:scale-105 shadow-sm`}
                    >
                      Try Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={feature.image}
                      alt={`${feature.title} illustration`}
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm">
                        Experience AI-driven {feature.title.toLowerCase()} with cutting-edge technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Vaccine Management Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of healthcare providers using ArogyaAI’s AI-powered features to improve vaccination outcomes worldwide.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Features
