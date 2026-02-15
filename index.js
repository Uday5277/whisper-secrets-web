import express from "express";
import axios from "axios";
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const app = express();
app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try{
        const response = await axios.get(API_URL+"/random/");
        const result = response.data;
        const randomSecret = result["secret"];
        const randomUser = result["username"];
        res.render("index.ejs",{secret:randomSecret,user:randomUser});
    }
    catch(error){
        console.log(error.response.message);
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
})


