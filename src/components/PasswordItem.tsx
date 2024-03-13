'use client'

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ClipboardIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { toast } from "sonner";
import copy from "clipboard-copy";

interface PasswordItemProps {}

const PasswordItem: FC<PasswordItemProps> = ({}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [site_name, setSite_name] = useState("Gmail");
  const [site_url, setSite_url] = useState("mail.google.com");
  const [password, setPassword] = useState("nopassword");
  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-9 h-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuLabel>{site_name}</DropdownMenuLabel>
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
          <DropdownMenuItem>
            <Trash2Icon className="mr-2 w-4 h-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="space-y-1 ml-4">
        <p className="font-medium text-sm leading-none">{site_url}</p>
        <p className="text-muted-foreground text-sm truncate">
          {showPassword ? password : "••••••••"}
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
            await copy(password);
            toast("Password has been copied.", {
              description: "You can use it now",
            });
          } catch (error) {
            toast.error("Failed to copy password to clipboard");
          }
        }}
        variant="ghost"
        className="flex p-0 w-8 h-8"
      >
        <ClipboardIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default PasswordItem;
