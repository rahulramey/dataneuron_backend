import express from "express"
import { config } from "dotenv";
import cors from "cors"
import {dbConnection} from "./database/dbConnection.js"
import {catchAsyncErrors} from "./middleware/catchAsyncError.js"
import { errorMiddleware } from "./middleware/errorHandler.js";
import userRouter  from "./router/userRouter.js";
import bodyParser from "body-parser";
import { logRequestExecutionTime,logRequestStartTime } from "./middleware/timeOfAPI.js";

const app = express();

// used to load variables from env file
config({path: "./config/config.env"})


//cors_origin is set to * means browser will allow almost any request to cors
app.use(cors());
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,   
//     credentials: true,
//     methods: ["GET","POST","DELETE"],
// }))

//used for POST request 
app.use(express.urlencoded({extended: true}));

// middleware funtion used to parse json data from http request
app.use(express.json())

//o process data sent in an HTTP request body
app.use(bodyParser.json())

//Execution time of api
app.use(logRequestStartTime);
app.use(logRequestExecutionTime); 

//routing
app.use("/api/v1/user", userRouter) 





//to connect with mongodb
dbConnection();

//using middleware to handle errors
app.use(errorMiddleware)


export default app