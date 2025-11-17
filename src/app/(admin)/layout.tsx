import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '240px' }}>
        <h2>Admin Sidebar</h2>
        <p>Administration navigation placeholder.</p>
      </aside>
      <div style={{ flex: 1 }}>
        <header>
          <h2>Admin Topbar</h2>
          <p>System-wide controls and alerts.</p>
        </header>
        <section>{children}</section>
      </div>
    </div>
  );
}
