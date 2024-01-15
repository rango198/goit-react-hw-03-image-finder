import styled from '@emotion/styled';

export const ImageItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: transform 0.3s ease; /* додали перехід для властивості transform */

  &:hover {
    transform: scale(1.05); /* збільшуємо розмір при наведенні */
  }
`;

export const SmallImg = styled.img`
  height: auto;
  height: 380px;
  object-fit: cover;
`;
