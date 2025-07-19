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
    <div className="min-h-screen pt-24 px-4 max-w-3xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Vaccine Demand Forecasting</h1>

      {/* Info Box */}
      <div className="bg-blue-50 p-4 rounded-lg shadow mb-8 text-sm text-blue-800">
        This tool uses LSTM models trained on real vaccine distribution and climate data to predict short-term vaccine demand per district. Factors like temperature, rainfall, and stock levels are used. Ensure values are realistic for optimal prediction.
      </div>

      {/* Test Case Buttons */}
      <div className="mb-6 grid sm:grid-cols-3 gap-3">
        {testCases.map((t, i) => (
          <button
            key={i}
            onClick={() => handleTestCase(t.data)}
            className="text-sm bg-gray-100 hover:bg-gray-200 rounded-md py-2 px-4 font-medium text-gray-700 border border-gray-300"
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block font-semibold mb-1">District</label>
          <select name="district" value={form.district} onChange={handleChange} className="w-full border rounded px-3 py-2">
            {districts.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Vaccine Type</label>
          <select name="vaccine_type" value={form.vaccine_type} onChange={handleChange} className="w-full border rounded px-3 py-2">
            {vaccineTypes.map(v => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Temperature (°C)</label>
            <input type="number" step="0.1" name="temperature" value={form.temperature} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Rainfall (mm)</label>
            <input type="number" step="0.1" name="rainfall" value={form.rainfall} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Stock Left</label>
            <input type="number" name="stock_left" value={form.stock_left} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Holiday Indicator</label>
            <select name="holiday_indicator" value={form.holiday_indicator} onChange={handleChange} className="w-full border rounded px-3 py-2">
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition">
          {loading ? 'Predicting...' : 'Predict Demand'}
        </button>
      </form>

      {/* Error */}
      {error && <div className="mt-6 text-red-600 text-center">{error}</div>}

      {/* Result Box */}
      {result && (
        <div className="mt-10 bg-green-50 border border-green-200 p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Prediction Result</h2>
          <div className="mb-2">📊 <strong>Model Used:</strong> {result.model}</div>
          <div className="mb-2">📈 <strong>Predicted Demand:</strong> {result.prediction}</div>
          <div className="mb-2">📍 <strong>District:</strong> {result.district}</div>
          <div className="mb-2">💉 <strong>Vaccine:</strong> {result.vaccine_type}</div>
          <div className="text-sm text-gray-600 mt-2">🔍 <strong>Input:</strong> {JSON.stringify(result.input_parameters)}</div>
        </div>
      )}
    </div>
  )
}

export default Forecasting
