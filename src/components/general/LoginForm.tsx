"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { RiGoogleFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Logged in with Google");
      router.push("/dashboard/projects");
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm bg-background">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Use your Google account to sign-in</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          type="button"
          className="w-full bg-secondary hover:bg-secondary/80"
          onClick={handleGoogleLogin}
        >
          <RiGoogleFill />
        </Button>
      </CardContent>
    </Card>
  );
}
