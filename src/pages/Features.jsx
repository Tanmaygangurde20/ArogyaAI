import { Link } from 'react-router-dom'

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Demand Forecasting",
      description: "Advanced AI models predict vaccine demand with high accuracy, enabling optimal inventory management and resource allocation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "blue",
      path: "/forecasting",
      benefits: [
        "95% prediction accuracy",
        "Real-time demand updates",
        "Seasonal trend analysis",
        "Multi-vaccine support"
      ]
    },
    {
      id: 2,
      title: "Dropout Prediction",
      description: "Identify children at risk of missing vaccinations using intelligent prediction models based on demographic and behavioral data.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      color: "purple",
      path: "/dropout",
      benefits: [
        "Early risk identification",
        "Personalized interventions",
        "Family engagement strategies",
        "Success rate tracking"
      ]
    },
    {
      id: 3,
      title: "Cluster Detection",
      description: "Detect zero-dose clusters and prioritize intervention areas for maximum impact on vaccination coverage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "green",
      path: "/clustering",
      benefits: [
        "Geographic clustering",
        "Priority scoring",
        "Resource optimization",
        "Impact assessment"
      ]
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
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how ArogyaAI's advanced features are revolutionizing vaccine management and improving healthcare outcomes
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
                  <div className={`w-16 h-16 ${getBgColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-6`}>
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
                          <div className={`w-2 h-2 ${getColorClasses(feature.color)} rounded-full mr-3`}></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Link
                      to={feature.path}
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${getColorClasses(feature.color)} hover:opacity-90 transition-opacity duration-200`}
                    >
                      Try Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 transition-opacity duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className={`${getBgColorClasses(feature.color)} p-8 rounded-xl`}>
                    <div className="text-center">
                      <div className={`w-24 h-24 ${getColorClasses(feature.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600">
                        Experience the power of AI-driven healthcare management with our cutting-edge {feature.title.toLowerCase()} feature.
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
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join healthcare providers worldwide who are already transforming their vaccine management with ArogyaAI
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Features
