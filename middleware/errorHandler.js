class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message),
        this.statusCode = statusCode 
    }
}

export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500;

    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400)
    }

    if(err.name === "castError"){
        const message = `Invalid ${err.path}` 
        err = new ErrorHandler(message, 400)
    }

    const errorMessage = err.errors 
    ? Object.values(err.errors)
            .map((error)=> error.message)
            .join("")
    : err.message;        

    // by usinh this only validations messages which were defined in user model will be displayed as an error
    return res.status(err.statusCode).json({
        success: false, 
        message: errorMessage 
    })
};

export default ErrorHandler