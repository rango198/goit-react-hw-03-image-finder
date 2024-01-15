import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  height: 85vh;
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Close = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  align-self: flex-end;
  margin-top: -5px;
  margin-right: 5px;
`;

export const ModalPicture = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  cursor: initial;
`;
