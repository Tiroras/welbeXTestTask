import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

interface IProps {
  title: string;
  info: string;
}

const Wrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  margin: 5px;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

const Info = styled(Text)`
  font-size: 18px;
  color: black;
`;

export const InfoItem: React.FC<IProps> = ({title, info}) => (
  <Wrapper>
    <Title>{title}:</Title>
    <Info>{info}</Info>
  </Wrapper>
);
