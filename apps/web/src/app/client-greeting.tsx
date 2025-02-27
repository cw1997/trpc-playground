'use client';
// <-- hooks can only be used in client components

import { trpc } from '@/trpc/client';

export function ClientGreeting() {
  const all = trpc.post.all.useQuery()
  if (!all.data) return <div>Loading...</div>;
  return <div>{all.data.hello}</div>;
}