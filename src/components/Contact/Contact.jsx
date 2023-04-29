import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { Container } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const removeContact = e => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <Container>
            <div>
                <span>{contact.name}</span>
                : {contact.number}
            </div>
            
            <button type='button' onClick={removeContact}>Delete</button>
        </Container>
    );
};

export default Contact;

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}
