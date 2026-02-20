// app/members/room/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MembersRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const ok = cookieStore.get("osa_member")?.value === "1";
  if (!ok) redirect("/members");
  return <>{children}</>;
}