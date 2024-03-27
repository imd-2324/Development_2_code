import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String
    },
    age:{
        type: Number,
        min: 18,
        max:100
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minLength: 10
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    address:{
        street:String,
        city:String
    },
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        default: null
    }
})

studentSchema.methods.sayHi = function() {
    console.log(`Hi from ${this.name}`);
}


export const Student = mongoose.model('Student', studentSchema)