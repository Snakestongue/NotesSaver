import dotenv from "dotenv";
import connectDB from "./Configs/database.js";
import app from "./app.js";

dotenv.config({path: '../.env' });
const startServer= async ()=>{
    try{
        await connectDB();
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () =>{
            console.log(`Server is running on port #${PORT}`);
        });
    }catch (error){
        console.log("MONGO DB connection failed", error);
    }
};
startServer();
