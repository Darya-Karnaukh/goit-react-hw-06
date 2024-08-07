import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";
import s from "../SearchBox/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrapper}>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          onChange={(e) => dispatch(filterContacts(e.target.value))}
          name="fullName"
          type="text"
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
