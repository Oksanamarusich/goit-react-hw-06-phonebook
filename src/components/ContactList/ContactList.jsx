import { useSelector, useDispatch } from 'react-redux';
import { addContacts, deleteContacts } from 'redux/contactsSlise';

import { FaTrashAlt } from "react-icons/fa";
import {Container, List, ListItem, Button} from './ContactList.styled'

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.name);
    console.log(contacts);
    const dispatch = useDispatch();
 return <Container>
        {contacts.map(({ id, name, number }) => (
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