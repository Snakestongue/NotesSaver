// import dotenv from "dotenv" 
// import connectDB from "./Configs/database.js";
// import app from "./app.js";
// dotenv.config({
//     path: './.env'
// });

// const startServer = async() =>{
//     try{
//         await connectDB();
//         app.on("error", (error)=>{
//             console.log("ERROR", error)
//         });
//         app.listen(process.env.PORT || 8000, ()=>{
//             console.log(`Server is running on port #${process.env.PORT}`);
//         });
//     }catch(error){
//         console.log("MONGO DB connection failed", error)

//     }
// }

// startServer();

import dotenv from "dotenv";
import connectDB from "./Configs/database.js";
import app from "./app.js"; // This is your main app

dotenv.config({ path: '../.env' });

const startServer = async () => {
    try {
        await connectDB();
        
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server is running on port #${PORT}`);
        });
    } catch (error) {
        console.log("MONGO DB connection failed", error);
    }
};
startServer();
