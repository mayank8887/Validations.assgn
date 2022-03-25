const mongoose=require('mongoose');

module.exports=()=>{
    return mongoose.connect("mongodb+srv://mayank8887:<password>@cluster0.vb0gn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};