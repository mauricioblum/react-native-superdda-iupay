import React from 'react';
import { render } from '@testing-library/react-native';

import { Card } from '../../components';

describe('<Card />', () => {
  it('should render and display', () => {
    const { getByTestId } = render(<Card cardTitle="Card Test" />);

    expect(getByTestId('defaultCard')).toBeTruthy();
  });

  it('should render and display with default prop', () => {
    const { getByTestId } = render(
      <Card type="default" cardTitle="Card Test" />,
    );

    expect(getByTestId('defaultCard')).toBeTruthy();
  });

  it('should render and display isDueText if set', () => {
    const { getByA11yLabel } = render(
      <Card isDue isDueText="Vencendo hoje" dueDate={new Date()} />,
    );

    expect(getByA11yLabel('dueDate').props.children).toContain('Vencendo hoje');
  });

  it('should render and display logo is not locked', () => {
    const { getByTestId } = render(
      <Card
        isLocked={false}
        logo="data:image/png;base64,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"
      />,
    );

    expect(getByTestId('cardLogo')).toBeTruthy();
  });

  it('should render and display lockedIcon and lockedText and shimmers if card is locked', () => {
    const { getByTestId, getAllByTestId } = render(
      <Card
        isLocked={true}
        logo="data:image/png;base64,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"
      />,
    );

    expect(getByTestId('lockIcon')).toBeTruthy();
    expect(getByTestId('lockedText')).toBeTruthy();
    expect(getAllByTestId('shimmer')).toBeTruthy();
  });

  it('should render and display CNPJ if is set', () => {
    const { getByTestId } = render(<Card cnpj="999999999" />);

    expect(getByTestId('cnpj').props.children).toContain('999999999');
  });

  it('should render and display paidText if isPaid', () => {
    const { getByTestId } = render(<Card isPaid />);

    expect(getByTestId('paid').props.children).toContain('PAGO');
  });

  it('should render and display Mail Icon if is mail', () => {
    const { getByTestId } = render(<Card cnpj="999999999" isFromMail />);

    expect(getByTestId('mailIcon')).toBeTruthy();
  });

  it('should render and display User Icon if isUserAdded', () => {
    const { getByTestId } = render(<Card cnpj="999999999" isUserAdded />);

    expect(getByTestId('userCheck')).toBeTruthy();
  });
});
