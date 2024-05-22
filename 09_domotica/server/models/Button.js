import mongoose from "mongoose";


const buttonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    category: {
        type: Object,
    },
    status: {
        type: Boolean,
        default: false
    },
    
})


export const Button = mongoose.model('Button', buttonSchema)