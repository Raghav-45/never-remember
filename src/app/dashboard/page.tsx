import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, CopyIcon, DeleteIcon, EllipsisIcon, PencilIcon, SearchIcon, SettingsIcon, Trash2Icon } from "lucide-react"

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
        <p className="text-sm text-muted-foreground truncate">••••••••</p>
      </div>
      {/* <div className="ml-auto font-medium">+$1,999.00</div> */}
      <Button variant="ghost" className="flex h-8 w-8 p-0 ml-auto">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}