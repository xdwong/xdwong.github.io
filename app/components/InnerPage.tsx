import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function InnerPage({ index, eyebrow, title, intro, children }: { index: string; eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main>
    <SiteHeader />
    <section className="inner-hero">
      <p className="eyebrow">{index} — {eyebrow}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
    <section className="inner-content">{children}</section>
    <SiteFooter />
  </main>;
}
