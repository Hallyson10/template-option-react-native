import React from 'react';
import {render} from '@testing-library/react-native';

import App from './App';
test('sum', () => {
  const {getByText} = render(<App />);
  expect(getByText('ola mundo')).toBeTruthy();
});
