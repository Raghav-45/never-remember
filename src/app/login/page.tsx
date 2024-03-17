"use client";

import { Button } from "@/components/ui/button";
import { CustomIcons } from "@/components/CustomIcons";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { db } from "@/lib/db";

// export default function Login() {
//   return (
//     // <div className="flex items-center w-[100vw] h-[90vh]">
//       <Card className="mx-auto w-full max-w-xl">
//         <CardHeader className="space-y-1">
//           <CardTitle className="font-bold text-3xl">Password Manager</CardTitle>
//           <CardDescription>Securely store and manage your passwords</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" placeholder="m@example.com" type="email" />
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Master Password</Label>
//                 <Link className="inline-block ml-auto text-sm underline" href="#">
//                   Forgot your password?
//                 </Link>
//               </div>
//               <Input id="password" type="password" />
//             </div>
//           </div>
//           <Button onClick={() => signIn('google')} className="w-full">Login</Button>
//         </CardContent>
//       </Card>
//     // </div>
//   )
// }

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      // await signIn("google");
      await db.set('raghav', 'pro')
    } catch (error) {
      toast("There was a problem.", {
        description: "there was an error while logging in with Google",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="gap-6 grid grid-cols-2">
      <Button disabled={isLoading} variant="outline">
        <CustomIcons.gitHub className="mr-2 w-4 h-4" />
        Github
      </Button>
      <Button
        onClick={loginWithGoogle}
        disabled={isLoading}
        variant="outline"
      >
        {isLoading ? (
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <CustomIcons.google className="mr-2 w-4 h-4" />
        )}
        Google
      </Button>
    </div>
  );
}
