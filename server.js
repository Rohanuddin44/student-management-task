import app from "./src/app.js";
import connectDB from "./src/config/db.js"

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server is running")
    connectDB()
})