import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    },
    
    reducers: {
        addContacts: {

            reducer(state, action) {
                 console.log('ADD', state);
                 console.log('ADD ACTION', action);  
                //state.push(action.payload);
                state.contacts = [...state.contacts, action.payload];
            },
            prepare(name) {
                return {
                    payload: {
                        id: nanoid(),
                        ...name,
                    },
                };
            },
        }, 
          
                
               
        
            
            // prepare(name, number) {
            //     return {
            //         payload: {
            //             name,
            //             number,
            //             id: nanoid(),
            //         },

            //     }
            
            deleteContacts(state, action) {
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
                console.log('DELETE', action)
                console.log('DELETE', state)
            },

            //         getVisibleName(state, action){
            //             state.contacts = state.contacts.filter(contact =>
            //                 contact.name.toLowerCase().includes(filter.toLowerCase()));
            //   }
        
        }
    }
);

console.log('contactsSlise', contactsSlice);

const persistConfig = {
    key: 'root',
    storage,
};



export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);