import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckIcon, MountainIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'

const IconWithText = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center space-y-1">
      <CheckIcon className="inline-block mr-2 w-4 h-4" />
      <div className="font-semibold text-sm md:text-md lg:text-lg">{text}</div>
    </li>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center px-4 lg:px-6 h-14">
        <Link className="flex justify-center items-center" href="#">
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 ml-auto">
          <Link
            className="font-medium text-sm underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="font-medium text-sm underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className={buttonVariants({ variant: 'default' })}
            href="/login"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 w-full">
          <div className="px-4 md:px-6 container">
            <div className="gap-6 lg:gap-12 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-bold text-3xl sm:text-5xl xl:text-6xl/none tracking-tighter">
                    Secure your digital life with our Password Manager
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Access your passwords securely across all your devices.
                    Never forget a password again.
                  </p>
                </div>
                <div className="min-[400px]:flex-row">
                  <Link
                    className="inline-flex justify-center items-center bg-gray-900 hover:bg-gray-900/90 dark:hover:bg-gray-50/90 dark:bg-gray-50 disabled:opacity-50 shadow px-8 rounded-md h-10 font-medium text-gray-50 text-sm dark:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none dark:focus-visible:ring-gray-300"
                    href="/login"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="lg:order-last mx-auto rounded-xl sm:w-full overflow-hidden aspect-video object-center object-cover lg:aspect-square"
                height="550"
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 w-full">
          <div className="items-center gap-6 lg:gap-10 grid lg:grid-cols-2 px-4 md:px-6 container">
            <div className="space-y-2">
              <h2 className="font-bold text-3xl md:text-4xl/tight tracking-tighter">
                Features
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                Our password manager is packed with features to keep your
                passwords secure and your life simple.
              </p>
            </div>
            <div className="items-start gap-6 grid mx-auto max-w-5xl">
              <div className="gap-1 grid">
                <div className="inline-flex items-center">
                  <CheckIcon className="mr-2 w-4 h-4" />
                  <h3 className="font-bold text-lg">
                    Secure password generation
                  </h3>
                </div>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Automatically create strong, unique passwords for every site.
                </p>
              </div>
              <div className="gap-1 grid">
                <div className="inline-flex items-center">
                  <CheckIcon className="mr-2 w-4 h-4" />
                  <h3 className="font-bold text-lg">Secure password storage</h3>
                </div>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Your passwords are encrypted and only accessible to you.
                </p>
              </div>
              <div className="gap-1 grid">
                <div className="inline-flex items-center">
                  <PlusIcon className="mr-2 w-4 h-4 rotate-45" />
                  <h3 className="font-bold text-lg">Auto-fill functionality</h3>
                </div>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Automatically fill in your passwords on websites with the
                  click of a button.
                </p>
              </div>
              <div className="gap-1 grid">
                <div className="inline-flex items-center">
                  <CheckIcon className="mr-2 w-4 h-4" />
                  <h3 className="font-bold text-lg">Cross-device sync</h3>
                </div>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Access your passwords on all your devices, wherever you are.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 border-t w-full">
          <div className="px-4 md:px-6 container">
            <div className="gap-10 md:gap-16 grid md:grid-cols-2 sm:px-10">
              <div className="space-y-4">
                <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg text-sm">
                  Performance
                </div>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] lg:leading-tighter tracking-tighter">
                  Traffic spikes should be exciting, not scary.
                </h2>
                <Link
                  className="inline-flex justify-center items-center bg-gray-900 hover:bg-gray-900/90 dark:hover:bg-gray-50/90 dark:bg-gray-50 disabled:opacity-50 shadow px-4 py-2 rounded-md h-9 font-medium text-gray-50 text-sm dark:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg text-sm">
                  Security
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Fully managed infrastructure designed to scale dynamically
                  with your traffic, a global edge to ensure your site is fast
                  for every customer, and the tools to monitor every aspect of
                  your app.
                </p>
                <Link
                  className="inline-flex justify-center items-center border-gray-200 dark:border-gray-800 bg-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-950 disabled:opacity-50 shadow-sm px-4 py-2 border rounded-md h-9 font-medium text-sm hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 disabled:pointer-events-none dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="flex sm:flex-row flex-col items-center gap-2 px-4 md:px-6 py-6 border-t w-full shrink-0">
        <p className="text-gray-500 text-xs dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  )
}
