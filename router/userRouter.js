import express from "express";
import {addUser, updateUser, counts, getAllContent} from "../controller/userController.js"

const router = express.Router();

//http://localhost:4000/api/v1/user/add
router.post("/add", addUser); 


//http://localhost:4000/api/v1/user/update/6647c33b2b025e21b25a2436
// 6647c33b2b025e21b25a2436 is user id of user added firstly
router.put("/update/:id", updateUser);       


//http://localhost:4000/api/v1/user/counts
router.get("/counts", counts)


//http://localhost:4000/api/v1/user/content
router.get("/content", getAllContent)

export default router;