import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id : {true : String , required : true },
    name : {true : String , required : true },
    email : {true : String , required : true , unique : true},
    imageUrl : {true : String , required : true },
    cartItem : {true : Object , default : {} }
},
{minimize : false}
)

const User = mongoose.model.user || mongoose.model('user' , userSchema)

export default User