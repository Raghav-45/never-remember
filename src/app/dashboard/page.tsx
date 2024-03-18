'use client'

import { useGenerationStore } from '@/components/GenerationStore'
import PasswordItem from '@/components/PasswordItem'
import { authOptions } from '@/lib/auth'
import { getUserLoginDetails } from '@/lib/dbUtils'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PlusIcon, SearchIcon } from 'lucide-react'
import NewEntryDialog from '@/components/NewEntryDialog'

export default function Dashboard() {
  const { userLoginDetails, setUserLoginDetails } = useGenerationStore()

  const getUserDetails = async () => {
    const session = await getSession()
    if (!userLoginDetails.length) {
      const data = await getUserLoginDetails(session?.user.id!)
      setUserLoginDetails(data)
    }
  }
  getUserDetails()
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Passwords</CardTitle>
        <CardDescription>
          You don&apos;t have to remember 235 passwords.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 pt-3">
        <div className="top-0 z-10 sticky flex items-center space-x-2 backdrop-blur-md px-6 py-3">
          <NewEntryDialog />
          <Input
            type="search"
            placeholder="Search..."
            className="flex-auto w-full"
          />
          <Button
            variant="outline"
            size="icon"
            className="flex-none rounded-full w-9 h-9"
          >
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-8 px-6 pt-3">
          {userLoginDetails &&
          userLoginDetails.length > 0 &&
          userLoginDetails[0]?.contents.length > 0 && (
            userLoginDetails[0].contents.map((elem) => (
              <PasswordItem
                key={elem.url}
                name={elem.name}
                url={elem.url}
                image={elem.image}
                login={elem.login}
                password={elem.password}
              />
            ))
          )
          // : (
          //   <PasswordItem
          //     name="Preview"
          //     url="never-remember.vercel.app"
          //     image="g"
          //     login="example@mail.com"
          //     password="SuperSecretPassword"
          //   />
          // )
          }
        </div>
      </CardContent>
    </Card>
  )
}
