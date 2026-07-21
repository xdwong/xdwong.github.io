import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function InnerPage({ index, eyebrow, children }: { index: string; eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main>
    <SiteHeader />
    <section className="inner-content">
      <header className="compact-page-title"><span>{index}</span><h1>{eyebrow}</h1></header>
      {children}
    </section>
    <SiteFooter />
  </main>;
}
