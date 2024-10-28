import { Schema, model } from "mongoose";

const explorerModel = new Schema({
    name:{type: String, required: true},
    fieldOfStudy:{type: String, required: true},
    expeditionsParticipated:{type: Number, required: true}
})

export default model('Explorer', explorerModel)