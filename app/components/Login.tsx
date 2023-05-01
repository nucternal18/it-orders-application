"use client";
import React from "react";
import { signIn } from "next-auth/react";
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInputs> = React.useCallback(
    async (data) => {

      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl: "/protected",
        });

        if(result?.error) {
            console.error(result.error);
        }
        if (result?.ok) {
          router.push("/protected");
          reset();
        }

      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  return (
    <section className="flex min-h-full overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
            Sign in to your account
          </h1>
        </div>
        <div className="sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white sm:w-[500px] w-full px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 w-full">
              <FormInput
                id="email"
                type="email"
                label="Email"
                placeholder="hello@me.com"
                autoComplete="email"
                {...register("email")}
              />
              <FormInput
                id="password"
                type="password"
                label="Password"
                placeholder="********"
                {...register("password")}
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              color="gray"
              className="mt-3 w-full"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
