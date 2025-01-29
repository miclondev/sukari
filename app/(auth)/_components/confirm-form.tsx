"use client";

import { Loader } from "@/components/common/loader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { confirmSignUp } from "aws-amplify/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  confirmationCode: z.string().trim().min(1, { message: "Verification code is required" }),
});

type Schema = z.infer<typeof formSchema>;

export const ConfirmForm = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
    defaultValues: { confirmationCode: "" },
  });

  const onSubmit = async ({ confirmationCode }: Schema) => {
    try {
      setLoading(true);

      const { isSignUpComplete } = await confirmSignUp({
        username: email!,
        confirmationCode,
      });

      if (isSignUpComplete) {
        toast.info("Account successful confirmed.", {
          description: "Now signin with your credentials",
        });
        push("/auth/login");
      }
    } catch (e: any) {
      toast.error(e?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground mt-2">Join thousands of travelers worldwide</p>
        </div>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="confirmationCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="one-time-code"
                        placeholder="Verification Code"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader />}
              {loading ? "Wait..." : "Confirm Code"}
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Go back to </span>
          <Link href="/login" className="text-ef-teal hover:text-ef-teal/90 font-medium">
            Log In
          </Link>
        </div>
      </Card>
    </div>
  );
};
