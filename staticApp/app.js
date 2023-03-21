const express = require('express')
const lang = require('./lang/index')
const cors = require('cors')
const app = express()
app.use(cors({
    methods: ['GET', 'POST'],
    optionsSuccessStatus: '200'
}))
app.use(express.static('public'))
app.use('/lang', lang)
app.listen(3000, () => {
    console.log('3000服务器启动~');
})