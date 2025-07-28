const express=require("express");
const cors=require("cors");
const axios=require("axios");
const { response } = require("express");
const { WebSocketServer }=require("ws") 
const app=express()
app.use(express.json())
app.use(cors())

const server = app.listen(3000)

const wss=new WebSocketServer({
    server:server
})
// app.post("/chat", function(req,res){
//     const {chat,model}=req.body;
    // axios.post(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{
    //     "contents":[
    //         {
    //         "parts":[
    //             {
    //             "text":chat
    //             }
    //         ]
    //         }
    //     ]
    // },{
    //     headers:{
    //         "X-goog-api-key":"AIzaSyCZNXdTGoMizUI8iWvJqoULaDLud5bfFyk",
    //     }
    // }).then(response =>{
    //     const ans=response.data.candidates[0].content.parts[0].text;
    //     res.json({ans:ans})
    // })

// })
wss.on('connection',(ws) => {   //conn to websocket server
    ws.on("message",(message)=> { //client conn msg
        const { chat } = JSON.parse(message)
        axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`,{
        "contents":[
            {
            "parts":[
                {
                "text":chat
                }
            ]
            }
        ]
    },{
        headers:{
            "X-goog-api-key":"AIzaSyCZNXdTGoMizUI8iWvJqoULaDLud5bfFyk",
        }
    }).then(response =>{
        ws.send(response.data.candidates[0].content?.parts[0].text)
        
    })
    })
})

// app.listen(3000,function(){
//     console.log("server running in port 3000")
// })