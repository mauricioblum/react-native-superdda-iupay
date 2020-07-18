import React from 'react';
import { StyleProp, ViewStyle, Text, View } from 'react-native';
import { NetflixCard } from './netflixCard';
import { LightBillCard } from './lightBillCard';

export type CardType = 'netflix' | 'nubank' | 'lightBill' | 'default';

export interface CardProps {
  type?: CardType;
  logo?: string;
  value?: number;
  dueDate?: string;
  cnpj?: string;
  text?: string | JSX.Element;
  barColor?: string;
  isDue?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isPaid?: boolean;
  onMailButtonPress?(): void;
  lightBillFlagStatus?: 'green' | 'yellow' | 'red';
}

export const Card: React.FC<CardProps> = (props) => {
  switch (props.type) {
    case 'netflix':
      return <NetflixCard {...props} />;
    case 'lightBill':
      return <LightBillCard {...props} />;
    case 'default':
      return (
        <View>
          <Text>Default</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text>Default</Text>
        </View>
      );
  }
};
