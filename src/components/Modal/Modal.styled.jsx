import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  min-height: 200px;
  min-width: 200px;
  background-color: white;
  padding: 5px;
`;

export const Close = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: red;
  cursor: pointer;
`;
