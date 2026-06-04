import { createNeonAuth } from '@neondatabase/auth/next/server'

type NeonAuth = ReturnType<typeof createNeonAuth>

const globalForAuth = globalThis as unknown as { neonAuth: NeonAuth | undefined }

export const auth = globalForAuth.neonAuth ?? createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET!,
  },
})

if (process.env.NODE_ENV !== 'production') globalForAuth.neonAuth = auth