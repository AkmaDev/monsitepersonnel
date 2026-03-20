"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <span className="text-base font-semibold text-foreground">
            Notes · Manassé AKPOVI
          </span>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Accueil
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
