import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config(); 

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT || 4000}`);
    })
  })
.catch((eror)=> {
    console.log("Error in DB connection", eror);
})

 

// (async () => {
//    try {
//     mongoose.connect(`${process.env.MOGO_URI}`/DB_NAME)
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });


//    } catch (error) {
//      console.log("ERROR", error);
//     throw error;
    
//    }
// }) ();

 