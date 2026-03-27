const express = require('express');
const app = express();
const port = 1010;

app.get("/",(req,res)=>{
    res.send("Retail Order API is running");
})

app.get("/orders",(req,res)=>{
    res.json([
        {
            "id": 1,
            "customerName": "John Doe",
            "status": "Processing"
        },
        {
            "id": 2,
            "customerName": "John devil",
            "status": "delivered"
        }
    ])
});

app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})