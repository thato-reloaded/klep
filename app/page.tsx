import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-base px-6 py-10 text-copy-primary">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-brand" />
              <CardTitle>Klep AI</CardTitle>
            </div>
            <CardDescription>Real-time collaborative system design workspace.</CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
        </section>
      </div>
    </main>
  );
}
