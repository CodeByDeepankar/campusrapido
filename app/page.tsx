
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  ShieldCheck,
  Smartphone,
  Truck,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Create a request",
    description:
      "Enter your parcel details, campus destination and proposed delivery fee.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Get matched",
    description:
      "Available security personnel can accept your request or suggest a different fee.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Receive your parcel",
    description:
      "Track the delivery status and confirm when your parcel reaches you.",
  },
];

const features = [
  {
    icon: Clock3,
    title: "Instant or scheduled",
    description:
      "Request delivery immediately or schedule it around your parcel's expected arrival.",
  },
  {
    icon: BadgeCheck,
    title: "Verified personnel",
    description:
      "Only college-authorized security accounts can accept delivery requests.",
  },
  {
    icon: Smartphone,
    title: "Live status updates",
    description:
      "Stay informed as your request moves from accepted to delivered.",
  },
  {
    icon: MapPin,
    title: "Campus destinations",
    description:
      "Choose your hostel, academic block, library or another campus location.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101820]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-[#101820]">
              <Zap size={23} strokeWidth={2.8} />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-white">
                Campus<span className="text-emerald-400">Rapido</span>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Campus delivery network
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            <a
              href="#how-it-works"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              How it works
            </a>
            <a
              href="#features"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#access"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Get started
            </a>
          </div>

          <a
            href="#access"
            className="flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-[#101820] transition hover:bg-emerald-300"
          >
            Explore <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/[0.07] blur-[130px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium tracking-wide text-emerald-300">
                Built for campus life
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your parcel.
              <br />
              Your campus.
              <br />
              <span className="text-emerald-400">Your doorstep.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Your delivery reaches the college gate. Campus Rapido helps
              bring it the rest of the way — directly to your hostel or
              campus destination.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#access"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-[#101820] transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Explore the platform
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-medium text-white transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                See how it works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <ShieldCheck size={17} className="text-emerald-400" />
                Verified personnel
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock3 size={17} className="text-emerald-400" />
                Flexible scheduling
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-5 rounded-[36px] bg-emerald-400/[0.06] blur-2xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-[#18232d] p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Delivery overview
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Parcel on the move
                  </h2>
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400">
                  <Package size={23} />
                </div>
              </div>

              {/* Route illustration */}
              <div className="my-8 rounded-2xl border border-white/[0.07] bg-[#101820] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-700/50 text-slate-300">
                    <Truck size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      College main gate
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Parcel collection point
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                    Pickup
                  </span>
                </div>

                <div className="ml-[21px] flex h-14 items-center border-l border-dashed border-emerald-400/50 pl-8">
                  <span className="text-xs text-slate-500">
                    Campus delivery route
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Building2 size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      Your hostel
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Final destination
                    </p>
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-slate-400">
                    Delivery
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                  <ShieldCheck size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">
                    Campus personnel
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Verified delivery partner
                  </p>
                </div>
                <BadgeCheck className="text-emerald-400" size={20} />
              </div>

              <p className="mt-5 text-center text-[11px] text-slate-500">
                Illustrative delivery workflow · Not live tracking
              </p>
            </div>

            <div className="absolute -right-3 top-24 hidden rounded-xl border border-white/10 bg-[#202e3a] p-3 shadow-xl sm:block">
              <Package size={20} className="text-emerald-400" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-white/[0.07] bg-[#131e27] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Simple process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From the gate to your doorstep.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Three simple steps to coordinate your campus parcel delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/[0.08] bg-[#18232d] p-7 transition hover:-translate-y-1 hover:border-emerald-400/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                      <Icon size={23} />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Designed for students
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need.
                <br />
                Nothing you don't.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              A focused delivery coordination platform designed around
              everyday college life and campus operations.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#18232d]/70 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-6 font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role access */}
      <section
        id="access"
        className="px-5 pb-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#18232d] p-7 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              One campus. Two roles.
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A better campus delivery experience starts here.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Whether you're receiving a parcel or coordinating its
              delivery, Campus Rapido connects the process.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#101820] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Smartphone size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                For students
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Request a parcel pickup, propose a fee and receive
                updates until your parcel arrives.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                Student experience <ArrowRight size={16} />
              </span>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#101820] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <ShieldCheck size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                For security personnel
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Manage availability, accept delivery requests and
                coordinate campus handovers.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                Security experience <ArrowRight size={16} />
              </span>
            </article>
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            Role dashboards and account access will be implemented in
            the next development milestone.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-emerald-400" />
            <span className="text-sm font-bold text-white">
              Campus<span className="text-emerald-400">Rapido</span>
            </span>
          </div>

          <p className="text-center text-xs text-slate-500">
            Campus delivery, simplified.
          </p>

          <p className="text-xs text-slate-600">
            © 2026 Campus Rapido
          </p>
        </div>
      </footer>
    </main>
  );
}
