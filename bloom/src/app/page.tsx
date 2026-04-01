export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          private social space
        </p>

        <h1 className="mb-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          bloom
        </h1>

        <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          a private, invite-only social app for your circle only.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
            join with invite
          </button>

          <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white">
            sign in
          </button>
        </div>
      </section>
    </main>
  );
}