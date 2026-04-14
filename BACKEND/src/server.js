import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "../middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line to check if MONGO_URI is loaded



//middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);


// our simple custom middleware .
// app.use((req,res,next)=>{console.log(`Req method is ${req.method} 
//    & req path is : ${req.path }`);
//    next()
//   });

app.use("/api/notes", notesRoutes);



connectDB().then(()=>{
app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
}
);
