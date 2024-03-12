'use client'

import { FC } from 'react'
import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

interface SessionProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

const SessionProvider: FC<SessionProviderProps> = ({children, session}) => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default SessionProvider