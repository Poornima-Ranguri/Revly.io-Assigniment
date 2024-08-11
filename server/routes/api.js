const express = require('express')
const router = express.Router()
const performanceController = require('../controllers/performanceController')

router.post('/analyze', performanceController.analyzeWebsite)

module.exports = router
