const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type: String,required:true},
    lastName:{type: String,required:true},
    email: {type:String, required:true},
    pincode:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true},
    gender:{type:String,required:false,enum:["Male","Female"],default:"Male",},
    birthdate:{type:Date,required:false},
    age:{type:Number,required:true}
},
{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("user",userSchema);