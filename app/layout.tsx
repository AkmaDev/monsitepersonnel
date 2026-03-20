import type { Metadata } from "next";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Manassé AKPOVI | Product Builder — Numérique Inclusif & Impact Afrique",
  description:
    "Je construis des produits numériques pour les communautés que la technologie oublie. À l'origine de BibleFon — histoires bibliques en langue fon pour les communautés orales du Bénin.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/favicons/favicon-48x48.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "64x64",
      url: "/favicons/favicon-64x64.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicons/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      url: "/favicons/favicon-128x128.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "256x256",
      url: "/favicons/favicon-256x256.png",
    },
    { rel: "shortcut icon", url: "/favicon.png" },
  ],
  openGraph: {
    title: "Manassé AKPOVI | Product Builder — Numérique Inclusif & Impact Afrique",
    description:
      "Je construis des produits numériques pour les communautés que la technologie oublie. À l'origine de BibleFon — histoires bibliques en langue fon pour les communautés orales du Bénin.",
    url: "https://manasseakpovi.com",
    type: "website",
    images: [
      {
        url: "/og-homepage.png",
        width: 1200,
        height: 630,
        alt: "Manassé AKPOVI — Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manassé AKPOVI | Product Builder — Numérique Inclusif & Impact Afrique",
    description:
      "Je construis des produits numériques pour les communautés que la technologie oublie. À l'origine de BibleFon.",
    images: ["/og-homepage.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            toastOptions={{
              style: {
                borderRadius: "var(--radius)",
                padding: "1rem 1.5rem",
                boxShadow: "var(--shadow-premium)",
              },
            }}
            duration={4000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
