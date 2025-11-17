import type { ReactNode } from "react";

export default function OfficerLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '220px' }}>
        <h2>Officer Sidebar</h2>
        <p>Links to operational tools.</p>
      </aside>
      <div style={{ flex: 1 }}>
        <header>
          <h2>Officer Topbar</h2>
          <p>Status indicators and quick actions.</p>
        </header>
        <section>{children}</section>
      </div>
    </div>
  );
}
