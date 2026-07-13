// app/profile/[id]/page.tsx

import { notFound } from 'next/navigation';

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUser(params.id);

  if (!user) {
    notFound(); // Показує /profile/not-found.tsx потрібно явно викликати функцію notFound() у коді маршруту або layout цієї секції.
  }

  return <div>{user.name}</div>;
}
