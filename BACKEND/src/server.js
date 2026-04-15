import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "../middleware/rateLimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
const distPath = path.join(__dirname, "../frontend/vite-project/dist");

//console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line to check if MONGO_URI is loaded

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use(express.json());
app.use(rateLimiter);

// our simple custom middleware .
// app.use((req,res,next)=>{console.log(`Req method is ${req.method}
//    & req path is : ${req.path }`);
//    next()
//   });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
//  app.use((req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../frontend/vite-project/dist/index.html")
//   );
// });


app.use(express.static(distPath)); // पहले static serve करो

app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});
}

app.use(express.static(distPath));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port :", PORT);
  });
});
