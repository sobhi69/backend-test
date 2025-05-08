import express from 'express'
const app = express()
const port = 3006   

app.get('/',(req,res) => {
    res.json({message:"Thanks God"})
})
app.listen(port,() => console.log(`app is alive at http://localhost:${port}`))