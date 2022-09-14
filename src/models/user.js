const mongoose = require("mongoose")
const validator = require("validator")

const Users = mongoose.model("Users",{
    name:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        trim:true,
        validate(value){
            console.log("Here")
            if (!validator.isEmail(value)){

                throw new Error("You have not entered valid email")
            }
        }
    },
    age:{
        type:Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error("Enter a valid age")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        //minlength:7,
        validate(value){
            if(value.length < 6){ //could also add ^^^
                throw new Error("Weak password")
            }
            else if(value.toLowerCase().includes("password")){
                throw new Error("Password includes password!")
            }
        }

    }

})


module.exports = Users
