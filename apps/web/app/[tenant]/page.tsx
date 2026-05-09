import { notFound } from 'next/navigation'

interface TenantPageProps {
  params: Promise<{ tenant: string }>
}

/**
 * Phase 0: Resolves the tenant slug from the URL and renders it.
 * Phase 1 will replace this with the full site generator.
 */
export default async function TenantPage({ params }: TenantPageProps) {
  const { tenant } = await params

  // Validate slug: only lowercase alphanumeric + hyphens
  if (!/^[a-z0-9-]{2,63}$/.test(tenant)) {
    notFound()
  }

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <p className="text-muted-foreground mb-2 text-sm font-medium tracking-widest uppercase">
          Dikho — Phase 0
        </p>
        <h1 className="text-foreground mb-2 text-4xl font-bold">
          Tenant: <span className="text-primary">{tenant}</span>
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          This is where <strong className="text-foreground">{tenant}.dikho.in</strong> will render
          its AI-generated site.
        </p>
        <p className="text-muted-foreground font-devanagari mt-8 text-sm">
          Google pe Dikho. Customers tak Pahuncho. 🧡
        </p>
      </div>
    </main>
  )
}

export function generateMetadata({ params }: TenantPageProps) {
  return params.then(({ tenant }) => ({
    title: `${tenant} — Dikho`,
    description: `${tenant} on Dikho — Google pe Dikho, customers tak pahuncho`,
  }))
}
