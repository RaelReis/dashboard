import React from "react";
import styled from "styled-components";

import rightArrow from "../../../assets/img/right_arrow_icon.svg";
import cartIcon from "../../../assets/img/cart_icon.svg";
import houseIcon from "../../../assets/img/house_icon.svg";
import ticketIcon from "../../../assets/img/ticket_icon.svg";

export const SpendingHistory = () => {
  return (
    <SpendingHistoryBox>
      <SpendingHistoryHeader>
        <SpendingHistoryTitle>Last spendings</SpendingHistoryTitle>
        <SpendingHistoryViewAll>View All</SpendingHistoryViewAll>
      </SpendingHistoryHeader>
      <Separator />
      <SpendingHistoryItem>
        <ItemImage src={cartIcon} alt="Icone de uma casa" />
        <ItemInfo>
          <ItemName>Online store</ItemName>
          <ItemDate>May 23, 2022 at 1:30 PM</ItemDate>
        </ItemInfo>
        <ItemButton>
          <ItemButtonImg src={rightArrow} alt="Uma seta para apontando para direita" />
        </ItemButton>
      </SpendingHistoryItem>
      <SpendingHistoryItem>
        <ItemImage src={houseIcon} alt="Icone de uma casa" />
        <ItemInfo>
          <ItemName>Housekeeping</ItemName>
          <ItemDate>May 23, 2022 at 1:30 PM</ItemDate>
        </ItemInfo>
        <ItemButton>
          <ItemButtonImg src={rightArrow} alt="Uma seta para apontando para direita" />
        </ItemButton>
      </SpendingHistoryItem>
      <SpendingHistoryItem>
        <ItemImage src={ticketIcon} alt="Icone de um ticket" />
        <ItemInfo>
          <ItemName>Tickets</ItemName>
          <ItemDate>May 23, 2022 at 1:30 PM</ItemDate>
        </ItemInfo>
        <ItemButton>
          <ItemButtonImg src={rightArrow} alt="Uma seta para apontando para direita" />
        </ItemButton>
      </SpendingHistoryItem>
    </SpendingHistoryBox>
  );
};


const SpendingHistoryBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const SpendingHistoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SpendingHistoryTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;
const SpendingHistoryViewAll = styled.button`
  border: none;
  background: none;
  color: #79797b;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    filter: brightness(1.3);
  }
`;
const Separator = styled.div`
  height: 1px;
  background: #cfcfcf;
  margin: 20px 0;
`;
const SpendingHistoryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const ItemImage = styled.img`
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;
const ItemInfo = styled.span`
  margin-left: 20px;
`;

const ItemName = styled.span`
  display: block;
  font-weight: 500;
`;

const ItemDate = styled.span`
  font-size: 1.4rem;
  color: #79797b;
`;

const ItemButton = styled.button`
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
`;

const ItemButtonImg = styled.img``;