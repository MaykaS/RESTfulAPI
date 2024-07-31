import { addNewContact,getContacts, getContactWithId,updateContact,deleteContact} from '../controllers/crmController';


const routes = (app) => {
    app.route('/contact')

    //get all contacts
    .get((req,res,next) =>{
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    //post new contact
    .post(addNewContact)

    app.route('/contact/:contactId')

    //specific
    .get(getContactWithId)

    //update contact
    .put(updateContact)

    //delete contact
    .delete(deleteContact)
}

export default routes;
