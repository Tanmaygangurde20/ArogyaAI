import { useState } from 'react'

const districts = ['Pune', 'Mumbai', 'Nashik']
const vaccineTypes = ['BCG', 'Polio', 'Measles']

const testCases = [
  {
    label: 'Test Case 1 (Pune - BCG)',
    data: {
      district: 'Pune',
      vaccine_type: 'BCG',
      temperature: 22.5,
      rainfall: 0.0,
      stock_left: 30,
      holiday_indicator: 0
    }
  },
  {
    label: 'Test Case 2 (Mumbai - Polio)',
    data: {
      district: 'Mumbai',
      vaccine_type: 'Polio',
      temperature: 35.0,
      rainfall: 0.5,
      stock_left: 50,
      holiday_indicator: 0
    }
  },
  {
    label: 'Test Case 3 (Nashik - Measles)',
    data: {
      district: 'Nashik',
      vaccine_type: 'Measles',
      temperature: 28.0,
      rainfall: 0.0,
      stock_left: 25,
      holiday_indicator: 1
    }
  }
]

const Forecasting = () => {
  const [form, setForm] = useState({
    district: 'Pune',
    vaccine_type: 'BCG',
    temperature: '',
    rainfall: '',
    stock_left: '',
    holiday_indicator: 0
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('https://tanmay0483-arogyaai.hf.space/api/forecast/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          temperature: parseFloat(form.temperature),
          rainfall: parseFloat(form.rainfall),
          stock_left: parseInt(form.stock_left),
          holiday_indicator: parseInt(form.holiday_indicator)
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

  const handleTestCase = (testData) => {
    setForm({ ...testData })
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen pt-24 px-2 sm:px-4 max-w-3xl mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="mb-8 w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-blue-800 drop-shadow-lg tracking-tight">Vaccine Demand Forecasting</h1>
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" /><rect x="7" y="13" width="3" height="5" rx="1.5" fill="currentColor" /><rect x="12" y="9" width="3" height="9" rx="1.5" fill="currentColor" /><rect x="17" y="5" width="3" height="13" rx="1.5" fill="currentColor" /></svg>
          <span className="text-blue-700 font-semibold text-lg">AI-powered, real-time, district-level predictions</span>
        </div>
        <div className="bg-blue-100/80 p-4 rounded-xl shadow text-blue-900 text-base max-w-2xl w-full text-center">
          This tool uses LSTM models trained on real vaccine distribution and climate data to predict short-term vaccine demand per district. Factors like temperature, rainfall, and stock levels are used. Ensure values are realistic for optimal prediction.
        </div>
      </div>

      {/* Test Case Buttons */}
      <div className="mb-8 grid sm:grid-cols-3 gap-4 w-full">
        {testCases.map((t, i) => (
          <button
            key={i}
            onClick={() => handleTestCase(t.data)}
            className="bg-gradient-to-r from-blue-200 to-purple-200 hover:from-blue-300 hover:to-purple-300 text-blue-900 font-semibold rounded-lg py-2 px-4 shadow transition-all duration-200 border border-blue-300 hover:scale-105"
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-xl mx-auto border border-blue-100 backdrop-blur">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 text-blue-800">District</label>
            <select name="district" value={form.district} onChange={handleChange} className="w-full border border-blue-200 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
              {districts.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-800">Vaccine Type</label>
            <select name="vaccine_type" value={form.vaccine_type} onChange={handleChange} className="w-full border border-blue-200 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
              {vaccineTypes.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-800">Temperature (°C)</label>
            <input type="number" step="0.1" name="temperature" value={form.temperature} onChange={handleChange} className="w-full border border-blue-200 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-800">Rainfall (mm)</label>
            <input type="number" step="0.1" name="rainfall" value={form.rainfall} onChange={handleChange} className="w-full border border-blue-200 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-800">Stock Left</label>
            <input type="number" name="stock_left" value={form.stock_left} onChange={handleChange} className="w-full border border-blue-200 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-800">Holiday Indicator</label>
            <select name="holiday_indicator" value={form.holiday_indicator} onChange={handleChange} className="w-full border border-blue-200 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg mt-4 text-lg tracking-wide">
          {loading ? 'Predicting...' : 'Predict Demand'}
        </button>
      </form>

      {/* Error */}
      {error && <div className="mt-6 text-red-600 text-center font-semibold">{error}</div>}

      {/* Result Box */}
      {result && (
        <div className="mt-10 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 p-8 rounded-2xl shadow-2xl text-center w-full max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-3 flex items-center justify-center gap-2">
            <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Prediction Result
          </h2>
          <div className="mb-2">📊 <strong>Model Used:</strong> {result.model}</div>
          <div className="mb-2">📈 <strong>Predicted Demand:</strong> <span className="text-xl text-blue-900 font-bold">{result.prediction}</span></div>
          <div className="mb-2">📍 <strong>District:</strong> {result.district}</div>
          <div className="mb-2">💉 <strong>Vaccine:</strong> {result.vaccine_type}</div>
          <div className="text-xs text-gray-600 mt-2">🔍 <strong>Input:</strong> {JSON.stringify(result.input_parameters)}</div>
        </div>
      )}
    </div>
  )
}

export default Forecasting
