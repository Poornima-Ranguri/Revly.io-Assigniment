import React from 'react'

function PerformanceMetrics({data}) {
  return (
    <div>
      <h2>Performance Metrics</h2>
      <p>Page Load Time: {data.pageLoadTime}ms</p>
      <p>Total Request Size: {data.totalRequestSize} bytes</p>
      <p>Number of Requests: {data.numberOfRequests}</p>
    </div>
  )
}

export default PerformanceMetrics
