import Link from 'next/link'

import { buttonVariants } from '@/shared/components/ui'

export default function Home() {
  return (
    <div className='space-y-5 text-center'>
      <h1 className='text-4xl font-bold'>Home page</h1>
      <Link href='/auth/login' className={buttonVariants()}>
        Login Account
      </Link>
    </div>
  )
}
