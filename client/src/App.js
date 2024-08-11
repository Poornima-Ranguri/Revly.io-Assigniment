import React, {useState} from 'react'
import UrlInput from './components/UrlInput'
import PerformanceMetrics from './components/PerformanceMetrics'

function App() {
  const [url, setUrl] = useState('')
  const [performanceData, setPerformanceData] = useState(null)

  const handleAnalyze = async () => {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({url}),
    })
    const data = await response.json()
    setPerformanceData(data)
  }

  return (
    <div>
      <UrlInput value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={handleAnalyze} type="button">
        Analyze
      </button>
      {performanceData && <PerformanceMetrics data={performanceData} />}
    </div>
  )
}

export default App
