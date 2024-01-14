import { BtnLoadMore } from './Button.styled';

export const Button = ({ onClick, type = 'button', children }) => {
  return (
    <BtnLoadMore onClick={onClick} type={type}>
      {children}
    </BtnLoadMore>
  );
};
