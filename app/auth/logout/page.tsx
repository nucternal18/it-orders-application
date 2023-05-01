"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Logout() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      signOut();
    }
    router.push("/");
  }, []);

  return (
    <section className="relative min-h-screen flex justify-center items-center w-full">
      <h1 className="text-3xl font-mono font-medium dark:text-yellow-500">
        Logging out.......
      </h1>
    </section>
  );
}
