import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlise';

import { FaTrashAlt } from "react-icons/fa";
import {Container, List, ListItem, Button} from './ContactList.styled'

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
    console.log('Filter-list', filter)
    console.log('ContactList', contacts);
    const dispatch = useDispatch();
    
    const getVisibleName = contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase()));
   

 return <Container>
        {getVisibleName.map(({ id, name, number }) => (
            <List key = {id}>
                <ListItem><p>{name}: {number}</p>
                    <Button type="button"
                        onClick={() => dispatch(deleteContacts(id))}>
                        <FaTrashAlt color="#808080" /></Button>
                 </ListItem>
            </List>
        ))}
            
    </Container>
}


// export const ContactList = ({ contacts, onDelete }) => {
    
//     return <Container>
//         {contacts.map(({id, name, number}) => (
//             <List key={id}>
//                 <ListItem><p>{name}: {number}</p>
//                     <Button type="button" onClick={() => onDelete(id)}><FaTrashAlt color= "#808080"/></Button>
//                 </ListItem>
//             </List>))}
//     </Container>
// }