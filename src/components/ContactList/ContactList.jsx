import { List, Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Contact from 'components/Contact';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
    
    return (
        <List>
            {getVisibleContacts().map(contact => {
                return (
                    <Item key={contact.id}>
                        <Contact contact={contact} />
                    </Item>
                )
            })}
        </List>
    );
};

export default ContactList;