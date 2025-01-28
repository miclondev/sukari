"use client";

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
import { confirmResetPassword, resetPassword, signIn } from "aws-amplify/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const verificationSchema = z
  .object({
    code: z.string().trim().length(6, "Verification code must be 6 digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export const ForgotForm = () => {
  const [step, setStep] = useState<"email" | "verification">("email");
  const [userEmail, setUserEmail] = useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const verificationForm = useForm<z.infer<typeof verificationSchema>>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onEmailSubmit = async (values: z.infer<typeof emailSchema>) => {
    try {
      setLoading(true);
      const { nextStep } = await resetPassword({
        username: values.email,
      });
      if (nextStep?.resetPasswordStep === "CONFIRM_RESET_PASSWORD_WITH_CODE") {
        setLoading(false);
        toast.info("Check your email for a code to reset your password");
        setUserEmail(values.email);
        setStep("verification");
      }
    } catch (e: any) {
      toast.error(e?.message);
    } finally {
      setLoading(false);
    }
  };

  const onVerificationSubmit = async (values: z.infer<typeof verificationSchema>) => {
    try {
      const { code, password, confirmPassword } = values;
      if (password !== confirmPassword) {
        toast.error("Passwords don't match");
        return;
      }

      await confirmResetPassword({
        username: userEmail,
        newPassword: password,
        confirmationCode: code,
      });

      const { isSignedIn } = await signIn({
        username: userEmail!,
        password: password,
      });
      if (isSignedIn) {
        router.push("/");
      }
    } catch (e: any) {
      toast.error(e?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = () => {
    // Mock resending verification code
    console.log("Resending verification code to:", userEmail);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 space-y-6">
        {step === "email" ? (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Reset Password</h1>
              <p className="text-muted-foreground mt-2">
                Enter your email to receive a verification code
              </p>
            </div>

            <Form {...emailForm}>
              <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                <FormField
                  control={emailForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-ef-teal hover:bg-ef-teal/90">
                  Send Reset Code
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Verify Code</h1>
              <p className="text-muted-foreground mt-2">
                Enter the 6-digit code sent to {userEmail}
              </p>
            </div>

            <Form {...verificationForm}>
              <form
                onSubmit={verificationForm.handleSubmit(onVerificationSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={verificationForm.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Verification Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter 6-digit code" maxLength={6} {...field} />
                      </FormControl>
                      <FormMessage />
                      <Button
                        type="button"
                        variant="link"
                        className="text-ef-teal hover:text-ef-teal/90 p-0 h-auto font-medium"
                        onClick={handleResendCode}
                      >
                        Resend code
                      </Button>
                    </FormItem>
                  )}
                />
                <FormField
                  control={verificationForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={verificationForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-ef-teal hover:bg-ef-teal/90">
                  Reset Password
                </Button>
              </form>
            </Form>
          </>
        )}

        <div className="text-center text-sm">
          <Link href="/login" className="text-ef-teal hover:text-ef-teal/90 font-medium">
            Back to login
          </Link>
        </div>
      </Card>
    </div>
  );
};
