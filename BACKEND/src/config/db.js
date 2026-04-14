import mongoose from "mongoose" 

export const connectDB = async ()=>{
    try{
        //connnection string daali h ye .
        await mongoose.connect(process.env.MONGO_URI);
   
   console.log("MONGODB CONNECTED SUCCESFULLY ")
    } 
    catch(error){
        console.error("Error connecting to MONGODB",error);
        process.exit(1);
    }
}

//isme maine sb copy paste krdiya h 
//dekh k bs 



