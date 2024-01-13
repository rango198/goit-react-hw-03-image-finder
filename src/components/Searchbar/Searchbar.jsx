import { Formik, Form, Field } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  const handelSubmit = (value, actions) => {
    onSubmit(value);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ search: '' }} onSubmit={handelSubmit}>
      <Form>
        <label htmlFor="">
          <Field type="text" name="search" placeholder="search" />
        </label>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
