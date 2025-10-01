import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
{
    username : {
        type : String,
        required : [true, "User name wajib di isi"],
        unique : true, //disesuaikan dengan nama
        trim : true //menghapus spasi didepan dan dibelakang
    },
    email: {
        type:String,
        required:[true, "Email wajib di isi"],
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required:[true,"Password wajib di isi"]
    }
},
    {
        timestamps:true
    }
)

const UserModel = mongoose.Model("User", userSchema)

export default UserModel