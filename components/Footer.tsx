

import { Suspense } from "react"; 
import Link from "next/link";

import { connection } from "next/server";
import { navLinks, siteName } from "@/lib/site";

// A tiny component whose only job is to print the current year.
// It is "async" because it waits for connection() before reading the date.
async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-100">
      
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-leaf-700">{siteName}</p>
          <p className="mt-2 text-sm text-leaf-900/70">
            Discover landscapes, find the plants and materials behind them, and hire the people
            who build them.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-medium">Explore</p>
          <ul className="mt-2 space-y-1 text-sm text-leaf-900/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-leaf-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-medium">For sellers and professionals</p>
          <p className="mt-2 text-sm text-leaf-900/70">
            Selling and portfolio tools are coming soon.
          </p>
        </div>
      </div>

      <div className="border-t border-sand-200 py-4 text-center text-xs text-leaf-900/60">
        {/* Suspense wraps only the year. The rest of the footer loads instantly.
            fallback={null} means "show nothing for the split second the year loads". */}
        © <Suspense fallback={null}><CurrentYear /></Suspense> {siteName}. All rights reserved.
      </div>
    </footer>
  );
}