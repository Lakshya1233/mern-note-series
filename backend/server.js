const express=require("express");
const notes=require("./data/notes");
const app=express();
const env=require("dotenv")

env.config();


app.get('/',(req,res)=>{
    res.send("api us running")
});

app.get("/api/notes",(req,res)=>{
    res.json(notes)
})
app.get("/api/notes/:id",(req,res)=>{

    const note=notes.find((n)=>n._id==req.params.id);

    res.json(note)
})


const PORT=process.env.PORT || 3000;
app.listen(PORT,console.log("hello,server syarted at 3000"));

