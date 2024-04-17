import mongoose from "mongoose";

const cocktailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    alcohol_pct: {  
        type: Number
    },
    
    
})


export const Cocktail = mongoose.model('Cocktail', cocktailSchema)