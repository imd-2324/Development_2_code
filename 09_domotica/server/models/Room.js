import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
})


export const Room = mongoose.model('Room', roomSchema)