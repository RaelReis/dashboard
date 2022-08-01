import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const data = [
  {
    name: "May 12",
    Gasto: 4000,
    Ganho: 2400,
  },
  {
    name: "May 13",
    Gasto: 3000,
    Ganho: 1398,
  },
  {
    name: "May 14",
    Gasto: 2000,
    Ganho: 3800,
  },
  {
    name: "May 15",
    Gasto: 2780,
    Ganho: 3908,
  },
  {
    name: "May 16",
    Gasto: 1890,
    Ganho: 4800,
  },
  {
    name: "May 17",
    Gasto: 2390,
    Ganho: 3800,
  },
];

interface CustomTooltipProps {
  payload?: any[];
  active?: boolean;
}

export const ExpensesStatisticTab = () => {
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <ToolTip>
          <SpendItem>
            <p>{formatter.format(payload[0].value)}</p>
          </SpendItem>
          <IncomeItem>
            <p>{formatter.format(payload[1].value)}</p>
          </IncomeItem>
        </ToolTip>
      );
    }
    return null;
  };

  return (
    <ChartWrapper>
      <ChartLabelWrapper>
        <ChartLabel>Expenses statistics</ChartLabel>
        <ChartDateSelect>
          <DateOption>Week</DateOption>
          <DateOption>Month</DateOption>
          <DateOption>Year</DateOption>
        </ChartDateSelect>
      </ChartLabelWrapper>
      <ChartContainer>
        <LineChart width={600} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="Gasto" stroke="#ed3b20" dot={false} activeDot={{ r: 6 }} strokeWidth={4} />
          <Line type="monotone" dataKey="Ganho" stroke="#131313" dot={false} activeDot={{ r: 6 }} strokeWidth={4} />
        </LineChart>
      </ChartContainer>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const ChartContainer = styled.div`
  flex: 1;
  margin-top: 30px;
`;

const ChartLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChartLabel = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const ChartDateSelect = styled.select`
  color: #79797b;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
  background-color: #fafafa;
`;
const DateOption = styled.option``;

const ToolTip = styled.div`
  color: #fff;
`;

const SpendItem = styled.div`
  background-color: #ed3b20;
  padding: 5px 20px;
  margin: 5px;
  border-radius: 20px;
`;
const IncomeItem = styled.div`
  background-color: #131313;
  padding: 5px 20px;
  margin: 5px;
  border-radius: 20px;
`;
