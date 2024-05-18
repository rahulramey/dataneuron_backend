import { catchAsyncErrors } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorHandler.js";
import {User} from "../model/userModel.js"

let addCount = 0;
let updateCount = 0;

export const addUser =  catchAsyncErrors(async(req,res,next)=>{
    const {content} = req.body;

    if(!content){
        return next(new ErrorHandler("Please provide the details", 400))
    }
    
    await User.create({content});
    addCount++;
    return res.status(200).json({
        success:  true,
        message: "Content added successfully!"
    })

});

export const updateUser =  catchAsyncErrors(async(req,res,next)=>{
    const {id} = req.params;
    let user = await User.findById(id);
    if(!user){
        return next(new ErrorHandler("Not found"), 404)
    }

    user = await User.findByIdAndUpdate(id, req.body, {
        new : true,
        runValidators: true,
        useFindAndModify: false
    });

    updateCount++;

    res.status(200).json({
        success: true,
        message: "Updated successfully!",
        
    })

});

export const counts =  catchAsyncErrors(async(req,res,)=>{
    res.status(200).json({

        addCount,
        updateCount
    })

});

export const getAllContent = catchAsyncErrors(async(req,res,next)=>{
    const content = await User.find();
    if(!content){
        return next(new ErrorHandler("Content not found"), 404)
    }

    res.status(200).json({
        content
    })
})
