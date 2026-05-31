'use server'

import { auth } from '@/lib/auth/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
})

export async function signInAction(
  _prev: { error: string } | null,
  formData: FormData
) {
  const parsed = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message }
  }

  const { error } = await auth.signIn.email(parsed.data)

  if (error) return { error: error.message || 'Invalid credentials' }

  redirect('/')
}