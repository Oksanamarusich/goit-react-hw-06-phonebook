import { createSlice, createAction } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        name: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    },
    reducers: {
        addContacts(state, action) {
            console.log('ADD', state);
            console.log('ADD ACTION', action);
        
        },
        deleteContacts(state, action) {
            //state + action.payload;
            console.log('DELETE', state)
         },
        
    }
});
//const addContacts = createAction('contacts/addContacts')

//  const contactsReducer = createReducer([], {

//      [addContacts]:(state,action) => state+ action.payload,
//  })

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;