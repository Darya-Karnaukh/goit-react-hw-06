import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default App;
