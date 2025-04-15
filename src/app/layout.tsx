import ClientSessionProvider from "@/components/hoc/ClientSessionProvider";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`antialiased`}>
      <ClientSessionProvider>
        <div className="max-w-[95%] mx-auto">
          {children}
        </div>
      </ClientSessionProvider>
      </body>
    </html>
  );
} 