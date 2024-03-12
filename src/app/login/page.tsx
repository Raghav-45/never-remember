'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CustomIcons } from "@/components/CustomIcons"
import { signIn } from "next-auth/react"

// export default function Login() {
//   return (
//     // <div className="flex w-[100vw] h-[90vh] items-center">
//       <Card className="w-full max-w-xl mx-auto">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-3xl font-bold">Password Manager</CardTitle>
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
//                 <Link className="ml-auto inline-block text-sm underline" href="#">
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
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <CustomIcons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button onClick={() => signIn('google')} variant="outline">
            <CustomIcons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
  )
}