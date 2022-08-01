import styled, { keyframes } from "styled-components";

import { CreditCard } from "./CreditCard/CreditCard";
import { ExpensesStatisticTab } from "./ExpensesStatisticTab/ExpensesStatisticTab";
import { IncomeAndSpending } from "./IncomeAndSpending/IncomeAndSpending";
import { SpendingHistory } from "./SpendingHistory/SpendingHistory";

import rightArrow from "../../assets/img/right_arrow_icon.svg";

export const MainContent = () => {
  return (
    <MainContainer>
      <ContentTitle>Dashboard</ContentTitle>
      <ContentBody>
        {/**************  LADO ESQUERDO  **************/}
        <LeftSide>
          <CreditCard />
          <LimitCard>
            <LimitCardText>Internet payment limit</LimitCardText>
            <LimitCardBar />
          </LimitCard>
          <IncomeAndSpending />
          <SpendingHistory />
        </LeftSide>
        {/**************  LADO DIREITO  **************/}
        <RightSide>
          <ExpensesStatisticTab />
          <SendMoneyWrapper>
            <SendMoneyHeader>
              <SendMoneyTitle>Send money to</SendMoneyTitle>
              <SendMoneyButton>
                <SendMoneyImage src={rightArrow} alt="Imagem de seta para direita" />
              </SendMoneyButton>
            </SendMoneyHeader>
            <Separator />
            <SendMoneyList>
              <SendMoneyItem></SendMoneyItem>
              <SendMoneyItem></SendMoneyItem>
              <SendMoneyItem></SendMoneyItem>
            </SendMoneyList>
          </SendMoneyWrapper>
        </RightSide>
      </ContentBody>
    </MainContainer>
  );
};

const barAnimation = keyframes`
  from {
    width: 0
  }
  to {
    width: 80%;
  }
`;

const MainContainer = styled.main`
  min-height: 90%;
  width: min(100%, 1300px);
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 45px;
`;

const ContentTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;

const ContentBody = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;
`;

// *********************** Lado esquerdo ***********************

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const LimitCard = styled.div`
  margin: 20px 0;
`;

const LimitCardText = styled.h3`
  color: #79797b;
  font-size: 1.6rem;
  font-weight: 500;
`;

const LimitCardBar = styled.div`
  height: 10px;
  background: #e4e4e4;
  border-radius: 5px;
  position: relative;
  margin-top: 15px;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 80%;
    top: 50%;
    background: #252525;
    border-radius: 5px;
    transform: translateY(-50%);
    animation: ${barAnimation} 0.9s ease;
  }
`;
// *********************** Lado direito ***********************

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 45px; */
`;

const SendMoneyWrapper = styled.div`
  margin-top: 30px;
`;
const SendMoneyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Separator = styled.div`
  height: 1px;
  background: #cfcfcf;
  margin: 20px 0;
`;

const SendMoneyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;
const SendMoneyButton = styled.button``;

const SendMoneyImage = styled.img``;

const SendMoneyList = styled.ul`
  display: flex;
`;
const SendMoneyItem = styled.li`
  margin: 0 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #000;
`;
