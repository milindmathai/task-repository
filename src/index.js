const express = require("express")
require("./db/mongoose")
const Users = require("./models/user")
const Tasks = require("./models/tasks")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.post("/users",(req,res)=>{
    const me = new Users(req.body)
    console.log(req.body)
    me.save().then(()=>{
        console.log(me)
        res.send(me)
    }).catch((error)=>{
        console.log(error)
        res.status(400).send(error)
    })
})
app.get("/users",(req,res)=>{
    Users.find({}).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        res.status(500).send()
    })

})
app.get("/tasks",(req,res)=>{
    Tasks.find({}).then((response)=>{
        res.send(response)
    }).catch((error)=>{
        console.log(error)
        res.status(500).send()
    })
})
app.get("/users/:id",(req,res)=>{
    const id = req.params.id
    Users.findById(id).then((result)=>{
        if(!result){
            res.status(404).send("Enter Valid id")
        }
        res.send(result)
    }).catch((error)=>{
        console.log(error)
        res.status(500).send()
    })
})
app.get("/tasks/:id",(req,res)=>{
    const id = req.params.id
    Tasks.findById(id).then((result)=>{
        if(!result){
            res.status(404).send("Enter Valid id")
        }
        res.send(result)
    }).catch((error)=>{
        console.log(error)
        res.status(500).send()
    })
})
app.post("/tasks",(req,res)=>{
    const task = new Tasks(req.body)
    
    task.save().then(()=>{
        console.log("done")
        res.status(201).send(task)
    }).catch((err)=>{
        res.status(400).send(err)
    })


})
app.listen(port,()=>{
    console.log("Listening on port "+port)
})