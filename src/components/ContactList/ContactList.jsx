import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import s from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log("Contacts: ", contacts);
  const filter = useSelector(selectFilter);
  const filterData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.list}>
      {filterData.map((item) => (
        <li key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
