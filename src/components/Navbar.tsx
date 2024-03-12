import Link from 'next/link'
import { LockKeyholeIcon } from 'lucide-react'

const Navbar = async () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit backdrop-blur-sm bg-white/30 border-b border-zinc-500 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 px-4'>
        {/* LOGO */}
        <Link href='/' className='flex gap-2 items-center'>
          <LockKeyholeIcon className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='block text-zinc-700 text-sm font-semibold uppercase'>
            Never Remember
          </p>
        </Link>

        {/* SEARCH BAR */}
        {/* <SearchBar /> */}

        {/* {session?.user ? (
          <ProfileNav user={session.user} />
        ) : (
          <Link href='/login' className={buttonVariants()}>
            Login
          </Link>
        )} */}
      </div>
    </div>
  )
}

export default Navbar