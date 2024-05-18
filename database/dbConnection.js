import mongoose from "mongoose";

//using try and catch to see if our database is facing some error or not while running
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "DATANEURON"
    }).then(()=>{
        console.log("connected to database")
    }).catch(err=>{
        console.log(`connection failed: ${err}`);
    })
}