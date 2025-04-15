// components/ClientSessionProvider.tsx
"use client"; // This marks the component as a client component

import { SessionProvider } from "next-auth/react";

export default function ClientSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
