const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL,{ useNewUrlParser:true, useUnifiedTopology: true }, (error,client)=>{
    if(error){
        return console.log("error connecting to the database")
    }
    const db = client.db(databaseName)
    
    // const id = ObjectID()
    // console.log(id)
    // console.log(id.id)
    // db.collection("users").insertOne({
    //     name:"Milind",
    //     age:26
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Could not add document")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection("users").insertMany([{
    //     name:"Milind",
    //     age:26
    // },{
    //     name:"thorny",
    //     age:21
    // }],(error,result)=>{
    //     if(error){
    //         return console.log("There is an error")
    //     }
    //     console.log(result.ops)

    // })
    // db.collection("tasks").insertMany([{
    //     description:"Attend call with franzi",
    //     completed:false
    // },{
    //     description:"Complete 1/4 of tutorial",
    //     completed:true
    // },{
    //     description:"Cry",
    //     completed:true
    // }],(error,result)=>{
    //     if(error){
    //         return console.log("There is an error")
    //     }
    //     console.log(result.ops)

    // })
    // db.collection("users").findOne({"age":26},(error,user)=>{
    //     if(error){
    //         return console.log("error")
    //     }
    //     console.log(user)
    // })
    // db.collection("users").findOne({"_id":new ObjectID("63170a5fb9c085ad7c225332")},(error,user)=>{
    //     if(error){
    //         return console.log("error")
    //     }
    //     console.log(user)
    // })
    // db.collection("users").find({age:26}).toArray((error,users)=>{
    //     if(error){
    //         return console.log("error")
    //     }
    //     console.log(users)
    // })

    // db.collection("tasks").findOne({"_id":new ObjectID("63170c21b369d6b0717f8d21")},(error,task)=>{
    //     if(error){
    //         return console.log("Error")
    //     }
    //     console.log(task)
    // })
    // db.collection("tasks").find({"completed":false}).toArray((error,task)=>{
    //     if(error){
    //         return console.log("Error")
    //     }
    //     console.log(task)
    // })
    // const update = db.collection("users").updateOne({
    //     "_id": new ObjectID("63170996f9c43bac2379b824")
    // }, {
    //     $set: {
    //         "name":"Riya"
    //     },
    //     $inc:{
    //         age:-2
    //     }
    // })

    // update.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({
    //     "completed":false
    // },{
    //     $set:{
    //         "completed":true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection("users").deleteMany({
        "name":"Milind"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
    db.collection("tasks").deleteOne({
        "description":"Complete 1/4 of tutorial"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })



})