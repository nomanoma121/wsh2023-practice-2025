import { ApolloProvider } from '@apollo/client';
import type { FC, ReactNode } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Fallback } from '../../../pages/Fallback';
import { apolloClient } from '../../../utils//apollo_client';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <RecoilRoot>
        <ErrorBoundary fallbackRender={Fallback}>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  </ApolloProvider>
);
