import { useState } from "react";
import styled from "styled-components";
import cardFlagIcon from "../../../assets/img/card_icon.svg";

interface CardButtonProps {
  credit: boolean;
}

export const CreditCard = () => {
  const [isCredit, setIsCredit] = useState(true);

  const handleCardButton = () => {
    setIsCredit((currentState) => !currentState);
  };

  return (
    <CreditCardWrapper>
      <CreditCardHeader>
        <CreditCardText>Avaliable balance</CreditCardText>
        <CreditCardButtonWrapper>
          <CreditCardType>{isCredit ? "Credit" : "Debt"}</CreditCardType>
          <CreditCardButton aria-label="Botão do cartão" credit={isCredit} onClick={handleCardButton} />
        </CreditCardButtonWrapper>
      </CreditCardHeader>
      <CreditCardMoneyText>$ 12,334</CreditCardMoneyText>
      <CreaditCardFooter>
        <CreditCardNumber>**** 9958</CreditCardNumber>
        <CreditCardIcon src={cardFlagIcon} alt="Bandeira do cartão" />
      </CreaditCardFooter>
    </CreditCardWrapper>
  );
};

const CreditCardWrapper = styled.div`
  background-color: #fff;
  max-width: 420px;
  height: 260px;

  margin-top: 40px;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.1);

  position: relative;
  display: flex;
  flex-direction: column;
  
`;

const CreditCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreditCardText = styled.span`
  display: inline-block;
  color: #79797b;
`;

const CreditCardButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CreditCardType = styled.span`
  margin-right: 15px;
  color: #79797b;
  font-weight: 500;
`;

const CreditCardButton = styled.button<CardButtonProps>`
  background: #f0f0f0;
  border: none;
  border-radius: 20px;
  height: 28px;
  width: 50px;

  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.credit ? "4px" : "26px")};
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
`;
const CreditCardMoneyText = styled.span`
  font-size: 5rem;
  margin: auto 0;
`;

const CreaditCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CreditCardNumber = styled.span`
  font-size: 1.8rem;
`;
const CreditCardIcon = styled.img``;
