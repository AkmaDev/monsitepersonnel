"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-accent-glow">
              Strategic Africa
            </h1>
          </div>

          {/* <div className="flex items-center space-x-4 pb-4">
            <h1 className="text-xl font-semibold">
              ak<span className=" text-4xl text-accent-glow">.</span>ma
            </h1>
          </div> */}

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-accent-glow transition-colors"
            >
              Dernières analyses
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-accent-glow transition-colors"
            >
              Tech & Innovation
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-accent-glow transition-colors"
            >
              Gouvernance
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-accent-glow transition-colors"
            >
              À propos
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  className="w-64 pl-9 bg-secondary/50 border-border/50 focus:border-primary/50"
                />
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-primary/20 hover:text-primary hover:bg-primary/10"
            >
              S&apos;abonner
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
