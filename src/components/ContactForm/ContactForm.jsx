import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const disputch = useDispatch();
  const onSubmit = (data, actions) => {
    disputch(
      addContact({ id: nanoid(), name: data.name, number: data.number })
    );
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 chars!")
      .max(20, "Name must be less than 20 chars"),
    number: Yup.number("It's not a number")
      .typeError("It's not a number")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.formWrapper}>
        <label className={s.label}>
          <span>Name</span>
          <Field className={s.field} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field className={s.field} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
