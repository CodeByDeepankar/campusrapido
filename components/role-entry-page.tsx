
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

type RoleEntryPageProps = {
  role: string;
  title: string;
  description: string;
};

export default function RoleEntryPage({
  role,
  title,
  description,
}: RoleEntryPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#18232d] p-8 sm:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
          <ShieldCheck size={27} />
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
          {role}
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white">
          {title}
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-8 rounded-xl border border-white/10 bg-[#101820] p-4">
          <p className="text-sm font-semibold text-white">
            Dashboard coming next
          </p>
          <p className="mt-2 text-xs leading-6 text-slate-500">
            Authentication and dashboard functionality are not implemented yet.
            This page is currently a frontend placeholder.
          </p>
        </div>

        <Link
          href="/"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-[#101820] transition hover:bg-emerald-300"
        >
          Return to homepage
          <ArrowRight size={17} />
        </Link>
      </div>
    </main>
  );
}
