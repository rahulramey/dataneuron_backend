import app from "./app.js";


// it shows where our app is running
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})