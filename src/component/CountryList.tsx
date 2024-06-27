import React, { useEffect, useState } from "react";
import { Country } from "../types/Country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  padding: 16px;
`;

const SelectedCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 16px 0;
`;

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (err) {
        alert(err);
      }
    };
    fetchCountries();
  }, []);

  const handleCardClick = (country: Country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <div>
      <Title>선호 나라</Title>
      <SelectedCountriesContainer>
        {selectedCountries.map((country) => (
          <CountryCard
            key={country.cca3} // 각 나라의 고유 코드를 키로 사용
            country={country}
            onClick={() => handleCardClick(country)}
            isSelected={true}
          />
        ))}
      </SelectedCountriesContainer>
      <Title>나라 목록</Title>
      <GridContainer>
        {countries.map((country) => (
          <CountryCard
            key={country.cca3} // 각 나라의 고유 코드를 키로 사용
            country={country}
            onClick={() => handleCardClick(country)}
            isSelected={false} // 하단 목록에서는 isSelected를 항상 false로 설정
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default CountryList;
