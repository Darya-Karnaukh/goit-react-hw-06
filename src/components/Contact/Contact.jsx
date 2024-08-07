import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "../Contact/Contact.module.css";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.contact}>
        <h2>{name}</h2>
        <p>{number}</p>
        <button onClick={() => dispatch(deleteContact(id))}>DELETE</button>
      </div>
    </div>
  );
};

export default Contact;
