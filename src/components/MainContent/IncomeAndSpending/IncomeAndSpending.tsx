import styled, { keyframes } from "styled-components";

export const IncomeAndSpending = () => {
  return (
    <IncomeAndSpendingBox>
      <IncomeWrapper>
        <SvgBox>
          <Svg xmlns="http://www.w3.org/2000/svg" width="80.519" height="21.373" viewBox="0 0 80.519 21.373">
            <SvgPath
              id="teste"
              d="M934.983,361.611a9.191,9.191,0,0,0,4.875-1.429c3.893-3.058,6.631-11.712,13.255-11.871s10.049,10.47,13.242,11.237,9.688-6.244,12.453-5.4,5.369,12.134,11.031,12.532,8.241-9.87,13.64-13.394,8.4-.767,8.4-.767"
              transform="translate(-933.482 -346.81)"
              fill="none"
              stroke="#3f8963"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </Svg>
        </SvgBox>
        <IncomeInfo>
          <IncomeText>Income</IncomeText>
          <IncomeMoney>$5,500</IncomeMoney>
        </IncomeInfo>
      </IncomeWrapper>
      <IncomeWrapper>
        <SvgBox>
          <Svg xmlns="http://www.w3.org/2000/svg" width="78.096" height="21.81" viewBox="0 0 78.096 21.81">
            <SvgPath
              id="a"
              d="M2749.061,683.309c13.078-3.9,14.09,13.656,20.954,14.451s9.827-11.85,12.428-12.572,9.827,6.142,12.572,5.564,5.914-12.35,13.828-11.747,9.459,14.137,17.82,13.77"
              transform="translate(-2748.632 -677.487)"
              fill="none"
              stroke="#ed3b20"
              stroke-linecap="round"
              stroke-width="3"
            />
          </Svg>
        </SvgBox>
        <IncomeInfo>
          <IncomeText>Spending</IncomeText>
          <IncomeMoney>$2,700</IncomeMoney>
        </IncomeInfo>
      </IncomeWrapper>
    </IncomeAndSpendingBox>
  );
};

const svgAnimation = keyframes`
  0% {
    stroke-dashoffset: 110;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const IncomeAndSpendingBox = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  & > :nth-child(2) {
    border: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const IncomeWrapper = styled.div`
  border: 2px solid #79797b;
  padding: 15px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const IncomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
`;
const IncomeText = styled.span`
  color: #79797b;
`;
const IncomeMoney = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const SvgBox = styled.div`
  display: flex;
  align-items: center;
`;

const Svg = styled.svg`
  margin-inline: auto;
`;

const SvgPath = styled.path`
  stroke-dasharray: 110;
  stroke-width: 4;
  animation: ${svgAnimation} 1.5s ease-out;
`;
