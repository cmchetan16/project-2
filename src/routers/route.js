const express = require('express')
const router = express.Router()
const { createCollege, collegeDetails } = require('../controllers/collageController')
const { createIntern } = require('../controllers/internController')

router.post('/functionup/colleges', createCollege)
router.post('/functionup/interns', createIntern)
router.get('/functionup/collegeDetails', collegeDetails)

router.all('/**', (req, res) => {
    res.status(404).send({ status: false, msg: 'URL is incorrect' })
})

module.exports = router 
