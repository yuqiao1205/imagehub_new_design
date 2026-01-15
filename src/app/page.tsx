import Image from "next/image";
import { galleryItems } from "./data";

export default function Home() {
  const baseItems = [...galleryItems].sort(() => Math.random() - 0.5);

  // Ensure the layout always renders full rows of 3.
  const items = [...baseItems];
  let pad = 0;
  while (items.length % 3 !== 0) {
    const source = baseItems[pad % baseItems.length];
    items.push({ ...source, id: `${source.id}-pad-${pad}` });
    pad += 1;
  }

  const rows = Array.from({ length: Math.ceil(items.length / 3) }, (_, idx) =>
    items.slice(idx * 3, idx * 3 + 3)
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(900px_circle_at_70%_30%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(800px_circle_at_80%_80%,rgba(236,72,153,0.08),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
        {/* Left sidebar */}
        <aside className="border-b border-zinc-200/70 bg-white/70 px-6 py-6 backdrop-blur md:sticky md:top-0 md:h-screen md:w-80 md:border-b-0 md:border-r">
          <div className="flex items-center justify-between md:block">
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-tight text-zinc-900">
                Image Hub
              </p>
              <p className="text-sm text-zinc-600">
                Modern, light, and dynamic.
              </p>
            </div>

            <a
              href="#gallery"
              className="hidden rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-zinc-900/10 transition hover:bg-zinc-800 md:inline-flex mt-3"
            >
              View Gallery
            </a>
          </div>

          <nav className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Menu
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Gallery", href: "#gallery" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-200 hover:bg-white"
                  >
                    <span>{l.label}</span>
                    <span
                      className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-600"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 rounded-2xl border border-zinc-200/70 bg-white p-4">
            <p className="text-sm font-medium text-zinc-900">Tip</p>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Hover any image for a subtle lift + zoom.
            </p>
          </div>

          <p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Image Hub</p>
        </aside>

        {/* Right main */}
        <main className="flex-1 px-6 py-10 md:px-10">
          <header className="max-w-3xl">
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Lauren's Dynamic Art Gallery
            </h1>
            <p className="mt-3 text-pretty text-base leading-7 text-zinc-600">
              An evolving collection of hand-drawn artworks, digital experiments, and creative illustrations
            </p>
          </header>

          <section id="gallery" className="mt-10 scroll-mt-10">
            <div className="space-y-3 md:space-y-4">
              {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="flex w-full gap-3 md:gap-4">
                  {row.map((item, colIdx) => (
                    <figure
                      key={`${item.id}-${rowIdx}-${colIdx}`}
                      style={{ flexGrow: item.ratio, flexBasis: 0 }}
                      className="group relative h-40 min-w-0 overflow-hidden transition hover:-translate-y-0.5 sm:h-44 md:h-52 lg:h-60"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`object-${item.objectFit || 'cover'} transition duration-500 ease-out group-hover:scale-[1.06]`}
                        priority={item.id === "p1"}
                      />

                      {/* Hover overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-zinc-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-xs font-medium text-white/95 drop-shadow">
                          {item.alt}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="mt-16 max-w-3xl scroll-mt-10">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              About
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600">
              I create warm, curious, and slightly surreal images by mixing texture, light, and clean composition. Inspired by Van Gogh, I experiment with bold color blocks and acrylic markers to create expressive, layered works. This site is a living archive of my recent work and visual explorations in progress.
            </p>
          </section>

          <section id="contact" className="mt-10 max-w-3xl scroll-mt-10">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              Contact
            </h2>
            <div className="mt-3 space-y-2 text-base leading-7 text-zinc-600">
              <p>Email: laurenpy1226@gmail.com</p>
              <p>Location: San Francisco, CA</p>
              <p>Portfolio: <a href="https://yuqiao1205.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="text-zinc-950 hover:text-zinc-700 underline">yuqiao1205.github.io/portfolio</a></p>
              <p>Available for commissions and collaborations</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
