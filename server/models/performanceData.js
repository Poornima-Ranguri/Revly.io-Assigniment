const mongoose = require('mongoose')

const performanceDataSchema = new mongoose.Schema({
  pageLoadTime: Number,
  totalRequestSize: Number,
  numberOfRequests: Number,
})

const PerformanceData = mongoose.model('PerformanceData', performanceDataSchema)

export default PerformanceData
