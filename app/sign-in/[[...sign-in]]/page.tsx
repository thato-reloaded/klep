import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { ArrowRight, Layers3, ShieldCheck } from "lucide-react";

const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN || "/sign-in";
const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP || "/sign-up";

export const metadata = {
  title: "Sign in | Klep AI",
};

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-base text-copy-primary">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <section className="hidden lg:flex items-center justify-center border-r border-default bg-accent-dim px-10 xl:px-14">
          <div className="max-w-xl space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.38em] text-brand">KLEP AI</p>
              <h1 className="text-4xl font-semibold leading-tight text-copy-primary">
                Turn ideas into clear system architecture.
              </h1>
            </div>
            <p className="max-w-lg text-base leading-7 text-copy-secondary">
              Access your workspace, review saved designs, and keep collaborating with your team.
            </p>
            <ul className="space-y-4 text-sm text-copy-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-surface/80 text-brand">
                  <Layers3 className="h-4 w-4" />
                </span>
                <span>Structured architecture planning in one place</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-surface/80 text-brand">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span>Secure, role-aware collaboration for every project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-surface/80 text-brand">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span>Fast handoff from concept to technical specification</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center px-12 py-16 sm:px-16 lg:px-20 xl:px-24">
          <div className="w-full max-w-[450px] rounded-3xl bg-surface/95 p-8 shadow-none sm:p-9">
            <div className="mb-6 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-copy-muted">Welcome back</p>
            </div>
            <SignIn
              path={signInUrl}
              routing="path"
              signUpUrl={signUpUrl}
              appearance={dark}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
