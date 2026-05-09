import { NextRequest, NextResponse } from 'next/server'

const ROOT_DOMAIN = process.env['ROOT_DOMAIN'] ?? 'dikho.in'

/**
 * Rewrites subdomain requests to the [tenant] route.
 * e.g. drmehta.dikho.in → /drmehta
 *
 * In local dev, use ?tenant=<slug> as a shortcut:
 * http://localhost:3000?tenant=drmehta → renders the drmehta tenant page
 */
export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') ?? ''
  const { pathname, searchParams } = req.nextUrl

  // Local dev escape hatch: ?tenant=<slug>
  const tenantParam = searchParams.get('tenant')
  if (tenantParam && process.env.NODE_ENV === 'development') {
    const url = req.nextUrl.clone()
    url.pathname = `/${tenantParam}`
    url.searchParams.delete('tenant')
    return NextResponse.rewrite(url)
  }

  // Strip port for local dev
  const host = hostname.replace(/:d+$/, '')

  // Not a subdomain of our root domain — skip
  if (!host.endsWith(`.${ROOT_DOMAIN}`)) {
    return NextResponse.next()
  }

  const tenant = host.replace(`.${ROOT_DOMAIN}`, '')

  // Skip system subdomains
  if (['www', 'app', 'admin', 'api'].includes(tenant)) {
    return NextResponse.next()
  }

  // Don't rewrite if already on the tenant path
  if (pathname.startsWith(`/${tenant}`)) {
    return NextResponse.next()
  }

  const url = req.nextUrl.clone()
  url.pathname = `/${tenant}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
}
