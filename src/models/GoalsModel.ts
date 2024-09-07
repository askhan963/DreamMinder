import mongoose from "mongoose";

const GoalsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    text: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

const  GoalModel = mongoose.model('Goals',GoalsSchema);
export default GoalModel;