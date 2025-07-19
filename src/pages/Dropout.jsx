import { useState } from 'react'

const Dropout = () => {
  const [form, setForm] = useState({
    gender: 'M',
    age: '',
    travel_time: '',
    parent_education: 'Graduate',
    dose1_date: '',
    dose2_date: '',
    distance_to_center: '',
    delay_days: ''
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const testCases = [
    {
      label: 'Test Case 1',
      data: {
        gender: 'M',
        age: 1,
        travel_time: 20,
        parent_education: 'Graduate',
        dose1_date: '2024-01-20',
        dose2_date: '2024-02-15',
        distance_to_center: 3.0,
        delay_days: 26
      }
    },
    {
      label: 'Test Case 2',
      data: {
        gender: 'F',
        age: 2,
        travel_time: 35,
        parent_education: 'Primary',
        dose1_date: '2024-01-25',
        dose2_date: '2024-03-10',
        distance_to_center: 6.0,
        delay_days: 45
      }
    },
    {
      label: 'Test Case 3',
      data: {
        gender: 'M',
        age: 1,
        travel_time: 10,
        parent_education: 'Graduate',
        dose1_date: '2024-01-30',
        dose2_date: '2024-02-18',
        distance_to_center: 1.5,
        delay_days: 19
      }
    },
    {
      label: 'Test Case 4',
      data: {
        gender: 'F',
        age: 3,
        travel_time: 45,
        parent_education: 'Secondary',
        dose1_date: '2024-02-01',
        dose2_date: '2024-03-20',
        distance_to_center: 8.0,
        delay_days: 48
      }
    }
  ]

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('https://Tanmay0483-ArogyaAI.hf.space/api/dropout/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          age: parseInt(form.age),
          travel_time: parseInt(form.travel_time),
          distance_to_center: parseFloat(form.distance_to_center),
          delay_days: parseInt(form.delay_days)
        })
      })
      const data = await res.json()
      if (data.error) setError(data.error)
      else setResult(data)
    } catch (err) {
      setError('Failed to connect to backend.')
    }
    setLoading(false)
  }

  const applyTest = (data) => {
    setForm(data)
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen pt-24 px-2 sm:px-4 max-w-3xl mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-center text-purple-800 drop-shadow-lg tracking-tight">Dropout Risk Predictor</h1>
      <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto bg-purple-100/80 p-4 rounded-xl shadow">
        This tool predicts whether a child is likely to drop out from vaccination based on travel time, age, education level, and dose delays. The model helps in early intervention for high-risk cases.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {testCases.map(({ label, data }, idx) => (
          <button
            key={idx}
            onClick={() => applyTest(data)}
            className="bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 text-purple-900 font-semibold px-4 py-2 rounded-lg shadow border border-purple-300 hover:scale-105 transition-all duration-200"
          >
            {label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white/90 p-8 rounded-2xl shadow-2xl w-full border border-purple-100 backdrop-blur">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Age (years)</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Travel Time (min)</label>
            <input type="number" name="travel_time" value={form.travel_time} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Parent Education</label>
            <select name="parent_education" value={form.parent_education} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400">
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Dose 1 Date</label>
            <input type="date" name="dose1_date" value={form.dose1_date} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Dose 2 Date</label>
            <input type="date" name="dose2_date" value={form.dose2_date} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Distance to Center (km)</label>
            <input type="number" step="0.1" name="distance_to_center" value={form.distance_to_center} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-800">Delay Days</label>
            <input type="number" name="delay_days" value={form.delay_days} onChange={handleChange} className="w-full border border-purple-200 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400" required />
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg mt-4 text-lg tracking-wide">
          {loading ? 'Predicting...' : 'Predict Dropout'}
        </button>
      </form>

      {error && <div className="mt-6 text-red-600 text-center font-semibold">{error}</div>}

      {result && (
        <div className="mt-10 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-8 rounded-2xl shadow-2xl text-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3 flex items-center justify-center gap-2">
            <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Prediction Result
          </h2>
          <div className="mb-1">Prediction: <span className="font-semibold">{result.prediction_text}</span></div>
          <div className="mb-1">Confidence: <span className="font-semibold">{result.confidence?.toFixed(1)}%</span></div>
          <div className="mb-1">Risk Level: <span className="font-semibold">{result.risk_level}</span></div>
          <div className="mb-1">On-Time Probability: <span className="font-semibold">{result.probability_on_time?.toFixed(1)}%</span></div>
          <div className="mb-1">Delayed Probability: <span className="font-semibold">{result.probability_delayed?.toFixed(1)}%</span></div>
        </div>
      )}
    </div>
  )
}

export default Dropout
