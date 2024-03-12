import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="flex w-[100vw] h-[90vh] items-center">
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">Password Manager</CardTitle>
          <CardDescription>Securely store and manage your passwords</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Master Password</Label>
                <Link className="ml-auto inline-block text-sm underline" href="#">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
          </div>
          <Button className="w-full">Login</Button>
        </CardContent>
      </Card>
    </div>
  )
}