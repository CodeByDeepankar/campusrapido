
import type { Metadata } from "next";
import RoleEntryPage from "@/components/role-entry-page";

export const metadata: Metadata = {
  title: "Admin Portal",
};

export default function AdminPage() {
  return (
    <RoleEntryPage
      role="Administration"
      title="Campus operations."
      description="Manage authorized security accounts, monitor delivery activity and resolve delivery disputes."
    />
  );
}
