import styled from "styled-components";
import logo from "../../assets/img/logo.svg";

import dashboardIcon from "../../assets/img/dashboard_icon.svg";
import dashboardBlackIcon from "../../assets/img/dashboard_black_icon.svg";
import investmentsIcon from "../../assets/img/investments_icon.svg";
import investmentsBlackIcon from "../../assets/img/investments_black_icon.svg";
import transactionsIcon from "../../assets/img/transactions_icon.svg";
import transactionsBlackIcon from "../../assets/img/transactions_black_icon.svg";
import walletIcon from "../../assets/img/wallet_icon.svg";
import walletBlackIcon from "../../assets/img/wallet_black_icon.svg";
import singOutIcon from "../../assets/img/sing-out_icon.svg";
import singOutBlackIcon from "../../assets/img/sing-out_black_icon.svg";

export const AsideBar = () => {
  return (
    <Aside>
      <LogoArea>
        <Logo src={logo} alt="Logo" />
      </LogoArea>
      <ProfileArea>
        <ProfileImage />
        <WellcomeMessage>Wellcome back</WellcomeMessage>
        <ProfileName>Kelon</ProfileName>
      </ProfileArea>
      <MoneyBudgetArea>
        <MoneyText>$34,321</MoneyText>
        <BudgetText>Monthly budget</BudgetText>
      </MoneyBudgetArea>
      <NavBar>
        <NavList>
          <NavItem>
            <NavItemIcon src={dashboardIcon} alt="Icone de dashboard" />
            <NavItemText>Dashboard</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon src={investmentsIcon} alt="Icone de Investimentos" />
            <NavItemText>Investiments</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon src={transactionsIcon} alt="Icone de Trançaões" />
            <NavItemText>Transactions</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon src={walletIcon} alt="Icone de carteira" />
            <NavItemText>Wallet</NavItemText>
          </NavItem>
          <NavSingOut>
            <NavItemIcon src={singOutIcon} alt="" />
            <NavItemText>Sing-out</NavItemText>
          </NavSingOut>
        </NavList>
      </NavBar>
    </Aside>
  );
};

const Aside = styled.aside`
  height: 95%;
  min-width: 315px;

  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin: auto 45px;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;

const LogoArea = styled.div`
  margin: 40px 0;
`;

const Logo = styled.img``;

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  background: #292d44;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  margin-bottom: 20px;
`;
const WellcomeMessage = styled.span`
  color: #b2b2b2;
  font-size: 1.8rem;
`;
const ProfileName = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;

const MoneyBudgetArea = styled.div`
  margin-top: 30px;
`;

const MoneyText = styled.span`
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
`;

const BudgetText = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #b2b2b2;
  font-weight: 500;
`;

const NavBar = styled.nav`
  flex: 1;
  margin-top: 50px;
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 500;
  color: #b2b2b2;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
`;

const NavItemIcon = styled.img``;

const NavItemText = styled.span`
  margin-left: 20px;
`;

const NavSingOut = styled.li`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 40px;
  padding: 10px;

  cursor: pointer;
`;
