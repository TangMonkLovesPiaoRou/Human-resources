const express = require('express')
const router = express.Router()
router.get('/status', (req, res) => {
    res.send({
        code: 200,
        message: 'lang接口正常'
    })
})
module.exports = router