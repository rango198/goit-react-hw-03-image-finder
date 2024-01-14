import { Formik } from 'formik';
import {
  BtnSearch,
  FieldInput,
  Formstyled,
  HeaderSearch,
  Label,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handelSubmit = (value, actions) => {
    onSubmit(value);
    actions.resetForm();
  };
  return (
    <HeaderSearch>
      <Formik initialValues={{ search: '' }} onSubmit={handelSubmit}>
        <Formstyled>
          <Label>
            <FieldInput type="text" name="search" placeholder="search" />
          </Label>
          <BtnSearch type="submit">Search</BtnSearch>
        </Formstyled>
      </Formik>
    </HeaderSearch>
  );
};
