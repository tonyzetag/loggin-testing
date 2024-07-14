"use client";

import { useSession } from "next-auth/react";

export default function SessionData() {

  const { data: session, status } = useSession();
  const username = session?.user?.name;
  const role = session?.user?.role;

  return (
    <div>
      <p>User: {username}</p>
      <p>Status: {status}</p>
      <p>role: {role}</p>
    </div>
  );
}