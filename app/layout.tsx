import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klep AI",
  description: "Klep AI editor with Clerk authentication",
};

const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN || "/sign-in";
const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP || "/sign-up";

const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorBackground: "var(--bg-base)",
    colorBackgroundSecondary: "var(--bg-surface)",
    colorText: "var(--text-primary)",
    colorTextSecondary: "var(--text-secondary)",
    colorInputBackground: "var(--bg-surface)",
    colorInputBorder: "var(--border-default)",
    colorInputText: "var(--text-primary)",
    colorPrimary: "var(--accent-primary)",
    colorPrimaryText: "var(--bg-base)",
    colorBorder: "var(--border-default)",
    colorSectionBorder: "var(--border-default)",
    colorCardBackground: "var(--bg-surface)",
    colorCardText: "var(--text-primary)",
    colorHeaderText: "var(--text-primary)",
    colorLink: "var(--accent-primary)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={clerkAppearance}
          signInUrl={process.env.NEXT_PUBLIC_SIGN_IN || "/sign-in"}
          signUpUrl={process.env.NEXT_PUBLIC_SIGN_UP || "/sign-up"}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
