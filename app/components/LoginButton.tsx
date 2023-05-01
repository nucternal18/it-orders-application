"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const LoginButton: React.FC = () => {
  const { data: session, status } = useSession();

  if(status === 'loading') return null

  return (
    <>
      {session ? (
        <div className="space-x-4 flex items-center">
          <div className="text-sm">
            <Link href="/protected">Order Home</Link>
          </div>
          <div className="text-sm border border-stone-300 rounded-sm hover:bg-stone-300 hover:text-stone-100 px-2 py-1">
            <Link href="/auth/logout">Logout</Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoginButton;
