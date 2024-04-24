import mongoose from "mongoose";


const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    darkness: {
        type: Number,
        required: true
    }, 
    sugar: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "pending"
    }
    
})


export const Coffee = mongoose.model('coffee', coffeeSchema)