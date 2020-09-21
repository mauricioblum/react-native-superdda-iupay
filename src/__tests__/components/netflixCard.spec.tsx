import React from 'react';
import { render } from '@testing-library/react-native';

import { Card } from '../../components';

describe('<Card type="netflix" />', () => {
  it('should render and display', () => {
    const { getByTestId } = render(
      <Card type="netflix" cardTitle="Card Test" />,
    );

    expect(getByTestId('netflixCard')).toBeTruthy();
  });

  it('should render and display isDueText if set', () => {
    const { getByA11yLabel } = render(
      <Card
        type="netflix"
        isDue
        isDueText="Vencendo hoje"
        dueDate={new Date()}
      />,
    );

    expect(getByA11yLabel('dueDate').props.children).toContain('Vencendo hoje');
  });

  it('should render and display CNPJ if is set', () => {
    const { getByTestId } = render(<Card type="netflix" cnpj="999999999" />);

    expect(getByTestId('cnpj').props.children).toContain('999999999');
  });

  it('should render and display paidText if isPaid', () => {
    const { getByTestId } = render(<Card type="netflix" isPaid />);

    expect(getByTestId('paid').props.children).toContain('PAGO');
  });

  it('should render and display Mail Icon if is mail', () => {
    const { getByTestId } = render(
      <Card type="netflix" cnpj="999999999" isFromMail />,
    );

    expect(getByTestId('mailIcon')).toBeTruthy();
  });

  it('should render and display User Icon if isUserAdded', () => {
    const { getByTestId } = render(
      <Card type="netflix" cnpj="999999999" isUserAdded />,
    );

    expect(getByTestId('userCheck')).toBeTruthy();
  });
});
