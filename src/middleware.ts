import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const { url, cookies } = request

  const session = cookies.get('session')?.value

  const isAuthPage = url.includes('/auth')

  if (isAuthPage) {
    if (session) {
      return NextResponse.redirect(new URL('/dashboard/settings', url))
    } else {
      return NextResponse.next()
    }
  }
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*']
}
