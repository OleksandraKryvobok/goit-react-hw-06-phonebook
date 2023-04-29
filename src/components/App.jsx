import { Layout } from "./Layout";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";


export const App = () => {
  return (
    <Layout>  
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />    
    </Layout>
  );
};

// рр