const express = require('express');

const app = express()
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Our Application'
    })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})