'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
