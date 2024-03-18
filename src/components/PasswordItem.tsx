'use client'

import { FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  ClipboardIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
import { useState } from 'react'
import { toast } from 'sonner'
import copy from 'clipboard-copy'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { getUserLoginDetails, removeFromLoginDetails } from '@/lib/dbUtils'
import { getSession } from 'next-auth/react'

interface PasswordItemProps {
  url: string
  name: string
  image: string
  login: string
  password: string
}

const PasswordItem: FC<PasswordItemProps> = ({
  url,
  name,
  image,
  login,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleDelete = async () => {
    const session = await getSession()
    const existingLoginDetails = (
      await getUserLoginDetails(session?.user.id!)
    )[0]?.id
    removeFromLoginDetails(existingLoginDetails, {
      url,
      image,
      name,
      login,
      password,
    })
  }
  return (
    <div className="flex items-center">
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-9 h-9">
              <AvatarImage src={image} alt="Avatar" />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-full">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="font-medium text-sm leading-none">{name}</p>
                <p className="text-muted-foreground text-xs leading-none">
                  {login}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <PencilIcon className="mr-2 w-4 h-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon className="mr-2 w-4 h-4" />
                <span>Make a copy</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Trash2Icon className="mr-2 w-4 h-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this from our servers?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleDelete}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="space-y-1 ml-4">
        <p className="font-medium text-sm leading-4">{url}</p>
        <p className="font-medium text-xs leading-none">{login}</p>
        <p className="text-muted-foreground text-xs truncate leading-none">
          {showPassword ? password : '••••••••'}
        </p>
      </div>
      {/* <div className="ml-auto font-medium">+$1,999.00</div> */}
      <Toggle
        pressed={showPassword}
        onPressedChange={(e) => setShowPassword(e)}
        aria-label="Toggle bold"
        className="ml-auto"
      >
        {showPassword ? (
          <EyeIcon className="w-4 h-4" />
        ) : (
          <EyeOffIcon className="w-4 h-4" />
        )}
      </Toggle>
      <Button
        onClick={async () => {
          try {
            await copy(password)
            toast('Password has been copied.', {
              description: 'You can use it now',
            })
          } catch (error) {
            toast.error('Failed to copy password to clipboard')
          }
        }}
        variant="ghost"
        className="flex p-0 w-8 h-8"
      >
        <ClipboardIcon className="w-4 h-4" />
      </Button>
    </div>
  )
}

export default PasswordItem
