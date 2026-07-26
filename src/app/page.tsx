import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex items-center justify-end p-6">
        <ModeToggle />
      </header>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-4 px-6 pb-24">
        <h1 className="font-sans text-4xl font-semibold tracking-tight text-balance">
          Design foundation ready
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          Neutral theme tokens, dark mode, and component utilities are wired up.
          Brand colors and real UI come next.
        </p>
      </main>
    </div>
  );
}
