import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Modal = ({ title, children, buttonType, buttonContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const okayButtonClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Window>
            <Title>{title}</Title>
            <Content>{children}</Content>
            <ButtonWrapper>
              <Button type={buttonType} onClick={okayButtonClickHandler}>
                {buttonContent}
              </Button>
            </ButtonWrapper>
          </Window>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(000, 000, 000, 0.7);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const Window = styled.div`
  background: #fff;
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  width: 400px;
  height: 200px;
  position: relative;
  top: -100px;
`;

const Title = styled.div`
  padding: 10px;
  width: 100;
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  background-color: #8b005d;
`;

const Content = styled.div`
  margin-top: 20px;
  padding: 0px 10px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export default Modal;
