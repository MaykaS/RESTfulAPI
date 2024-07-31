//design thre schema
import mongoose from "mongoose";

const Schema = mongoose.schema;

export const ContactSchema = new Schem({
    firstName:{
        type: String,
        required: 'Enter a  first name'
    },
    lastName:{
        type: String,
        required: 'Enter a  last name'
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    phone:{
        type: Number
    },
    created_date:{
        type: Date,
        deafult: Date.now
    }
})