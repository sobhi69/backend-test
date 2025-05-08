import express from 'express'
const app = express()
const port = 3006   
import userRouter from './routes/user'
app.get('/',(req,res) => {
    res.json({message:"Thanks God           1"})
})


app.use('/api/user',userRouter)


app.listen(port,() => console.log(`app is alive at http://localhost:${port}`))