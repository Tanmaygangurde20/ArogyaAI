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
    <div className="min-h-screen pt-20 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Zero-Dose Cluster Detection</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button type="button" onClick={() => autofill('Mumbai')} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
          Autofill Mumbai
        </button>
        <button type="button" onClick={() => autofill('Pune')} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
          Autofill Pune
        </button>
        <button type="button" onClick={() => autofill('Nashik')} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
          Autofill Nashik
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        {/* ... keep all form fields same as before ... */}
        <div>
          <label className="block font-semibold mb-1">Area ID</label>
          <input type="text" name="area_id" value={form.area_id} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">City Name</label>
          <input type="text" name="city_name" value={form.city_name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">District Name</label>
          <input type="text" name="district_name" value={form.district_name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Latitude</label>
          <input type="number" step="0.0001" name="latitude" value={form.latitude} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Longitude</label>
          <input type="number" step="0.0001" name="longitude" value={form.longitude} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Zero-dose Count</label>
          <input type="number" name="zero_dose_count" value={form.zero_dose_count} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Income</label>
          <input type="number" name="income" value={form.income} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Travel Time (min)</label>
          <input type="number" name="travel_time" value={form.travel_time} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Literacy Rate (%)</label>
          <input type="number" step="0.1" name="literacy_rate" value={form.literacy_rate} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700 transition">
          {loading ? 'Detecting...' : 'Detect Cluster'}
        </button>
      </form>

      {error && <div className="mt-6 text-red-600 text-center">{error}</div>}
      {result && (
        <div className="mt-8 bg-green-50 p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">Cluster Analysis Result</h2>
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
