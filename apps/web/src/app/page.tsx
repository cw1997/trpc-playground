import {HydrateClient, trpc} from '@/trpc/server';
import { ClientGreeting } from './client-greeting';

export default async function Home() {
  void trpc.post.all.prefetch();
  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}