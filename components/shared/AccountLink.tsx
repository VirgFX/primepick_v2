'use client'

import { authClient } from '@/lib/auth/client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { User } from 'lucide-react'

export function AccountLink() {
  const { data: session } = authClient.useSession()

  if (!session) {
    return (
      <Link
        href="/sign-in"
        className="flex items-center gap-1 text-sm hover:text-yellow-400 transition-colors"
      >
        <User size={16} />
        My Account
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-yellow-400 transition-colors outline-none">
        <User size={16} />
        {session.user.name ?? 'My Account'}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard/orders">My Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 cursor-pointer"
          onClick={async () => { await authClient.signOut(); window.location.href = '/sign-in' }}
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}