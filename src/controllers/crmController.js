import mongoose from "mongoose";
import {ContactSchema} from '../models/crmModel';

const Contact = mongoose.model('Contact',ContactSchema);

//post contact
export const addNewContact = (req, res) => {
    console.log('creating one...')
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//get all
export const getContacts = (req,res)=>{
    console.log('getting all...')
    Contact.find({},(err,contact)=>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//get contact with id
export const getContactWithId = (req,res)=>{
    console.log('getting one...')
    Contact.findById(req.params.contactId,(err,contact)=>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//update by id
export const updateContact = (req,res)=>{
    console.log('updating...')
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new : true }, (err,contact)=>{
        if (err) {S
            res.send(err);
        }
        res.json(contact);
    });
};

//delete by id
export const deleteContact = (req,res)=>{
    console.log('deleting...')
    Contact.remove({_id: req.params.contactId}, (err)=>{
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfuly deleted :)'})
    });
};

