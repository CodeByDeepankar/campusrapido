
import type { Metadata } from "next";
import RoleEntryPage from "@/components/role-entry-page";

export const metadata: Metadata = {
  title: "Student Portal",
};

export default function StudentPage() {
  return (
    <RoleEntryPage
      role="Student portal"
      title="Your parcels, one place."
      description="Create delivery requests, propose a delivery fee, schedule pickups and track your campus deliveries."
    />
  );
}
