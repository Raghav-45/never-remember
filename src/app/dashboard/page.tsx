'use client'

import { useGenerationStore } from '@/components/GenerationStore'
import PasswordItem from '@/components/PasswordItem'
import { authOptions } from '@/lib/auth'
import { getUserLoginDetails } from '@/lib/dbUtils'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

export default function Dashboard() {
  const { userLoginDetails, setUserLoginDetails } = useGenerationStore()

  const getUserDetails = async () => {
    const session = await getSession()
    if (!userLoginDetails) {
      const data = await getUserLoginDetails(session?.user.id!)
      setUserLoginDetails(data)
    }
  }
  getUserDetails()
  return (
    <>
      {userLoginDetails &&
      userLoginDetails.length > 0 &&
      userLoginDetails[0]?.contents.length > 0 ? (
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
      ) : (
        <PasswordItem
          name="Preview"
          url="never-remember.vercel.app"
          image="g"
          login="example@mail.com"
          password="SuperSecretPassword"
        />
      )}
    </>
  )
}
