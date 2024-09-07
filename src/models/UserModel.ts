
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name: {
    type: String,
    require: [true,"Please Provide a name"],
},
email: {
    type: String,
    unique: true,
    require: [true,"Please Provide an email"],
},
password: {
    type: String,
    require: [true,"Please Provide a password"],
}
})

const userModel = mongoose.model('User',userSchema);
export default userModel;