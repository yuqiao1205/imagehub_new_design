import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "../../data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ImagePage({ params }: PageProps) {
  const { id } = await params;
  const item = galleryItems.find((item) => item.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(900px_circle_at_70%_30%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(800px_circle_at_80%_80%,rgba(236,72,153,0.08),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-zinc-900/10 transition hover:bg-zinc-800"
          >
            ← Back to Gallery
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <figure className="relative mb-6 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="object-contain"
              priority
            />
          </figure>

          <h1 className="text-2xl font-semibold text-zinc-950 mb-4">{item.alt}</h1>

          {item.description && (
            <p className="text-base leading-7 text-zinc-600 max-w-2xl text-center">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return galleryItems.map((item) => ({
    id: item.id,
  }));
}