"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { galleryItems } from "./data";

// Pagination config
const ITEMS_PER_PAGE = 12;

export default function Home() {
  const [sortBy, setSortBy] = useState('random');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [randomSeed, setRandomSeed] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Infinite scroll state
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-seed *after* initial render to avoid SSR/client hydration mismatch.
    const t = window.setTimeout(() => {
      setRandomSeed(Date.now());
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [searchQuery, selectedCategory, sortBy, sortOrder, randomSeed]);

  const seededRandom = (seed: number) => {
    // mulberry32 PRNG
    return () => {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  const categories = Array.from(new Set(galleryItems.map(item => item.category).filter(cat => cat !== undefined))).sort();

  // Get all unique tags for tag suggestions
  const allTags = Array.from(new Set(galleryItems.map(item => item.tag).filter(tag => tag !== undefined))).sort();

  const sortedItems = useMemo(() => {
    let items = [...galleryItems];
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => {
        const tagMatch = item.tag?.toLowerCase().includes(query);
        const altMatch = item.alt.toLowerCase().includes(query);
        const categoryMatch = item.category?.toLowerCase().includes(query);
        return tagMatch || altMatch || categoryMatch;
      });
    }
    
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }
    if (sortBy === 'time') {
      return items.sort((a, b) => sortOrder === 'asc' ? new Date(a.createtime).getTime() - new Date(b.createtime).getTime() : new Date(b.createtime).getTime() - new Date(a.createtime).getTime());
    }
    const rand = seededRandom(randomSeed);
    return items.sort(() => rand() - 0.5);
  }, [sortBy, selectedCategory, sortOrder, randomSeed, searchQuery]);

  // Get currently displayed items
  const displayedItems = sortedItems.slice(0, displayedCount);

  // IntersectionObserver for infinite scroll
  const loadMoreItems = useCallback(() => {
    if (isLoading || displayedCount >= sortedItems.length) return;
    
    setIsLoading(true);
    // Simulate loading delay for smooth experience
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + ITEMS_PER_PAGE, sortedItems.length));
      setIsLoading(false);
    }, 150);
  }, [isLoading, displayedCount, sortedItems.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedCount < sortedItems.length) {
          loadMoreItems();
        }
      },
      {
        root: null,
        rootMargin: '200px', // Load before reaching bottom
        threshold: 0.1
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreItems, displayedCount, sortedItems.length]);

  const baseItems = displayedItems;

  // Do not pad with duplicates; padding caused repeated images to appear in category filters.
  const items = baseItems;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(900px_circle_at_70%_30%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(800px_circle_at_80%_80%,rgba(236,72,153,0.08),transparent_55%)]" />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-zinc-950/30 backdrop-blur-sm transition-opacity duration-200 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-200 ease-out will-change-transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">
            <div className="space-y-0.5">
              <a
                href="https://artwork-hub.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-tight text-zinc-900 hover:underline"
              >
                Lauren's Art Gallery
              </a>
              <p className="text-xs text-zinc-600">Modern,Light,Dynamic</p>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-zinc-800 shadow-sm shadow-zinc-900/5 transition hover:bg-zinc-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-6">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-zinc-900/10 transition hover:bg-zinc-800"
            >
              View Gallery
            </a>

            <nav className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Menu</p>
              <ul className="mt-3 space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileMenuOpen(false)}
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
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
        {/* Left sidebar */}
        <aside className="border-b border-zinc-200/70 bg-white/70 px-6 py-6 backdrop-blur md:sticky md:top-0 md:h-screen md:w-80 md:border-b-0 md:border-r">
          <div className="flex items-center gap-3 md:block">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-zinc-800 shadow-sm shadow-zinc-900/5 transition hover:bg-zinc-50 md:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d={mobileMenuOpen ? "M6 6L18 18M18 6L6 18" : "M4 7H20M4 12H20M4 17H20"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="space-y-1">
              <a
                href="https://artwork-hub.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-tight text-zinc-900 hover:underline"
              >
                  <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Lauren's Dynamic Art Gallery
            </h2>
              </a>
              <p className="text-sm text-zinc-600">
                Modern, light, Van Gogh–inspired art collection.
              </p>
            </div>

            <a
              href="#gallery"
              className="hidden rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-zinc-900/10 transition hover:bg-zinc-800 md:inline-flex mt-3"
            >
              View Gallery
            </a>
          </div>

          <nav className="mt-6 hidden md:block">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Menu
            </p>
            <ul className="mt-3 space-y-2">
              {[
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

          <div className="mt-8 hidden rounded-2xl border border-zinc-200/70 bg-white p-4 md:block">
            <p className="text-sm font-medium text-zinc-900">Tip</p>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Hover over any image for a subtle lift and zoom on desktop.
            </p>
          </div>
        </aside>

        {/* Right main */}
        <main className="flex-1 px-6 py-10 md:px-10">
          <header className="max-w-3xl">
            {/* <h1 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Lauren's Dynamic Art Gallery
            </h1> */}
            <p className="mt-4 max-w-prose border-l border-zinc-200 pl-4 text-pretty text-base leading-7 text-zinc-600">
              Welcome to a living collection of <span className="font-medium text-zinc-900">hand-drawn artworks</span>,
              <span className="font-medium text-zinc-900"> digital experiments</span>, and playful illustrations each piece a small story.
              Browse, filter, and come back often new work appears over time, so there's always something fresh to discover.
            </p>
          </header>

          <section id="gallery" className="mt-10 scroll-mt-10">
            <div className="mb-4">
              <label className="block text-sm font-medium text-zinc-950 mb-2">Sort by:</label>
              <div className="relative">
                <button
                  onClick={() => { setOpenDropdown(!openDropdown); }}
                  className="px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-950 text-left flex justify-between items-center"
                >
                  <span>
                    {sortBy === 'random'
                      ? 'Random'
                      : sortOrder === 'desc'
                        ? 'Newest → Oldest'
                        : 'Oldest → Newest'}
                  </span>
                  <span>▼</span>
                </button>
                {openDropdown && (
                  <div className="absolute top-full left-0 bg-white border border-zinc-300 rounded-md mt-1 z-10 w-max">
                    <div
                      onClick={() => { setRandomSeed(Date.now()); setSortBy('random'); setOpenDropdown(false); }}
                      className="px-3 py-2 hover:bg-zinc-100 cursor-pointer"
                    >
                      Random
                    </div>
                    <div
                      onClick={() => { setSortBy('time'); setSortOrder('desc'); setOpenDropdown(false); }}
                      className="px-3 py-2 hover:bg-zinc-100 cursor-pointer"
                    >
                      Newest → Oldest
                    </div>
                    <div
                      onClick={() => { setSortBy('time'); setSortOrder('asc'); setOpenDropdown(false); }}
                      className="px-3 py-2 hover:bg-zinc-100 cursor-pointer"
                    >
                      Oldest → Newest
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              {/* Search input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-950 mb-2">Search by tag, keyword, or category:</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Try: cat, flower, beach, girl..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-950 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
                {/* Tag suggestions */}
                {allTags.length > 0 && (
                  <div className="mt-2">
                    <span className="text-xs text-zinc-500 mr-2">Popular tags:</span>
                    {allTags.slice(0, 11).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag || '')}
                        className={`inline-block px-2 py-0.5 text-xs rounded-full mr-1 mb-1 transition ${
                          searchQuery.toLowerCase() === tag?.toLowerCase()
                            ? 'bg-zinc-800 text-white'
                            : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <label className="block text-sm font-medium text-zinc-950 mb-2">Filter by category:</label>
              <div role="radiogroup" className="flex flex-wrap gap-3">
                <label className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  <span>All</span>
                </label>
                {categories.map((cat) => (
                  <label key={cat} className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="columns-3 gap-6 md:gap-8 space-y-4 md:space-y-6">
              {items.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-zinc-500 text-lg">No items found for "{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-zinc-800 hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                <>
                  {searchQuery && (
                    <div className="col-span-full text-sm text-zinc-500 mb-2">
                      Showing {displayedItems.length} of {sortedItems.length} items for "{searchQuery}"
                    </div>
                  )}
                  {items.map((item) => (
                    <Link key={item.id} href={`/gallery/${item.id}`} className="block mb-4">
                      <figure
                        style={{ aspectRatio: item.ratio }}
                        className="group relative overflow-hidden transition hover:-translate-y-0.5 focus:-translate-y-0.5 break-inside-avoid cursor-pointer p-6"
                      >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.06] group-focus:scale-[1.06]"
                      />

                      {/* Hover overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-zinc-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" />
                      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                        <p className="text-xs font-medium text-white/95 drop-shadow">
                          {item.alt}
                        </p>
                        {item.tag && (
                          <span className="inline-block mt-1 px-1.5 py-0.5 text-[10px] bg-zinc-800/70 text-white/90 rounded">
                            {item.tag}
                          </span>
                        )}
                      </figcaption>
                    </figure>
                    </Link>
                  ))}
                  
                  {/* Infinite scroll trigger */}
                  <div ref={loadMoreRef} className="col-span-full">
                    {displayedCount < sortedItems.length && (
                      <div className="flex justify-center py-12">
                        <span className="inline-flex items-center gap-2 text-zinc-600 text-xl font-medium animate-pulse bg-white border border-zinc-200 px-8 py-4 rounded-full shadow-sm">
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Load More
                        </span>
                      </div>
                    )}
                    {displayedCount >= sortedItems.length && sortedItems.length > 0 && (
                      <div className="text-center py-6 text-zinc-400 text-sm">
                        You've seen all {sortedItems.length} items
                      </div>
                    )}
                  </div>
                </>
              )}
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
