
import type { Metadata } from "next";
import RoleEntryPage from "@/components/role-entry-page";

export const metadata: Metadata = {
  title: "Security Portal",
};

export default function SecurityPage() {
  return (
    <RoleEntryPage
      role="Security portal"
      title="Manage campus deliveries."
      description="Manage your availability, review incoming requests, negotiate delivery fees and coordinate parcel handovers."
    />
  );
}
