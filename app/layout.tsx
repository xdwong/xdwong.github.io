import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;
  const description = "Dr. Meng Li is a professor and founding director of the Bauer Human-Centered AI Institute at the University of Houston.";

  return {
    title: "Meng Li | Human-Centered AI & Operations",
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: "Meng Li | Human-Centered AI & Operations", description, type: "website", images: [{ url: imageUrl, width: 1792, height: 939, alt: "Meng Li — Human-Centered AI & Operations" }] },
    twitter: { card: "summary_large_image", title: "Meng Li | Human-Centered AI & Operations", description, images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
