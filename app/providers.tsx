'use client';

import {AuthProvider} from './auth';

export function Providers({ children }) {
  return (
      <AuthProvider>{children}</AuthProvider>
  );
}