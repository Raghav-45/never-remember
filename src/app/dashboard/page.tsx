'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, ClipboardIcon, CopyIcon, DeleteIcon, EllipsisIcon, EyeIcon, EyeOffIcon, PencilIcon, SearchIcon, SettingsIcon, Trash2Icon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"
import { toast } from "sonner"
import {CopyToClipboard} from 'react-copy-to-clipboard'

export default function Dashboard() {
  return (
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Passwords</CardTitle>
                <CardDescription>
                  You don&apos;t have to remember 235 passwords.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pt-3">
                <div className="flex items-center space-x-2 sticky top-0 z-10 py-3 backdrop-blur-md px-6">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="flex-auto w-full"
                  />
                  <Button variant="outline" size="icon" className="flex-none h-9 w-9 rounded-full">
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-8 px-6 pt-3">
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                  <PasswordItem />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

function PasswordItem(props: any) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuLabel>Gmail</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PencilIcon className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon className="mr-2 h-4 w-4" />
              <span>Make a copy</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">mail.google.com</p>
        <p className="text-sm text-muted-foreground truncate">{showPassword ? 'raghavvv' : '••••••••'}</p>
      </div>
      {/* <div className="ml-auto font-medium">+$1,999.00</div> */}
      <Toggle pressed={showPassword} onPressedChange={(e) => setShowPassword(e)} aria-label="Toggle bold" className="ml-auto">
        {showPassword ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
      </Toggle>
      <Button onClick={() => {CopyToClipboard('copyText.value'); toast("Password has been copied.", {description: "You can use it now"});}} variant="ghost" className="flex h-8 w-8 p-0">
        <ClipboardIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}