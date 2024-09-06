import mongoose from "mongoose";

const GoalsSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

const  GoalModel = mongoose.model('Goals',GoalsSchema);
export default GoalModel;