const links = [
  ["Research", "/research"],
  ["Service", "/service"],
  ["Talks", "/talks"],
  ["Teaching", "/teaching"],
  ["Team", "/team"],
];

export function SiteHeader() {
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="Meng Li home"><span>ML</span>Meng Li</a>
    <nav className="primary-nav" aria-label="Primary navigation">
      {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
    </nav>
    <a className="header-link" href="mailto:mli@bauer.uh.edu">Contact <span aria-hidden="true">↗</span></a>
  </header>;
}
