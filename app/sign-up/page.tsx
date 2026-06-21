import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { ArrowRight, Layers3, ShieldCheck } from "lucide-react";

const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN || "/sign-in";
const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP || "/sign-up";

export const metadata = {
  title: "Sign up | Klep AI",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-base text-copy-primary">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <section className="hidden lg:flex items-center justify-center border-r border-default bg-accent-dim px-5 xl:px-7">
          <div className="max-w-xl space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.38em] text-brand">KLEP AI</p>
              <h1 className="text-4xl font-semibold leading-tight text-copy-primary">
                Start building your architecture workspace.
              </h1>
            </div>
            <p className="max-w-lg text-base leading-7 text-copy-secondary">
              Create your account to save projects, reuse templates, and move from planning to execution.
            </p>
            <ul className="space-y-4 text-sm text-copy-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-surface/80 text-brand">
                  <Layers3 className="h-4 w-4" />
                </span>
                <span>Build shared system maps with your team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-surface/80 text-brand">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span>Keep projects, notes, and drafts in sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-surface/80 text-brand">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span>Move faster from concept to implementation</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center px-12 py-16 sm:px-16 lg:px-20 xl:px-24">
          <div className="w-full max-w-[450px] rounded-3xl bg-surface/95 p-8 shadow-none sm:p-9">
            <div className="mb-6 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-copy-muted">Create account</p>
            </div>
            <SignUp
              path={signUpUrl}
              routing="path"
              signInUrl={signInUrl}
              appearance={dark}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
