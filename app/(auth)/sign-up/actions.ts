'use server'

import { auth } from '@/lib/auth/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
})

export async function signUpAction(
  _prev: { error: string } | null,
  formData: FormData
) {
  const parsed = signUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message }
  }

  const { error } = await auth.signUp.email(parsed.data)

  if (error) return { error: error.message || 'Failed to create account' }

  redirect('/')
}