import en from './locales/en.json'
import hi from './locales/hi.json'

export type Language = 'en' | 'hi' | 'pa'

const locales = { en, hi } as const

type Locale = typeof en

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.')
  let current: unknown = obj
  for (const part of parts) {
    if (typeof current !== 'object' || current === null) return path
    current = (current as Record<string, unknown>)[part]
  }
  return typeof current === 'string' ? current : path
}

/**
 * Returns a translated string, interpolating {variable} placeholders.
 * Falls back to English if the key is missing in the target language.
 */
export function t(lang: Language, key: string, vars?: Record<string, string | number>): string {
  const locale = (locales[lang as keyof typeof locales] ?? locales.en) as unknown as Record<
    string,
    unknown
  >
  let text = getNestedValue(locale, key)
  if (text === key) {
    text = getNestedValue(en as unknown as Record<string, unknown>, key)
  }
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, String(v))
    }
  }
  return text
}

export { en, hi }
export type { Locale }
