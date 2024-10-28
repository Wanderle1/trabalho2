import { Schema, model } from "mongoose";

const speciesModel = new Schema({
    name:{type: String, required: true},
    discoveryLocation:{type: String, required: true},
    rarity:{type: Number, required: true},
    documented:{type: Boolean, required: false, default: false }
})

export default model('Species', speciesModel)