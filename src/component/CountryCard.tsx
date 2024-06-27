import React from "react";
import styled from "styled-components";
import { Country } from "../types/Country";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
  isSelected: boolean;
}

const Card = styled.div<{ isSelected: boolean }>`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: ${({ isSelected }) => (isSelected ? "#e0f7fa" : "#fff")};
  cursor: pointer;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
`;

const CountryName = styled.h3`
  margin-top: 16px;
  font-size: 1.5em;
`;

const CapitalName = styled.p`
  margin-top: 8px;
  font-size: 1.2em;
  color: #555;
`;

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onClick,
  isSelected,
}) => {
  return (
    <Card onClick={onClick} isSelected={isSelected}>
      <FlagImage src={country.flags.png} alt={`${country.name.common} flag`} />
      <CountryName>{country.name.common}</CountryName>
      <CapitalName>{country.capital}</CapitalName>
    </Card>
  );
};

export default CountryCard;
