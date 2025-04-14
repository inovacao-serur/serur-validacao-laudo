"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/signin");
    }
  }, [status]);

  if (status === "loading" || status === "unauthenticated") return null;


  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}