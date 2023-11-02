import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlise';
import { filterReducer } from 'redux/filterSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer ,
    }
});



// import { createAction, createReducer } from '@reduxjs/toolkit';
// const addContacts = createAction('contacts/addContacts')

// const contactsReducer = createReducer([], {

//     [addContacts]:(state,action) => state+ action.payload,
// })