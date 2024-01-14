import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Formstyled = styled(Form)`
  /* display: flex; */
  /* flex-direction: column; */
`;

export const HeaderSearch = styled.header`
  max-width: 100%;
  height: 28px;
  padding: 14px;
  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnSearch = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #46adad;
  margin-left: 5px;

  padding: 5px 7px;

  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  margin: 10px 0 5px 0;
`;

export const FieldInput = styled(Field)`
  border: none;
  padding: 5px;
  border-radius: 8px;
  width: 200px;
  color: #4d4242;
`;
