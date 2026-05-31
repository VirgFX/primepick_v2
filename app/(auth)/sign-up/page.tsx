'use client'

import { useActionState, useState } from 'react'
import { signUpAction } from './actions'
import { authClient } from '@/lib/auth/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signUpAction, null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl px-8 py-10 space-y-6">

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
            👋
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => authClient.signIn.social({ provider: 'google', callbackURL: '/' })}
        >
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400">or</span>
          </div>
        </div>

        <form action={formAction} className="space-y-4">
          <input type="hidden" name="name" value={`${firstName} ${lastName}`.trim()} />

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="e.g. Howard"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-label="First name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="e.g. Thurman"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                aria-label="Last name"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. howard.thurman@gmail.com"
              required
              aria-label="Email address"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required aria-label="Password"/>
          </div>

          {state?.error && (
            <p className="text-sm text-red-500">{state.error}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-zinc-900 hover:bg-zinc-600 text-white"
            disabled={isPending}
          >
            {isPending ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Have an account?{' '}
          <Link href="/sign-in" className="text-zinc-900  font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
