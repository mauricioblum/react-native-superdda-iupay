import React from 'react';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitleContainer,
  CardTitle,
  Logo,
  DueDateText,
  CardText,
  CnpjText,
  MailButton,
  MailIcon,
  CardValue,
  CurrencyText,
  ValueText,
} from './styles';
import NumberFormat from 'react-number-format';

import mailIcon from '../../../assets/images/mail.png';

import type { CardProps } from '.';

const logoStyle = {
  width: 90,
  height: 30,
};

export const DefaultCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  cardTitle,
  text,
  textColor,
  barColor,
  isDue,
  containerStyle,
  onMailButtonPress,
  logo,
}) => {
  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <CardTitleContainer>
            {logo && (
              <Logo style={logoStyle} source={logo} resizeMode="contain" />
            )}
            <CardTitle>{cardTitle}</CardTitle>
          </CardTitleContainer>
          <DueDateText isDue={isDue}>{dueDate}</DueDateText>
        </CardHeader>
        <CardBody>
          {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
          <CardText style={{ color: textColor }}>{text}</CardText>
          {children}
        </CardBody>
        <CardFooter>
          <MailButton onPress={onMailButtonPress}>
            <MailIcon source={mailIcon} />
          </MailButton>
          <CardValue>
            <CurrencyText>R$</CurrencyText>
            <NumberFormat
              value={value}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <ValueText>{number}</ValueText>}
              decimalScale={2}
              fixedDecimalScale
            />
          </CardValue>
        </CardFooter>
      </Content>
    </Container>
  );
};
