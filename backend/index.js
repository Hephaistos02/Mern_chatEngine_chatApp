const express = require("express")
const cors = require("cors")
const axios = require("axios") 

const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate",async (req,res) =>{
    const {username} = req.body;
    try {
        const result = await axios.put(
            'https://api.chatengine.io/users/', 
            {username:username,secret:username,first_name:username},
            {headers:{"private-key" : '8704e27e-a207-45f1-87c8-202b2d87e38f'}}
        )
        return res.status(result.status).json(result.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
    // return res.json({usernam:username,secret: "secretkey"});
})

app.listen(3001,()=>{
    console.log("Server is running");
});