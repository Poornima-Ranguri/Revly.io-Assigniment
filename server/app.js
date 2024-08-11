const express = require('express')
const app = express()
const performanceController = require('./controllers/performanceController')

app.use(express.json())
app.post('/api/analyze', performanceController.analyzeWebsite)

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})

export default app
