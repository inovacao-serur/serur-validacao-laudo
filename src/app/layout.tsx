import ClientSessionProvider from "@/components/hoc/ClientSessionProvider";
import "./globals.css";
import { ReactNode } from "react";
import { DadosProvider } from "@/context/DadosContext";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`antialiased`}>
      <ClientSessionProvider>
        <div>
          <DadosProvider>
            {children}
          </DadosProvider>
        </div>
      </ClientSessionProvider>
      </body>
    </html>
  );
} 