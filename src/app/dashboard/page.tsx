'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClipboardIcon, CopyIcon, EyeIcon, EyeOffIcon, PencilIcon, Trash2Icon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"
import { toast } from "sonner"
import copy from 'clipboard-copy'

export default function Dashboard() {
  return (
    <>
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
    </>
  )
}

function PasswordItem(props: any) {
  const [showPassword, setShowPassword] = useState(false)

  const [site_name, setSite_name] = useState('Gmail')
  const [site_url, setSite_url] = useState('mail.google.com')
  const [password, setPassword] = useState('nopassword')
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
          <DropdownMenuLabel>{site_name}</DropdownMenuLabel>
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
        <p className="text-sm font-medium leading-none">{site_url}</p>
        <p className="text-sm text-muted-foreground truncate">{showPassword ? password : '••••••••'}</p>
      </div>
      {/* <div className="ml-auto font-medium">+$1,999.00</div> */}
      <Toggle pressed={showPassword} onPressedChange={(e) => setShowPassword(e)} aria-label="Toggle bold" className="ml-auto">
        {showPassword ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
      </Toggle>
      <Button onClick={() => {handleCopyClick(password); toast("Password has been copied.", {description: "You can use it now"});}} variant="ghost" className="flex h-8 w-8 p-0">
        <ClipboardIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

const handleCopyClick = async (text: string) => {
  try {
    await copy(text)
  } catch (error) {
    toast.error('Failed to copy password to clipboard')
  }
}