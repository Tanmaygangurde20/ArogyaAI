import { useState } from 'react'

const testCases = {
  Mumbai: {
    area_id: 'AREA_001',
    city_name: 'Mumbai',
    district_name: 'Mumbai City',
    latitude: 19.076,
    longitude: 72.8777,
    zero_dose_count: 200,
    income: 30000,
    travel_time: 45,
    literacy_rate: 65.0
  },
  Pune: {
    area_id: 'AREA_002',
    city_name: 'Pune',
    district_name: 'Pune',
    latitude: 18.5204,
    longitude: 73.8567,
    zero_dose_count: 80,
    income: 75000,
    travel_time: 25,
    literacy_rate: 85.0
  },
  Nashik: {
    area_id: 'AREA_003',
    city_name: 'Nashik',
    district_name: 'Nashik',
    latitude: 19.9975,
    longitude: 73.7898,
    zero_dose_count: 120,
    income: 45000,
    travel_time: 70,
    literacy_rate: 55.0
  }
}

const Clustering = () => {
  const [form, setForm] = useState({
    area_id: '',
    city_name: '',
    district_name: '',
    latitude: '',
    longitude: '',
    zero_dose_count: '',
    income: '',
    travel_time: '',
    literacy_rate: ''
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const autofill = (city) => {
    setForm(testCases[city])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('https://tanmay0483-arogyaai.hf.space/api/cluster/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          latitude: parseFloat(form.latitude),
          longitude: parseFloat(form.longitude),
          zero_dose_count: parseInt(form.zero_dose_count),
          income: parseInt(form.income),
          travel_time: parseInt(form.travel_time),
          literacy_rate: parseFloat(form.literacy_rate)
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

  return (
    <div className="min-h-screen pt-20 px-2 sm:px-4 max-w-2xl mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-green-800 drop-shadow-lg tracking-tight">Zero-Dose Cluster Detection</h1>

      {/* Info Section: What does this model do? */}
      <div className="mb-8 bg-green-100/80 border-l-4 border-green-400 p-4 rounded-xl shadow max-w-2xl mx-auto text-center">
        <p className="text-green-900 text-lg">
          <strong>What does this model do?</strong><br/>
          This tool uses AI to analyze area-specific data (like zero-dose count, income, travel time, and literacy rate) and predicts whether a location is a high-risk zero-dose cluster. It classifies the area, estimates risk level, and provides actionable recommendations to help healthcare providers prioritize interventions and improve vaccination coverage.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button type="button" onClick={() => autofill('Mumbai')} className="bg-gradient-to-r from-green-200 to-blue-200 hover:from-green-300 hover:to-blue-300 text-green-900 font-semibold px-4 py-2 rounded-lg shadow border border-green-300 hover:scale-105 transition-all duration-200">
          Autofill Mumbai
        </button>
        <button type="button" onClick={() => autofill('Pune')} className="bg-gradient-to-r from-green-200 to-blue-200 hover:from-green-300 hover:to-blue-300 text-green-900 font-semibold px-4 py-2 rounded-lg shadow border border-green-300 hover:scale-105 transition-all duration-200">
          Autofill Pune
        </button>
        <button type="button" onClick={() => autofill('Nashik')} className="bg-gradient-to-r from-green-200 to-blue-200 hover:from-green-300 hover:to-blue-300 text-green-900 font-semibold px-4 py-2 rounded-lg shadow border border-green-300 hover:scale-105 transition-all duration-200">
          Autofill Nashik
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white/90 p-8 rounded-2xl shadow-2xl w-full border border-green-100 backdrop-blur">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 text-green-800">Area ID</label>
            <input type="text" name="area_id" value={form.area_id} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">City Name</label>
            <input type="text" name="city_name" value={form.city_name} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">District Name</label>
            <input type="text" name="district_name" value={form.district_name} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">Latitude</label>
            <input type="number" step="0.0001" name="latitude" value={form.latitude} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">Longitude</label>
            <input type="number" step="0.0001" name="longitude" value={form.longitude} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">Zero-dose Count</label>
            <input type="number" name="zero_dose_count" value={form.zero_dose_count} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">Income</label>
            <input type="number" name="income" value={form.income} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">Travel Time (min)</label>
            <input type="number" name="travel_time" value={form.travel_time} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-green-800">Literacy Rate (%)</label>
            <input type="number" step="0.1" name="literacy_rate" value={form.literacy_rate} onChange={handleChange} className="w-full border border-green-200 rounded px-3 py-2 focus:ring-2 focus:ring-green-400" required />
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg mt-4 text-lg tracking-wide">
          {loading ? 'Detecting...' : 'Detect Cluster'}
        </button>
      </form>

      {error && <div className="mt-6 text-red-600 text-center font-semibold">{error}</div>}
      {result && (
        <div className="mt-10 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 p-8 rounded-2xl shadow-2xl text-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-3 flex items-center justify-center gap-2">
            <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Cluster Analysis Result
          </h2>
          <div className="mb-2">Cluster Type: <span className="font-semibold">{result.cluster_type}</span></div>
          <div className="mb-2">Risk Level: <span className="font-semibold">{result.risk_level}</span></div>
          <div className="mb-2">Intervention Priority: <span className="font-semibold">{result.intervention_priority}</span></div>
          <div className="mb-2">Area: {result.area_info?.city_name}, {result.area_info?.district_name}</div>
          <div className="mb-2">Zero-dose Count: {result.current_metrics?.zero_dose_count}</div>
          <div className="mb-2">Priority Score: {result.current_metrics?.priority_score}</div>
          <div className="mb-2">Recommendations:</div>
          <ul className="text-left list-disc list-inside mx-auto max-w-md">
            {result.recommendations?.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Clustering
